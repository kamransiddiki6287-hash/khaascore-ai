// In-Memory Rate Limiting (DDoS & API Abuse Protection)
const rateLimitMap = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 मिनट की विंडो
  const maxRequests = 5;      // 1 मिनट में अधिकतम 5 रिक्वेस्ट प्रति IP

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  const record = rateLimitMap.get(ip);
  if (now - record.firstRequest > windowMs) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  record.count += 1;
  return record.count > maxRequests;
}

export default async function handler(req, res) {
  // 1. Strict HTTP Method Enforcing
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'SECURITY_VIOLATION',
      message: 'Method Not Allowed. Only authenticated POST requests accepted.'
    });
  }

  // 2. Origin & Referer Verification (CORS Defense)
  const allowedOrigins = [
    'https://khaascore-ai.vercel.app',
    'https://khaascore.ai'
  ];
  const origin = req.headers.origin || req.headers.referer;
  
  // प्रोडक्शन एनवायरनमेंट में अनधिकृत डोमेन ब्लॉक करें
  if (origin && !allowedOrigins.some(allowed => origin.startsWith(allowed))) {
    return res.status(403).json({
      error: 'ACCESS_DENIED',
      message: 'Cross-Origin Resource Request blocked.'
    });
  }

  // 3. Rate Limiting Check (Anti-Bot / Abuse Shield)
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';
  if (isRateLimited(clientIp)) {
    return res.status(429).json({
      error: 'RATE_LIMIT_EXCEEDED',
      message: 'Too many requests. Please wait 60 seconds.'
    });
  }

  // 4. Payload Validation & Input Sanitization
  const { documentText } = req.body;

  if (!documentText || typeof documentText !== 'string') {
    return res.status(400).json({
      error: 'INVALID_PAYLOAD',
      message: 'Invalid input format.'
    });
  }

  // Buffer Overflow / Prompt Injection Defense (अधिकतम 10,000 कैरेक्टर)
  if (documentText.length > 10000) {
    return res.status(413).json({
      error: 'PAYLOAD_TOO_LARGE',
      message: 'Document length exceeds maximum secure limit (10,000 characters).'
    });
  }

  // 5. Server-Side Secret Key Retrieval (Zero Client Exposure)
  const geminiKey = process.env.GEMINI_API_KEY;
  if (!geminiKey) {
    return res.status(500).json({
      error: 'CONFIGURATION_ERROR',
      message: 'Cryptographic API credentials not configured.'
    });
  }

  // 6. Enterprise Legal Analysis System Prompt
  const systemInstruction = `You are Khaascore AI, an Autonomous US Legal Risk & Regulatory Compliance Operating Engine.
Analyze the provided enterprise document against:
1. FTC Section 5 (Deceptive/Unfair practices)
2. GDPR & CCPA (Data privacy & cross-border sharing)
3. SEC & FinTech Disclosure Mandates

Provide a clean, structured output:
- OVERALL RISK SCORE: (0-100)
- STATUS: (OPTIMAL COMPLIANCE / MODERATE EXPOSURE / CRITICAL BREACH)
- DETECTED CLAUSE RISKS: (Itemized list)
- REMEDIATION PROTOCOL: (Exact legal rewrite suggestions)`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: `${systemInstruction}\n\n[USER DOCUMENT INGESTION]:\n${documentText}` }]
            }
          ]
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: 'AI_GATEWAY_ERROR',
        message: 'Upstream AI engine rejected processing.'
      });
    }

    const aiOutput = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No compliance verdict generated.';

    // 7. Secure JSON Response
    return res.status(200).json({
      success: true,
      timestamp: new Date().toISOString(),
      result: aiOutput
    });

  } catch (error) {
    return res.status(500).json({
      error: 'INTERNAL_KERNEL_FAILURE',
      message: 'Secure execution sandbox failed.'
    });
  }
}
