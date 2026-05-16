"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Zap, Check, Play, BarChart3, Layers, Share2, 
  ChevronRight, Star, Youtube, Instagram, Twitter, Facebook 
} from 'lucide-react';

// --- Shared Components ---

const NavItem = ({ label }: { label: string }) => (
  <a href={`#${label.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
    {label}
  </a>
);

const FeatureCard = ({ title, desc, icon: Icon }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-card p-8 flex flex-col items-center text-center group hover:border-purple-500/50 transition-all duration-300"
  >
    <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-purple-400" size={28} />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const PricingCard = ({ plan, price, features, highlighted = false }: any) => (
  <div className={`glass-card p-8 flex flex-col relative ${highlighted ? 'border-purple-500/50 purple-glow scale-105 z-10' : ''}`}>
    {highlighted && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
        Most Popular
      </div>
    )}
    <h3 className="text-xl font-bold mb-2">{plan}</h3>
    <p className="text-gray-400 text-xs mb-6">Perfect for growing creators</p>
    <div className="mb-8">
      <span className="text-4xl font-bold">₹{price}</span>
      <span className="text-gray-500 ml-2">/month</span>
    </div>
    <button className={`w-full py-3 rounded-xl font-bold mb-8 transition-all ${highlighted ? 'bg-purple-600 hover:bg-purple-500' : 'bg-white/5 hover:bg-white/10 border border-white/10'}`}>
      {highlighted ? 'Start Pro Trial' : 'Get Started Free'}
    </button>
    <div className="space-y-4 flex-1">
      {features.map((f: string, i: number) => (
        <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
          <Check size={16} className="text-purple-400 shrink-0" />
          {f}
        </div>
      ))}
    </div>
  </div>
);

export default function ClipGeniusLanding() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#020205] text-white selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 blur-[120px] rounded-full" />
      </div>

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <Zap className="text-purple-500 fill-purple-500" size={24} />
            <span>ClipGenius AI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {["Features", "How It Works", "Pricing", "FAQ", "Blog"].map(l => <NavItem key={l} label={l} />)}
          </div>

          <div className="flex items-center gap-5">
            <button className="text-sm font-medium text-gray-400 hover:text-white">Sign In</button>
            <button className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity">
              Start Free Trial →
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-44 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeInUp}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold mb-6">
            <Zap size={14} /> AI Powered Video Repurposing
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
            Turn Long Videos Into <br />
            <span className="text-gradient">Viral Shorts</span> in Minutes
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
            Our AI finds the best moments, adds captions, and creates viral clips that grow your audience.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-10">
            {[
              "AI Finds Viral Moments", "Vertical Format Optimized",
              "Auto Captions & Emojis", "Ready For All Platforms"
            ].map(item => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                <div className="p-1 rounded-full bg-purple-500/20"><Check size={12} className="text-purple-400" /></div>
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            <button className="px-8 py-4 bg-purple-600 rounded-xl font-bold shadow-lg shadow-purple-500/20 hover:scale-105 transition-transform">
              Start Free Trial - No Credit Card →
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-colors">
              See Demo
            </button>
          </div>

          <div className="flex items-center gap-6 border-t border-white/5 pt-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-yellow-500 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                <span className="text-white text-sm font-bold ml-1">4.9/5</span>
              </div>
              <p className="text-gray-500 text-xs tracking-wide">Trusted by 10,000+ creators</p>
            </div>
          </div>
        </motion.div>

        {/* Hero Dashboard Preview */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }}
          className="relative lg:h-[600px] w-full"
        >
          <div className="absolute inset-0 bg-purple-600/20 blur-[100px] -z-10 rounded-full" />
          <div className="glass-card p-4 h-full flex flex-col overflow-hidden">
             <div className="flex justify-between items-center mb-6 px-2">
                <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/50" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                   <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="px-4 py-1.5 rounded-lg bg-purple-600 text-xs font-bold">Export</div>
             </div>
             <div className="flex gap-4 flex-1">
                <div className="w-12 bg-white/5 rounded-xl" />
                <div className="flex-1 grid grid-cols-3 gap-3">
                   {[1,2,3].map(i => (
                     <div key={i} className="rounded-xl bg-gradient-to-b from-white/10 to-transparent border border-white/5 relative overflow-hidden">
                        <div className="absolute bottom-4 left-4 right-4 h-1 bg-white/20 rounded-full">
                           <div className="h-full bg-purple-500 w-2/3" />
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </motion.div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto glass-card p-12 grid grid-cols-2 lg:grid-cols-4 gap-12 bg-gradient-to-b from-white/5 to-transparent">
          {[
            { val: "10K+", label: "Happy Users", icon: <Star /> },
            { val: "1M+", label: "Clips Generated", icon: <Play /> },
            { val: "50M+", label: "Views Generated", icon: <BarChart3 /> },
            { val: "4.9/5", label: "User Rating", icon: <Star /> },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-extrabold mb-2">{stat.val}</div>
              <div className="text-gray-500 text-sm uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-purple-400 text-xs font-black uppercase tracking-[0.2em] mb-4">Features</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything You Need to Go Viral</h2>
          <p className="text-gray-400">Powerful AI features that help you create and grow faster</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard title="AI Viral Clip Finder" desc="AI analyzes your video and finds the most engaging moments that will go viral." icon={Zap} />
          <FeatureCard title="Auto Captions" desc="Automatic captions with perfect accuracy and trending emojis." icon={Layers} />
          <FeatureCard title="Vertical Format" desc="Automatically converts to 9:16 vertical format perfect for shorts." icon={Play} />
          <FeatureCard title="Multi Platform Ready" desc="Optimized for YouTube Shorts, TikTok, Instagram Reels, and more." icon={Share2} />
          <FeatureCard title="Templates" desc="Beautiful templates to make your clips more engaging." icon={BarChart3} />
          <FeatureCard title="One Click Export" desc="Export in high quality and share anywhere with one click." icon={Zap} />
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400">Choose the plan that's right for you</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <PricingCard 
            plan="Free Plan" 
            price="0" 
            features={["3 Projects per month", "10 Clips per month", "Auto captions", "720p export quality"]} 
          />
          <PricingCard 
            highlighted 
            plan="Pro Plan" 
            price="499" 
            features={["Unlimited Projects", "Unlimited Clips", "AI Viral Clip Finder", "Auto captions with emojis", "1080p export quality", "Priority support"]} 
          />
          <PricingCard 
            plan="Business Plan" 
            price="999" 
            features={["Everything in Pro", "Team Members (5)", "Custom templates", "Analytics export", "Priority support"]} 
          />
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="pt-24 pb-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 font-bold text-xl mb-6">
              <Zap className="text-purple-500 fill-purple-500" size={24} />
              <span>ClipGenius AI</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed mb-6">
              AI-powered video repurposing platform that helps creators create viral content 10x faster.
            </p>
            <div className="flex gap-4">
              {[Youtube, Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-purple-500/20 transition-colors">
                  <Icon size={18} className="text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>
          {["Product", "Company", "Resources", "Legal"].map((cat) => (
            <div key={cat}>
              <h4 className="font-bold text-sm mb-6 uppercase tracking-widest">{cat}</h4>
              <ul className="space-y-4">
                {[1, 2, 3, 4].map(i => (
                  <li key={i}><a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Link {i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-xs uppercase tracking-widest">
          <p>© 2024 ClipGenius AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
    }
