"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Play, 
  Zap, 
  BarChart3, 
  Layers, 
  Share2, 
  Globe, 
  ArrowRight,
  Star
} from 'lucide-react';

// --- Reusable Glass Card Component ---
const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl ${className}`}>
    {children}
  </div>
);

export default function LandingPage() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-white selection:bg-brand-primary/30 overflow-x-hidden">
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-brand-primary/20 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-brand-accent/10 blur-[100px] rounded-full" />
      </div>

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-accent rounded-lg flex items-center justify-center">
              <Zap size={18} className="text-white fill-white" />
            </div>
            <span>ClipGenius AI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            {["Features", "How It Works", "Pricing", "FAQ", "Blog"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">{item}</a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="text-sm font-medium hover:text-brand-accent transition-colors">Sign In</button>
            <button className="px-5 py-2.5 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full text-sm font-bold shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-105 transition-transform">
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-accent text-xs font-bold mb-6 tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
              </span>
              AI Powered Video Repurposing
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.1] mb-6">
              Turn Long Videos Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-accent to-purple-400">Viral Shorts</span> In Minutes
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
              Our AI finds the best moments, adds captions, and creates viral clips that grow your audience automatically.
            </p>
            
            <div className="space-y-4 mb-10">
              {["AI Finds Viral Moments", "Auto Captions & Emojis", "Ready For All Platforms"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-gray-300">
                  <div className="p-1 rounded-full bg-brand-primary/20 border border-brand-primary/30">
                    <CheckCircle2 size={16} className="text-brand-accent" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              <button className="px-8 py-4 bg-brand-primary hover:bg-brand-secondary rounded-xl font-bold flex items-center gap-2 transition-all group shadow-xl shadow-brand-primary/20">
                Start Free Trial <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all">
                See Demo
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#09090B] bg-gray-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-yellow-500 mb-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  <span className="text-white font-bold ml-1">4.9/5</span>
                </div>
                <p className="text-gray-500">Trusted by 10,000+ creators</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-primary/30 blur-[80px] -z-10 rounded-full scale-75" />
            <GlassCard className="p-4 overflow-hidden aspect-[4/3] group">
               {/* Simplified Dashboard UI Mockup */}
               <div className="flex h-full gap-4">
                 <div className="w-16 bg-white/5 rounded-lg h-full flex flex-col items-center py-4 gap-6">
                    <div className="w-8 h-8 rounded bg-brand-primary/20" />
                    <div className="w-8 h-8 rounded bg-white/5" />
                    <div className="w-8 h-8 rounded bg-white/5" />
                 </div>
                 <div className="flex-1 flex flex-col gap-4">
                    <div className="h-8 bg-white/5 rounded-lg w-1/3" />
                    <div className="flex-1 grid grid-cols-3 gap-3">
                       {[1,2,3].map(i => (
                         <div key={i} className="bg-white/5 rounded-xl border border-white/10 relative overflow-hidden group-hover:border-brand-primary/50 transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute bottom-2 left-2 right-2 h-1 bg-white/20 rounded-full overflow-hidden">
                               <motion.div 
                                 animate={{ width: ["0%", "100%"] }} 
                                 transition={{ duration: 3, repeat: Infinity }}
                                 className="h-full bg-brand-primary" 
                               />
                            </div>
                         </div>
                       ))}
                    </div>
                    <div className="h-12 bg-brand-primary rounded-xl flex items-center justify-center font-bold text-sm">
                       Export Viral Clips
                    </div>
                 </div>
               </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <GlassCard className="py-12 px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-gradient-to-b from-white/10 to-transparent">
            {[
              { label: "Happy Users", value: "10K+" },
              { label: "Clips Generated", value: "1M+" },
              { label: "Views Generated", value: "50M+" },
              { label: "User Rating", value: "4.9/5" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </GlassCard>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section id="features" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything You Need to Go Viral</h2>
            <p className="text-gray-400 text-lg">Powerful AI features that help you create and grow faster</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "AI Viral Clip Finder", desc: "Our algorithm detects high-retention moments automatically.", icon: <Zap /> },
              { title: "Auto Captions", desc: "Trendy, animated captions with emoji support in 20+ languages.", icon: <Layers /> },
              { title: "Vertical Format", desc: "Perfectly cropped 9:16 videos ready for mobile consumption.", icon: <BarChart3 /> },
              { title: "Multi Platform", desc: "Schedule and post to TikTok, Reels, and Shorts in one click.", icon: <Share2 /> },
              { title: "Premium Templates", desc: "Styles used by top creators like Alex Hormozi and MrBeast.", icon: <Play /> },
              { title: "One Click Export", desc: "High-quality 4K exports without any watermarks.", icon: <Globe /> },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-all cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-400">Choose the plan that's right for your growth</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free */}
            <GlassCard className="p-8 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Free</h3>
              <div className="text-4xl font-black mb-6">₹0<span className="text-lg text-gray-500 font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-2 text-gray-400 text-sm"><CheckCircle2 size={18} className="text-brand-accent"/> 5 AI Minutes / mo</li>
                <li className="flex gap-2 text-gray-400 text-sm"><CheckCircle2 size={18} className="text-brand-accent"/> Standard Export</li>
              </ul>
              <button className="w-full py-3 rounded-xl bg-white/10 font-bold hover:bg-white/20 transition-all">Get Started</button>
            </GlassCard>

            {/* Pro - Highlighted */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <GlassCard className="p-8 flex flex-col relative bg-brand-dark border-brand-primary/40">
                <div className="absolute top-4 right-4 bg-brand-primary text-[10px] font-black px-2 py-1 rounded uppercase">Most Popular</div>
                <h3 className="text-xl font-bold mb-2">Pro</h3>
                <div className="text-4xl font-black mb-6">₹499<span className="text-lg text-gray-500 font-normal">/mo</span></div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex gap-2 text-gray-200 text-sm"><CheckCircle2 size={18} className="text-brand-accent"/> 200 AI Minutes / mo</li>
                  <li className="flex gap-2 text-gray-200 text-sm"><CheckCircle2 size={18} className="text-brand-accent"/> 4K No Watermark</li>
                  <li className="flex gap-2 text-gray-200 text-sm"><CheckCircle2 size={18} className="text-brand-accent"/> Priority Rendering</li>
                </ul>
                <button className="w-full py-3 rounded-xl bg-brand-primary font-bold shadow-lg shadow-brand-primary/30 hover:scale-[1.02] transition-all">Start Free Trial</button>
              </GlassCard>
            </div>

            {/* Business */}
            <GlassCard className="p-8 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Business</h3>
              <div className="text-4xl font-black mb-6">₹999<span className="text-lg text-gray-500 font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-2 text-gray-400 text-sm"><CheckCircle2 size={18} className="text-brand-accent"/> Unlimited AI Minutes</li>
                <li className="flex gap-2 text-gray-400 text-sm"><CheckCircle2 size={18} className="text-brand-accent"/> API Access</li>
                <li className="flex gap-2 text-gray-400 text-sm"><CheckCircle2 size={18} className="text-brand-accent"/> Dedicated Support</li>
              </ul>
              <button className="w-full py-3 rounded-xl bg-white/10 font-bold hover:bg-white/20 transition-all">Contact Sales</button>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-brand-primary/40 to-brand-accent/10 border border-white/10 p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Ready to Create <br/>Viral Content?</h2>
          <button className="px-10 py-5 bg-white text-black rounded-full font-black text-lg hover:scale-110 transition-transform relative z-10 shadow-2xl">
            Start Free Trial — No Credit Card
          </button>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/5 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-6">
              <Zap size={20} className="text-brand-primary" />
              <span>ClipGenius AI</span>
            </div>
            <p className="text-gray-500 text-sm">Empowering creators with artificial intelligence.</p>
          </div>
          {["Product", "Company", "Resources", "Legal"].map((cat) => (
            <div key={cat}>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-400">{cat}</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-brand-accent transition-colors">Link Item</a></li>
                <li><a href="#" className="hover:text-brand-accent transition-colors">Link Item</a></li>
                <li><a href="#" className="hover:text-brand-accent transition-colors">Link Item</a></li>
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-gray-600 text-xs">
          © 2024 ClipGenius AI. All rights reserved. Built for the next generation of creators.
        </div>
      </footer>
    </div>
  );
      }
