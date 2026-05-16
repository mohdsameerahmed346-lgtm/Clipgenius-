"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, Check, Play, BarChart3, Layers, Share2, 
  ArrowRight, Star, Youtube, Instagram, Twitter, Facebook,
  UploadCloud, Sparkles, CheckCircle2, MessageSquare
} from 'lucide-react';

// --- Reusable Component Blocks ---

const NavItem = ({ label, href }: { label: string; href: string }) => (
  <a 
    href={href} 
    className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
  >
    {label}
  </a>
);

const FeatureCard = ({ title, desc, icon: Icon }: { title: string; desc: string; icon: any }) => (
  <motion.div 
    whileHover={{ y: -5, borderColor: "rgba(168, 85, 247, 0.4)" }}
    className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 min-h-[240px] flex flex-col items-center text-center backdrop-blur-md transition-all duration-300"
  >
    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5 shrink-0">
      <Icon size={22} />
    </div>
    <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

export default function ClipGeniusLanding() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 overflow-x-hidden font-sans antialiased">
      
      {/* Background Ambient Neon Layering */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-purple-900/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-indigo-900/10 blur-[130px] rounded-full" />
      </div>

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5 font-bold text-xl tracking-tight shrink-0">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              <Zap className="text-white fill-white" size={16} />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">ClipGenius AI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <NavItem label="Features" href="#features" />
            <NavItem label="How It Works" href="#how-it-works" />
            <NavItem label="Pricing" href="#pricing" />
            <NavItem label="FAQ" href="#faq" />
            <NavItem label="Blog" href="#blog" />
          </div>

          <div className="flex items-center gap-5 shrink-0">
            <button className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Sign In</button>
            <button className="bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-500 hover:to-violet-400 transition-all duration-300 rounded-xl px-5 py-2.5 text-sm font-semibold shadow-[0_0_30px_rgba(139,92,246,0.35)]">
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Block */}
          <motion.div {...fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold mb-6 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              AI Powered Video Repurposing
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Turn Long Videos Into <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-400">Viral Shorts</span> In Minutes
            </h1>
            <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
              Our AI finds the best moments, adds captions, and creates viral clips that grow your audience.
            </p>

            <div className="grid grid-cols-2 gap-y-4 gap-x-4 mb-10">
              {[
                { text: "AI Finds Viral Moments" },
                { text: "Vertical Format Optimized" },
                { text: "Auto Captions & Emojis" },
                { text: "Ready For All Platforms" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-gray-300">
                  <div className="p-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 shrink-0">
                    <Check size={12} className="text-purple-400" />
                  </div>
                  <span className="truncate">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              <button className="bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-500 hover:to-violet-400 transition-all duration-300 rounded-xl px-6 py-3.5 font-semibold shadow-[0_0_30px_rgba(139,92,246,0.35)] flex items-center gap-2">
                Start Free Trial – No Credit Card <ArrowRight size={16} />
              </button>
              <button className="px-6 py-3.5 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-colors duration-200">
                See Demo
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/5 pt-8">
              <div>
                <p className="text-gray-500 text-[11px] tracking-wide mb-2 uppercase font-semibold">Trusted by 10,000+ content creators</p>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050505] bg-zinc-800 overflow-hidden shrink-0">
                        <img src={`https://i.pravatar.cc/100?img=${i+12}`} alt="creator avatar" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-0.5 text-yellow-500 text-xs">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                    <span className="text-white font-bold ml-1">4.9/5</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-gray-500 text-[11px] tracking-wide mb-2 uppercase font-semibold">Supported Platforms</p>
                <div className="flex gap-4 text-zinc-500">
                  <Youtube size={16} className="hover:text-white transition-colors" />
                  <Instagram size={16} className="hover:text-white transition-colors" />
                  <Twitter size={16} className="hover:text-white transition-colors" />
                  <Facebook size={16} className="hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Premium Dashboard Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} 
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-purple-600/10 blur-[100px] -z-10 rounded-full scale-90" />
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 shadow-[0_0_50px_rgba(139,92,246,0.15)] backdrop-blur-xl">
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-[10px] text-gray-500 bg-white/5 px-2.5 py-0.5 rounded-md font-mono">AI Preview Mode</span>
                <button className="bg-purple-600 hover:bg-purple-500 transition-colors px-4 py-1.5 rounded-lg text-xs font-bold shadow-md shadow-purple-500/20">
                  Export
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { title: "The secret to growth", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80" },
                  { title: "Avoid this mistake", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
                  { title: "10x conversion blueprint", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" }
                ].map((clip, idx) => (
                  <div key={idx} className="h-56 rounded-xl bg-zinc-950 border border-white/10 relative overflow-hidden p-3 flex flex-col justify-end">
                    <img src={clip.img} alt="preview asset" className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    <p className="text-[10px] text-gray-200 font-medium leading-tight relative z-10 mb-2">{clip.title}</p>
                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden relative z-10">
                      <div className="h-full bg-purple-500 w-2/3" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 h-20 rounded-xl bg-zinc-950 border border-white/10 p-3 flex flex-col justify-between">
                <div className="flex justify-between items-center text-[10px] text-zinc-500">
                  <span>timeline_workspace_sequence.mp4</span>
                  <span>00:12 / 00:45</span>
                </div>
                <div className="flex items-center gap-1.5 h-6">
                  {[40, 70, 50, 90, 30, 60, 80, 45, 60, 75, 40, 85, 50, 90, 35, 60, 40, 75, 50].map((h, i) => (
                    <div key={i} className="flex-1 bg-white/10 rounded-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 rounded-2xl p-10 text-center backdrop-blur-md">
            <p className="text-purple-400 font-medium text-xs md:text-sm mb-8 tracking-wider uppercase">Join 10,000+ creators who save 10+ hours every week</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { val: "10K+", label: "Happy Users" },
                { val: "1M+", label: "Clips Generated" },
                { val: "50M+", label: "Views Generated" },
                { val: "4.9/5", label: "User Rating" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="text-3xl md:text-4xl font-black mb-1.5 text-white">{stat.val}</div>
                  <div className="text-zinc-500 text-xs uppercase tracking-widest font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-black uppercase tracking-widest mb-4">
              <Sparkles size={10} /> Features
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Everything You Need to Go Viral</h2>
            <p className="text-zinc-400 max-w-md mx-auto text-sm">Powerful AI features that help you create and grow faster</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard title="AI Viral Clip Finder" desc="AI analyzes your video and finds the most engaging moments that will go viral." icon={Zap} />
            <FeatureCard title="Auto Captions" desc="Automatic captions with perfect accuracy and trending emojis." icon={Layers} />
            <FeatureCard title="Vertical Format" desc="Automatically converts to 9:16 vertical format perfect for shorts." icon={Play} />
            <FeatureCard title="Multi Platform Ready" desc="Optimized for YouTube Shorts, TikTok, Instagram Reels, and more." icon={Share2} />
            <FeatureCard title="Templates" desc="Beautiful templates to make your clips more engaging." icon={BarChart3} />
            <FeatureCard title="One Click Export" desc="Export in high quality and share anywhere with one click instantly." icon={CheckCircle2} />
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS SECTION --- */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-black uppercase tracking-widest mb-4">
              How It Works
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">3 Simple Steps to Viral Clips</h2>
            <p className="text-zinc-400 text-sm">From long video to viral short in just 3 steps</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* Step 1 */}
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center font-bold text-xs shrink-0 shadow-md shadow-purple-500/20">1</div>
                <div>
                  <h3 className="font-bold text-base mb-1">Upload Your Video</h3>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">Upload any long-form content from local devices or third-party storage links seamlessly.</p>
                </div>
              </div>
              <div className="bg-white/[0.01] border border-white/5 rounded-xl p-8 aspect-video flex flex-col items-center justify-center text-center group hover:border-purple-500/20 transition-all duration-300">
                <UploadCloud size={28} className="text-zinc-600 group-hover:text-purple-400 transition-colors mb-2.5" />
                <p className="text-xs font-semibold text-zinc-400">Drag & drop asset directory</p>
                <p className="text-[10px] text-zinc-600 mt-1">MP4, MOV, AVI (Max 2GB)</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center font-bold text-xs shrink-0 shadow-md shadow-purple-500/20">2</div>
                <div>
                  <h3 className="font-bold text-base mb-1">AI Finds Best Moments</h3>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">System parameters break down structural hooks to extract optimal processing segments.</p>
                </div>
              </div>
              <div className="bg-white/[0.01] border border-white/5 rounded-xl p-5 flex flex-col justify-center aspect-video">
                <div className="text-[11px] font-bold mb-3.5 text-zinc-400 flex justify-between items-center">
                  <span>Parsing structural density...</span>
                  <span className="text-purple-400 font-mono">94%</span>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Identifying core visual peaks", done: true },
                    { label: "Refining semantic phrasing", done: true },
                    { label: "Assembling metadata layers", done: false }
                  ].map((task, idx) => (
                    <div key={idx} className="flex items-center justify-between text-[11px] bg-black/40 p-2 rounded border border-white/5">
                      <span className={task.done ? 'text-zinc-300' : 'text-zinc-600'}>{task.label}</span>
                      <Check size={12} className={task.done ? 'text-emerald-400' : 'text-zinc-800'} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center font-bold text-xs shrink-0 shadow-md shadow-purple-500/20">3</div>
                <div>
                  <h3 className="font-bold text-base mb-1">Export & Share</h3>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">Render multi-format rendering instances configured with custom parameters instantly.</p>
                </div>
              </div>
              <div className="bg-white/[0.01] border border-white/5 rounded-xl p-4 flex flex-col justify-between aspect-video">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Preset Configuration</span>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-black/50 p-2 rounded text-xs border border-white/5">
                    <span className="text-zinc-400">Aspect Setting</span>
                    <span className="text-zinc-200 font-medium">9:16 Mobile Portrait</span>
                  </div>
                  <div className="flex justify-between items-center bg-black/50 p-2 rounded text-xs border border-white/5">
                    <span className="text-zinc-400">Target Bitrate</span>
                    <span className="text-zinc-200 font-medium">1080p Mastered</span>
                  </div>
                </div>
                <button className="w-full py-2 rounded bg-purple-600 hover:bg-purple-500 transition-colors text-xs font-bold mt-2.5">Process Deployment</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- DASHBOARD PREVIEW SECTION --- */}
      <section id="dashboard-preview" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-black uppercase tracking-widest mb-4">
            Control Panel
            </div>
            <h2 className="text-3xl font-bold mb-3 tracking-tight">Powerful Dashboard, Simple to Use</h2>
            <p className="text-zinc-400 text-sm">Everything you need inside an advanced production-ready layout</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Workspace UI Preview */}
            <div className="lg:col-span-7 bg-white/[0.01] border border-white/5 rounded-2xl p-5 backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                <div className="w-6 h-6 rounded bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                  <Zap size={12} className="text-purple-400" />
                </div>
                <span className="text-xs font-bold text-zinc-300">Workspace Cluster Workspace / Node-01</span>
              </div>
              
              <div className="grid grid-cols-4 gap-3 mb-6">
                {[
                  { label: "Active Nodes", num: "24" },
                  { label: "Render Pipelines", num: "156" },
                  { label: "Bandwidth Flow", num: "2.4M" },
                  { label: "Efficiency Threshold", num: "12.6%" },
                ].map((m, i) => (
                  <div key={i} className="bg-black/50 border border-white/5 p-3 rounded-xl">
                    <p className="text-[10px] text-zinc-500 mb-1 truncate">{m.label}</p>
                    <p className="text-base font-bold text-white">{m.num}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs font-bold text-zinc-400 mb-3">Recent Historical Clusters</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="bg-black/30 border border-white/5 rounded-xl p-2">
                    <div className="aspect-[4/5] bg-zinc-900 rounded-lg mb-2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent" />
                    </div>
                    <p className="text-[11px] font-bold text-zinc-200 truncate">Asset Stream {i + 12}</p>
                    <p className="text-[9px] text-zinc-500">Processing Node</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Checklist Block */}
            <div className="lg:col-span-5 space-y-6">
              {[
                { title: "Clean & Intuitive Dashboard", desc: "All your projects and analytics accessible at a single glance without clutter." },
                { title: "Real-time Analytics", desc: "Track performance metrics, high-retention velocity, and accurate conversion records directly." },
                { title: "Project Management", desc: "Organize raw multi-hour long assets and finished programmatic compositions structurally." },
                { title: "Cloud Storage", desc: "Secure cloud infrastructure ensures files are processed with maximum bit-rate rendering storage safely." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mt-1 shrink-0">
                    <CheckCircle2 size={13} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-1 text-zinc-200">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-black uppercase tracking-widest mb-4">
              Pricing Matrices
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">Simple, Transparent Pricing</h2>
            <p className="text-zinc-400 text-sm">Choose the plan that matches your development parameters</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            
            {/* Free Plan */}
            <div className="glass-card p-8 relative">
              <h3 className="text-lg font-bold mb-1 text-white">Free Plan</h3>
              <p className="text-zinc-500 text-xs mb-6">Perfect for basic evaluation metrics</p>
              <div className="mb-6">
                <span className="text-4xl font-black">₹0</span>
                <span className="text-zinc-500 text-xs ml-1">/month</span>
              </div>
              <button className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-bold text-xs mb-8 transition-colors duration-200">
                Get Started Free
              </button>
              <ul className="space-y-3.5">
                {["3 Projects per month", "10 Clips per month", "Auto captions", "720p export quality"].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs text-zinc-400">
                    <Check size={14} className="text-purple-400 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="relative group">
              <div className="absolute -inset-px bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur-sm opacity-50 group-hover:opacity-70 transition duration-500" />
              <div className="relative bg-[#07070f] border border-purple-500/40 rounded-2xl p-8 shadow-[0_0_40px_rgba(139,92,246,0.15)]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-[9px] font-black px-3 py-0.5 rounded-full uppercase tracking-wider text-white">Most Popular</div>
                <h3 className="text-lg font-bold mb-1 text-white">Pro Plan</h3>
                <p className="text-zinc-400 text-xs mb-6">For scaling active creators</p>
                <div className="mb-6">
                  <span className="text-4xl font-black">₹499</span>
                  <span className="text-zinc-500 text-xs ml-1">/month</span>
                </div>
                <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-500 hover:to-violet-400 transition-all duration-300 font-bold text-xs mb-8 shadow-md shadow-purple-500/20">
                  Start Pro Trial
                </button>
                <ul className="space-y-3.5">
                  {["Unlimited Projects", "Unlimited Clips", "AI Viral Clip Finder", "Auto captions with emojis", "1080p export quality", "Priority support"].map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-zinc-200">
                      <Check size={14} className="text-purple-400 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Business Plan */}
            <div className="glass-card p-8 relative">
              <h3 className="text-lg font-bold mb-1 text-white">Business Plan</h3>
              <p className="text-zinc-500 text-xs mb-6">For multi-seat organization branches</p>
              <div className="mb-6">
                <span className="text-4xl font-black">₹999</span>
                <span className="text-zinc-500 text-xs ml-1">/month</span>
              </div>
              <button className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-bold text-xs mb-8 transition-colors duration-200">
                Start Business Trial
              </button>
              <ul className="space-y-3.5">
                {["Everything in Pro", "Team Members (5)", "Custom templates", "Analytics export", "Priority support"].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs text-zinc-400">
                    <Check size={14} className="text-purple-400 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>

          </div>
          <p className="text-center text-[11px] text-zinc-600 mt-12 tracking-wide font-medium">All plans include 7-day free trial  •  Cancel anytime  •  No credit card required</p>
        </div>
      </section>

      {/* --- FINAL CTA SECTION --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-950/40 to-indigo-950/20 border border-white/10 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-purple-500/[0.01] blur-xl pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-2 tracking-tight">Ready to Create Viral Content?</h2>
              <p className="text-zinc-400 text-xs md:text-sm max-w-sm">Join thousands of creators already transforming multi-hour recordings instantly.</p>
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-500 hover:to-violet-400 transition-all duration-300 rounded-xl px-6 py-3.5 text-sm font-semibold shadow-[0_0_30px_rgba(139,92,246,0.35)] shrink-0">
              Start Free Trial – No Credit Card
            </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="pt-24 pb-12 border-t border-white/5 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-6 gap-12">
          
          <div className="col-span-2">
            <div className="flex items-center gap-2 font-bold text-lg mb-4">
              <Zap className="text-purple-500 fill-purple-500" size={18} />
              <span>ClipGenius AI</span>
            </div>
            <p className="text-zinc-500 text-xs max-w-xs leading-relaxed mb-6">
              AI-powered video repurposing engine deployed to parse, extract, and format structural performance markers securely.
            </p>
            <div className="flex gap-3">
              {[Youtube, Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-purple-500/20 transition-all group">
                  <Icon size={14} className="text-zinc-500 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-xs mb-5 uppercase tracking-widest text-zinc-400">PRODUCT</h4>
            <ul className="space-y-3">
              {["Features", "Pricing", "Templates", "Changelog"].map(item => (
                <li key={item}><a href="#" className="text-zinc-500 text-xs hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs mb-5 uppercase tracking-widest text-zinc-400">COMPANY</h4>
            <ul className="space-y-3">
              {["About", "Careers", "Blog", "Contact"].map(item => (
                <li key={item}><a href="#" className="text-zinc-500 text-xs hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs mb-5 uppercase tracking-widest text-zinc-400">RESOURCES</h4>
            <ul className="space-y-3">
              {["Help Center", "Tutorials", "API Docs", "Community"].map(item => (
                <li key={item}><a href="#" className="text-zinc-500 text-xs hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs mb-5 uppercase tracking-widest text-zinc-400">LEGAL</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms", "Refund Policy", "Cookies"].map(item => (
                <li key={item}><a href="#" className="text-zinc-500 text-xs hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-zinc-600 text-[10px] tracking-wider uppercase font-medium">
          <p>© 2026 ClipGenius AI. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
      }
