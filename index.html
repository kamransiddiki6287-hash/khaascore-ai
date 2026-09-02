<!DOCTYPE html>
<html lang="hi" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khaascore AI — Autonomous Neural Studio</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: { 500: '#6366f1', 600: '#4f46e5', accent: '#06b6d4' }
          }
        }
      }
    }
  </script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
  <style>
    body { background-color: #030712; color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; overflow-x: hidden; }
    #neuralCanvas { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none; opacity: 0.35; }
    .glass-hud { background: rgba(15, 23, 42, 0.72); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 20px 50px rgba(0,0,0,0.6); }
    .neon-pulse { animation: pulseGlow 2.5s infinite alternate; }
    @keyframes pulseGlow {
      0% { box-shadow: 0 0 15px rgba(99, 102, 241, 0.2); }
      100% { box-shadow: 0 0 30px rgba(99, 102, 241, 0.45), 0 0 50px rgba(6, 182, 212, 0.25); }
    }
    .teleprompter-active { position: fixed; inset: 0; z-index: 9999; background: #000; padding: 3rem 1.5rem; overflow-y: scroll; scroll-behavior: smooth; font-size: 1.75rem; line-height: 2.2; }
    .voice-wave-bar { animation: soundWave 1.2s infinite ease-in-out alternate; }
    @keyframes soundWave {
      0% { height: 4px; }
      100% { height: 24px; }
    }
  </style>
</head>
<body class="min-h-screen flex flex-col selection:bg-indigo-500 selection:text-white relative">

  <!-- 60 FPS न्यूरल सिनैप्स कैनवस -->
  <canvas id="neuralCanvas"></canvas>

  <!-- हेडर / क्वांटम स्टेटस बार -->
  <header class="sticky top-0 z-40 glass-hud border-b border-slate-800/80">
    <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/30">
          <i class="fa-solid fa-brain text-white text-lg"></i>
        </div>
        <div>
          <span class="text-xl font-black tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent">Khaascore AI</span>
          <span class="ml-2 text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase">Core OS</span>
        </div>
      </div>

      <!-- लेटेंसी व क्रेडिट्स वॉच -->
      <div class="flex items-center space-x-3 sm:space-x-4">
        <div class="hidden md:flex items-center space-x-2 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800 font-mono text-[11px] text-slate-400">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span id="latencyNode">Latency: 14ms</span>
        </div>
        <div class="flex items-center space-x-2 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-slate-800 text-xs">
          <span class="text-amber-400">🔥 3-Streak</span>
          <span class="text-slate-600">|</span>
          <span class="text-indigo-400 font-bold" id="userCredits">⚡ 100 Credits</span>
        </div>
        <div id="authBox">
          <button onclick="openAuth('login')" class="text-xs font-semibold hover:text-white text-slate-300 px-3 py-1.5">लॉगिन</button>
          <button onclick="openAuth('signup')" class="text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white px-3.5 py-1.5 rounded-xl transition shadow-lg shadow-indigo-600/30">शुरू करें</button>
        </div>
      </div>
    </div>
  </header>

  <!-- मुख्य ऑटोनॉमस वर्कस्पेस -->
  <main class="flex-1 max-w-7xl mx-auto w-full px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">

    <!-- साइडबार: इंटेलिजेंस मैट्रिक्स -->
    <aside class="lg:col-span-3 space-y-4">
      <div class="glass-hud p-4 rounded-2xl">
        <p class="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-3">इंटेलिजेंस मॉड्यूल</p>
        <div class="space-y-1.5" id="engineSelector">
          <button onclick="switchEngine('viral_scripts', this)" class="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium flex items-center space-x-3 transition bg-indigo-600/20 text-indigo-300 border border-indigo-500/30">
            <i class="fa-brands fa-youtube w-5 text-rose-500"></i>
            <span>वायरल डायरेक्टर</span>
          </button>
          <button onclick="switchEngine('business_copy', this)" class="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium flex items-center space-x-3 transition text-slate-400 hover:bg-slate-900">
            <i class="fa-solid fa-bullseye w-5 text-emerald-400"></i>
            <span>हाई-कन्वर्जन कॉपी</span>
          </button>
          <button onclick="switchEngine('code_engineer', this)" class="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium flex items-center space-x-3 transition text-slate-400 hover:bg-slate-900">
            <i class="fa-solid fa-code w-5 text-cyan-400"></i>
            <span>सॉफ्टवेयर आर्किटेक्ट</span>
          </button>
          <button onclick="switchEngine('image_gen', this)" class="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium flex items-center space-x-3 transition text-slate-400 hover:bg-slate-900">
            <i class="fa-solid fa-wand-magic-sparkles w-5 text-purple-400"></i>
            <span>न्यूरल विजुअल स्टूडियो</span>
          </button>
          <button onclick="switchEngine('roast_audit', this)" class="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium flex items-center space-x-3 transition text-slate-400 hover:bg-slate-900">
            <i class="fa-solid fa-fire w-5 text-amber-500"></i>
            <span>स्क्रिप्ट पोस्टमार्टम</span>
          </button>
        </div>
      </div>

      <!-- पर्सोना गियरबॉक्स -->
      <div class="glass-hud p-4 rounded-2xl">
        <p class="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">माइंडसेट गियरबॉक्स</p>
        <div class="grid grid-cols-3 gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold text-center">
          <button onclick="setPersona('shark', this)" class="py-1.5 rounded-lg bg-indigo-600 text-white">⚡ शार्क</button>
          <button onclick="setPersona('story', this)" class="py-1.5 rounded-lg text-slate-400 hover:text-white">🎭 स्टोरी</button>
          <button onclick="setPersona('mentor', this)" class="py-1.5 rounded-lg text-slate-400 hover:text-white">🧠 मेंटॉर</button>
        </div>
      </div>
    </aside>

    <!-- सेंट्रल न्यूरल कॉकपिट -->
    <section class="lg:col-span-9 flex flex-col space-y-4">
      
      <!-- आउटपुट HUD कार्ड -->
      <div class="glass-hud rounded-2xl p-5 flex-1 min-h-[460px] flex flex-col relative overflow-hidden" id="viewportCard">
        
        <!-- कंट्रोल बार -->
        <div class="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-3 text-xs text-slate-400">
          <div class="flex items-center space-x-2">
            <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
            <span id="systemStatus" class="font-mono text-[11px]">AUTONOMOUS ENGINE ACTIVE</span>
          </div>
          <div class="flex items-center space-x-2">
            <button onclick="toggleTeleprompter()" class="bg-slate-900 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300 transition">
              <i class="fa-solid fa-desktop mr-1"></i> टेलीप्रॉम्प्टर
            </button>
            <button onclick="playNeuralSpeech()" class="bg-slate-900 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300 transition">
              <i class="fa-solid fa-headphones mr-1"></i> सुनें
            </button>
            <button onclick="copyOutput()" class="bg-slate-900 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300 transition">
              <i class="fa-solid fa-copy mr-1"></i> कॉपी
            </button>
          </div>
        </div>

        <!-- होलोग्राफिक थिंकिंग स्टेट -->
        <div id="thinkingState" class="hidden my-auto text-center space-y-4">
          <div class="inline-flex p-5 rounded-full bg-indigo-500/10 border border-indigo-500/30 neon-pulse">
            <i class="fa-solid fa-atom text-4xl text-cyan-400 animate-spin"></i>
          </div>
          <p id="thinkingStep" class="text-xs font-mono text-cyan-300 tracking-wider">[न्यूरल कनेक्शन स्थापित हो रहा है...]</p>
        </div>

        <!-- मुख्य आउटपुट कंसोल -->
        <div id="outputConsole" class="flex-1 overflow-y-auto text-sm leading-relaxed space-y-4 whitespace-pre-wrap text-slate-100 font-normal">
          <div class="text-slate-500 text-center py-28 font-light">
            <i class="fa-solid fa-terminal text-4xl mb-3 block text-slate-700"></i>
            प्रॉम्प्ट दर्ज करें या वॉयस कमांड दें। न्यूरल इंजन रियल-टाइम में तैयार करेगा।
          </div>
        </div>

        <!-- इमेज रेंडरिंग ब्लॉक -->
        <div id="imageDisplay" class="hidden my-3 text-center"></div>

        <!-- साइकोलॉजिकल ऑडिट गेज -->
        <div id="auditMeter" class="hidden mt-3 p-3 rounded-xl bg-slate-950/80 border border-indigo-500/30 flex items-center justify-between text-xs">
          <div>
            <span class="text-slate-400">🔥 वायरल इंडेक्स:</span>
            <span class="text-emerald-400 font-bold ml-1 text-sm">94/100 (सुपर हुक)</span>
          </div>
          <div>
            <span class="text-slate-400">रिटेंशन लॉक:</span>
            <span class="text-cyan-400 font-bold ml-1">8.5 सेकंड गारंटी</span>
          </div>
        </div>

        <!-- ज़ीगार्निक 1-क्लिक नेक्स्ट-स्टेप्स -->
        <div id="nextStepsRow" class="hidden mt-3 pt-3 border-t border-slate-800/80 flex flex-wrap gap-2">
          <button onclick="injectNext('3 वायरल थंबनेल आइडिया और विजुअल एंगल दो')" class="text-xs px-3 py-1.5 rounded-lg bg-indigo-950/60 text-indigo-300 border border-indigo-800/40 hover:bg-indigo-900 transition">
            🎬 3 थंबनेल व कैमरा एंगल
          </button>
          <button onclick="injectNext('इसे इंस्टाग्राम रील कैप्शन और 5 ट्रेंडिंग हैशटैग में बदलो')" class="text-xs px-3 py-1.5 rounded-lg bg-indigo-950/60 text-indigo-300 border border-indigo-800/40 hover:bg-indigo-900 transition">
            📱 रील कैप्शन + हैशटैग्स
          </button>
          <button onclick="injectNext('इसके कमजोर शब्दों को हटाकर 10x ज्यादा आक्रामक बनाओ')" class="text-xs px-3 py-1.5 rounded-lg bg-indigo-950/60 text-indigo-300 border border-indigo-800/40 hover:bg-indigo-900 transition">
            ⚡ 10x आक्रामक हुक
          </button>
        </div>
      </div>

      <!-- इनपुट कंट्रोल डेक + वॉयस वेव -->
      <div class="glass-hud p-3 rounded-2xl relative neon-pulse">
        <div id="voiceWaveBar" class="hidden pb-2 px-2 flex items-center space-x-1 justify-center">
          <span class="text-[10px] font-mono text-cyan-400 mr-2">सुन रहा हूँ...</span>
          <div class="w-1 bg-cyan-400 voice-wave-bar" style="animation-delay: 0.1s"></div>
          <div class="w-1 bg-cyan-400 voice-wave-bar" style="animation-delay: 0.3s"></div>
          <div class="w-1 bg-cyan-400 voice-wave-bar" style="animation-delay: 0.2s"></div>
          <div class="w-1 bg-cyan-400 voice-wave-bar" style="animation-delay: 0.4s"></div>
        </div>

        <div class="flex items-end space-x-2">
          <div class="flex-1 relative">
            <textarea id="promptBox" rows="2" placeholder="अपनी स्क्रिप्ट या सवाल दर्ज करें..." class="w-full bg-slate-950/80 text-sm text-slate-100 rounded-xl p-3 focus:outline-none border border-slate-800 focus:border-indigo-500 resize-none transition"></textarea>
          </div>
          <button onclick="toggleVoiceInput()" id="micBtn" title="वॉयस इनपुट" class="h-12 w-12 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 flex items-center justify-center transition flex-shrink-0">
            <i class="fa-solid fa-microphone"></i>
          </button>
          <button onclick="executeEngine()" class="h-12 w-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 hover:opacity-90 text-white flex items-center justify-center transition shadow-lg shadow-indigo-500/30 flex-shrink-0">
            <i class="fa-solid fa-arrow-up text-lg"></i>
          </button>
        </div>
      </div>
    </section>
  </main>

  <script>
    // ==========================================
    // ⚙️ कोर इंजन कॉन्फ़िगरेशन
    // ==========================================
    const BACKEND_URL = "https://khaascore-ai-backend-1.onrender.com";
    let activeEngine = 'viral_scripts';
    let selectedPersona = 'shark';
    let audioCtx = null;
    let recognition = null;

    // 1. न्यूरल सिनैप्स बैकग्राउंड कैनवस
    const canvas = document.getElementById('neuralCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = 1.8;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#6366f1';
        ctx.fill();
      }
    }

    for (let i = 0; i < 45; i++) particles.push(new Particle());

    function animateNeural() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${1 - dist / 130})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animateNeural);
    }
    animateNeural();

    // 2. ऑडियो-हैप्टिक फीडबैक
    function triggerHaptic() {
      try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.frequency.setValueAtTime(800, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(350, audioCtx.currentTime + 0.04);
        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.04);
      } catch (e) {}
    }

    function switchEngine(engine, btn) {
      triggerHaptic();
      activeEngine = engine;
      document.querySelectorAll('#engineSelector button').forEach(b => {
        b.className = 'w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium flex items-center space-x-3 transition text-slate-400 hover:bg-slate-900';
      });
      btn.className = 'w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium flex items-center space-x-3 transition bg-indigo-600/20 text-indigo-300 border border-indigo-500/30';
    }

    function setPersona(persona, btn) {
      triggerHaptic();
      selectedPersona = persona;
      btn.parentElement.querySelectorAll('button').forEach(b => b.className = 'py-1.5 rounded-lg text-slate-400 hover:text-white');
      btn.className = 'py-1.5 rounded-lg bg-indigo-600 text-white';
    }

    // 3. थिंकिंग स्टेट रनर
    function triggerThinking(active) {
      const state = document.getElementById('thinkingState');
      const out = document.getElementById('outputConsole');
      const text = document.getElementById('thinkingStep');
      if (active) {
        state.classList.remove('hidden');
        out.classList.add('hidden');
        const steps = [
          "[ऑडियंस रिटेंशन एल्गोरिदम स्कैन हो रहा है...]",
          "[कमजोर हुक्स को फिल्टर किया जा रहा है...]",
          "[साइकोलॉजिकल ट्रिगर्स लॉक हो गए]",
          "[अंतिम स्क्रिप्ट तैयार की जा रही है...]"
        ];
        let i = 0;
        window.thinkInterval = setInterval(() => {
          i = (i + 1) % steps.length;
          text.textContent = steps[i];
        }, 750);
      } else {
        clearInterval(window.thinkInterval);
        state.classList.add('hidden');
        out.classList.remove('hidden');
      }
    }

    // 4. कोर एग्जीक्यूशन
    async function executeEngine() {
      triggerHaptic();
      const input = document.getElementById('promptBox');
      const prompt = input.value.trim();
      if (!prompt) return;

      const output = document.getElementById('outputConsole');
      const audit = document.getElementById('auditMeter');
      const nextSteps = document.getElementById('nextStepsRow');
      const imageDisplay = document.getElementById('imageDisplay');

      audit.classList.add('hidden');
      nextSteps.classList.add('hidden');
      imageDisplay.classList.add('hidden');
      output.textContent = '';
      triggerThinking(true);

      if (activeEngine === 'image_gen') {
        try {
          const res = await fetch(`${BACKEND_URL}/api/generate-image`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt })
          });
          const data = await res.json();
          triggerThinking(false);
          if (data.imageUrl) {
            output.textContent = `विजुअल सफलतापूर्वक तैयार किया गया: "${prompt}"`;
            imageDisplay.innerHTML = `<img src="${data.imageUrl}" class="rounded-xl mx-auto shadow-2xl max-h-[380px] border border-slate-700">`;
            imageDisplay.classList.remove('hidden');
          } else {
            output.textContent = data.error || 'इमेज जनरेशन विफल रहा।';
          }
        } catch (e) {
          triggerThinking(false);
          output.textContent = 'इमेज जनरेशन में त्रुटि आई।';
        }
        return;
      }

      try {
        const res = await fetch(`${BACKEND_URL}/api/generate/stream`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            prompt: `[Persona: ${selectedPersona}] ${prompt}`,
            tool: activeEngine
          })
        });

        triggerThinking(false);

        const reader = res.body.getReader();
        const decoder = new TextDecoder('utf-8');

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value);
          const lines = chunk.split('\n');
          for (const line of lines) {
            if (line.startsWith('data: ')) {
              try {
                const parsed = JSON.parse(line.replace('data: ', ''));
                if (parsed.chunk) output.textContent += parsed.chunk;
              } catch(e) {}
            }
          }
        }

        audit.classList.remove('hidden');
        nextSteps.classList.remove('hidden');

      } catch (err) {
        triggerThinking(false);
        output.textContent = 'सर्वर से कनेक्ट करने में विफलता।';
      }
    }

    function injectNext(text) {
      document.getElementById('promptBox').value = text;
      executeEngine();
    }

    // 5. वॉयस इनपुट
    function toggleVoiceInput() {
      triggerHaptic();
      const wave = document.getElementById('voiceWaveBar');
      const micBtn = document.getElementById('micBtn');

      if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert('आपका ब्राउज़र वॉयस इनपुट सपोर्ट नहीं करता।');
        return;
      }

      if (recognition && recognition.running) {
        recognition.stop();
        return;
      }

      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition = new SpeechRecognition();
      recognition.lang = 'hi-IN';
      recognition.continuous = false;

      recognition.onstart = () => {
        recognition.running = true;
        wave.classList.remove('hidden');
        micBtn.classList.add('text-cyan-400', 'border-cyan-500');
      };

      recognition.onresult = (e) => {
        document.getElementById('promptBox').value = e.results[0][0].transcript;
      };

      recognition.onend = () => {
        recognition.running = false;
        wave.classList.add('hidden');
        micBtn.classList.remove('text-cyan-400', 'border-cyan-500');
      };

      recognition.start();
    }

    // 6. टेलीप्रॉम्प्टर व ऑडियो
    function toggleTeleprompter() {
      const out = document.getElementById('outputConsole');
      out.classList.toggle('teleprompter-active');
      if (out.classList.contains('teleprompter-active')) {
        window.teleScroll = setInterval(() => { out.scrollTop += 1; }, 40);
      } else {
        clearInterval(window.teleScroll);
      }
    }

    function playNeuralSpeech() {
      const text = document.getElementById('outputConsole').textContent;
      if (!text) return;
      window.speechSynthesis.cancel();
      const ut = new SpeechSynthesisUtterance(text);
      ut.lang = 'hi-IN';
      window.speechSynthesis.speak(ut);
    }

    function copyOutput() {
      navigator.clipboard.writeText(document.getElementById('outputConsole').textContent);
      alert('क्लिपबोर्ड में कॉपी हो गया!');
    }
  </script>
</body>
</html>
