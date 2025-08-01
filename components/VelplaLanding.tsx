'use client'

import React, { useState, useEffect, useRef } from 'react';

const VelplaLanding = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const heroRef = useRef(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0px)';
        }
      });
    }, observerOptions);

    // Observe animated elements
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(30px)';
      (el as HTMLElement).style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleWaitlistSubmit = async () => {
    if (!email || isSubmitting) return;
    
    setIsSubmitting(true);
    
    // Simulate API call - replace with actual email service integration
    try {
      // Example: await fetch('/api/waitlist', { method: 'POST', body: JSON.stringify({ email }) });
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setEmail('');
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0F1C2E] text-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F1C2E]/95 backdrop-blur-lg border-b border-[#838eaf]/10">
        <div className="max-w-6xl mx-auto px-5 py-5">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-[#433bff]">
              Velpla
            </div>
            <button
              onClick={scrollToWaitlist}
              className="bg-gradient-to-r from-[#433bff] to-[#dedcff] text-[#0F1C2E] px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#433bff]/30 hover:-translate-y-1"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 text-center relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-10">
          <div className="w-full h-full bg-gradient-radial from-[#433bff] to-transparent animate-spin-slow"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-5 relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#dedcff] bg-clip-text text-transparent leading-tight">
              Smart Cashback,<br />Your Way
            </h1>
            <p className="text-xl text-[#838eaf] mb-10 max-w-2xl mx-auto leading-relaxed">
              Earn rewards on every purchase. Get paid in cash or crypto. Switch anytime. 
              Our AI optimizes your rewards so you don&apos;t have to.
            </p>
            <button
              onClick={scrollToWaitlist}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#433bff] to-[#6b5eff] text-white px-9 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-[#433bff]/40 hover:-translate-y-1.5 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
              <span className="text-2xl">🚀</span>
              Join the Waitlist
            </button>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16 opacity-70">
              <div className="flex items-center gap-2 text-[#838eaf]">
                <span>🔒</span>
                <span>Bank-level security</span>
              </div>
              <div className="flex items-center gap-2 text-[#838eaf]">
                <span>⚡</span>
                <span>Instant conversions</span>
              </div>
              <div className="flex items-center gap-2 text-[#838eaf]">
                <span>🏆</span>
                <span>No hidden fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-[#433bff]/5 to-transparent">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4">Why Velpla Changes Everything</h2>
            <p className="text-xl text-[#838eaf] max-w-2xl mx-auto">
              The only rewards platform that adapts to you, not the other way around
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: '💳',
                title: 'Flexible Rewards',
                description: 'Cash or crypto? Why choose? Switch between cash and cryptocurrency rewards instantly, with no lock-ups or restrictions.'
              },
              {
                icon: '🤖',
                title: 'SmartRewards AI™',
                description: 'Our AI monitors market conditions and your preferences to suggest the optimal reward type, maximizing your value automatically.'
              },
              {
                icon: '🎯',
                title: 'StackBoost™',
                description: 'Stack Velpla rewards on top of your existing credit card points and loyalty programs. Double, triple, or even quadruple your rewards.'
              },
              {
                icon: '🪙',
                title: 'Round-Up Rewards™',
                description: 'Turn spare change into crypto investments. Automatically round up purchases and invest the difference in your chosen cryptocurrency.'
              },
              {
                icon: '⚡',
                title: 'Instant Transfers',
                description: 'Send crypto rewards to friends and family instantly. Perfect for splitting costs, gifting, or collaborative savings goals.'
              },
              {
                icon: '📱',
                title: 'Everywhere Access',
                description: 'Mobile app for on-the-go rewards. Browser extension for online shopping. One seamless experience across all your devices.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[#838eaf]/5 border border-[#838eaf]/10 rounded-2xl p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#433bff]/30 hover:shadow-xl hover:shadow-[#433bff]/10 group animate-on-scroll relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#433bff] to-[#dedcff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="w-20 h-20 bg-gradient-to-r from-[#433bff] to-[#dedcff] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-[#838eaf] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-[#838eaf]">Three simple steps to smarter rewards</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                number: '1',
                title: 'Connect & Shop',
                description: 'Link your cards or use our browser extension. Shop at thousands of partner retailers like you normally do.'
              },
              {
                number: '2',
                title: 'Earn Rewards',
                description: 'Automatically earn rewards on every purchase. Choose cash, crypto, or let our AI decide what\'s best for you.'
              },
              {
                number: '3',
                title: 'Switch Anytime',
                description: 'Convert between cash and crypto instantly. Transfer to friends, invest more, or cash out – your rewards, your rules.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center animate-on-scroll">
                <div className="w-16 h-16 bg-gradient-to-r from-[#433bff] to-[#dedcff] text-[#0F1C2E] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-[#838eaf] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 bg-gradient-to-r from-[#433bff]/10 to-[#dedcff]/5 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold mb-5">Be First to Experience Velpla</h2>
          <p className="text-xl text-[#838eaf] mb-10 max-w-2xl mx-auto">
            Join thousands who are already waiting. Early members get exclusive perks, 
            higher reward rates, and lifetime benefits.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 border border-[#838eaf]/30 rounded-full bg-white/5 text-white placeholder-[#838eaf] outline-none focus:border-[#433bff] focus:ring-2 focus:ring-[#433bff]/20 transition-all duration-300"
            />
            <button
              onClick={handleWaitlistSubmit}
              disabled={isSubmitting || !email}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                submitStatus === 'success'
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                  : submitStatus === 'error'
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white'
                  : 'bg-gradient-to-r from-[#433bff] to-[#6b5eff] text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-[#433bff]/40'
              } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Joining...' : submitStatus === 'success' ? '✅ Joined!' : submitStatus === 'error' ? 'Try Again' : 'Join Waitlist'}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-[#838eaf]/10">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <div className="text-2xl font-bold text-[#433bff]">Velpla</div>
            <div className="flex flex-wrap gap-8 text-center">
              <a href="#privacy" className="text-[#838eaf] hover:text-[#dedcff] transition-colors duration-300">Privacy</a>
              <a href="#terms" className="text-[#838eaf] hover:text-[#dedcff] transition-colors duration-300">Terms</a>
              <a href="#security" className="text-[#838eaf] hover:text-[#dedcff] transition-colors duration-300">Security</a>
              <a href="#contact" className="text-[#838eaf] hover:text-[#dedcff] transition-colors duration-300">Contact</a>
            </div>
          </div>
          <div className="text-center text-[#838eaf]">
            <p>&copy; 2025 Velpla. Smart rewards for everyone.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-in;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, currentColor 0%, transparent 70%);
        }
      `}</style>
    </div>
  );
};

export default VelplaLanding;
