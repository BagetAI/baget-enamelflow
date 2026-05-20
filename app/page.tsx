'use client';

import React from 'react';
import { Calendar, MessageSquare, ShieldCheck, CheckCircle2, ChevronRight, Clock } from 'lucide-react';

export default function LandingPage() {
  const handleWaitlistSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
        companyId: "ec34e8e2-4cbb-404f-b0e0-34cbf459f638",
        email: formData.get('email'),
        name: formData.get('practice_name')
    };

    try {
        const response = await fetch(`https://app.baget.ai/api/leads`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert("You're on the list!");
        }
    } catch (err) {
        console.error(err);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative overflow-hidden mesh-gradient pt-16 pb-32 px-4">
        <div className="max-w-6xl mx-auto relative z-10">
          <nav className="flex justify-between items-center mb-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg text-teal-600 font-bold text-xl">
                E
              </div>
              <span className="text-white font-bold text-2xl tracking-tight font-heading">EnamelFlow</span>
            </div>
            <div className="hidden md:flex space-x-8 text-white/90 font-medium">
              <a href="#features" className="hover:text-white transition">Features</a>
              <a href="#compliance" className="hover:text-white transition">2026 Mandate</a>
            </div>
            <a href="#waitlist" className="bg-white text-teal-700 px-6 py-2 rounded-full font-bold shadow-xl hover:bg-slate-100 transition">
              Get Early Access
            </a>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-semibold mb-6 backdrop-blur-md">
                Launching Summer 2026
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6 font-heading">
                Stop the Phone Tag. <br/>
                <span className="text-teal-300">Start the Flow.</span>
              </h1>
              <p className="text-xl text-white/80 mb-10 max-w-lg leading-relaxed">
                The all-in-one practice assistant for solo dental clinics. Automated booking, smart SMS reminders, and 2026-ready insurance pre-auths.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#waitlist" className="bg-teal-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:bg-teal-400 transition text-center flex items-center justify-center">
                  Reserve Your Practice Spot
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="glass-card p-2 shadow-2xl rotate-1">
                <img 
                  src="https://images.unsplash.com/photo-1629909608135-ca40a022942b?auto=format&fit=crop&q=80&w=1200" 
                  alt="EnamelFlow Dashboard" 
                  className="rounded-lg shadow-inner"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-4 shadow-xl hidden md:block">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold">Insurance Pre-Auth Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section id="features" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Built for Sarah, not for IT.</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We've replaced the spreadsheets and sticky notes with a single, clinical-grade flow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Online Self-Booking</h3>
              <p className="text-slate-600 leading-relaxed">
                Patients book directly into your real-time openings with smart guardrails that prevent scheduling errors.
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Automated Recalls</h3>
              <p className="text-slate-600 leading-relaxed">
                Two-way SMS reminders that understand dental intent. Patients can confirm or reschedule via text in seconds.
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">2026 Pre-Auth Ready</h3>
              <p className="text-slate-600 leading-relaxed">
                Meet the new CMS mandate with automated electronic prior-authorizations. 72-hour turnaround, guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Slice Visualized */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10 border-teal-100 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4">
              <div className="bg-teal-500/10 text-teal-700 text-xs font-bold px-3 py-1 rounded-full uppercase">API Slice Active</div>
            </div>
            <h2 className="text-3xl font-bold mb-6 font-heading">The EnamelFlow Engine</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold mb-1">Timezone-Aware Scheduling</h4>
                    <p className="text-sm text-slate-600">Handles 50+ US timezones to ensure reminders go out at the right time, every time.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold mb-1">Chair-Count Intelligence</h4>
                    <p className="text-sm text-slate-600">Automatically blocks booking when your 4 chairs are full, even if a provider is free.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold mb-1">Real-time Ledger Sync</h4>
                    <p className="text-sm text-slate-600">PostgreSQL backend ensures zero double-bookings with sub-20ms query performance.</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900 rounded-xl p-6 text-teal-400 font-mono text-sm shadow-2xl">
                <div className="flex justify-between mb-4 border-b border-white/10 pb-2">
                  <span className="text-white/40">Request</span>
                  <span className="text-teal-400">POST /api/bookings</span>
                </div>
                <div className="space-y-1">
                  <p>{"{"}</p>
                  <p className="pl-4 text-white">"clinicId": "clin_77x",</p>
                  <p className="pl-4 text-white">"startTime": "2026-05-20T14:00",</p>
                  <p className="pl-4 text-white">"treatment": "Crown",</p>
                  <p className="pl-4 text-white">"patient": {"{"}</p>
                  <p className="pl-8 text-white">"name": "Alex Smith",</p>
                  <p className="pl-8 text-white">"phone": "555-0123"</p>
                  <p className="pl-4 text-white">{"}"}</p>
                  <p>{"}"}</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-green-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>201 Created</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-24 px-4">
        <div className="max-w-xl mx-auto glass-card p-10 shadow-2xl border-teal-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 font-heading">Join the Beta</h2>
            <p className="text-slate-600">Secure your practice's invitation for our Summer 2026 rollout.</p>
          </div>
          <form onSubmit={handleWaitlistSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Practice Name</label>
              <input type="text" name="practice_name" required placeholder="e.g. Sunny Dental Care" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:outline-none transition" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Office Email</label>
              <input type="email" name="email" required placeholder="sarah@yourpractice.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:outline-none transition" />
            </div>
            <button type="submit" className="w-full py-4 btn-primary text-white rounded-xl font-bold text-lg shadow-lg">
              Request Early Access
            </button>
            <p className="text-center text-xs text-slate-400 mt-4">
              HIPAA Compliant Data Handling. No credit card required for beta.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-600 rounded flex items-center justify-center text-white font-bold">
              E
            </div>
            <span className="font-bold text-lg font-heading">EnamelFlow</span>
          </div>
          <div className="text-slate-500 text-sm">
            &copy; 2026 EnamelFlow Inc. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-teal-600">Terms</a>
            <a href="#" className="hover:text-teal-600">Privacy</a>
            <a href="#" className="hover:text-teal-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
