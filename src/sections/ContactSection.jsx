import React, { useState } from 'react';
import { Mail, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { PROFILE } from '../data/portfolioData';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [mailtoPrepared, setMailtoPrepared] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please include a message.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setMailtoPrepared(false);
      return;
    }

    setErrors({});
    
    // Accurately encode mailto link as mandated by blueprint
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Vishwajith,\n\nSender: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}\n\n---\nSent via Portfolio Contact Form`
    );
    
    const mailtoUrl = `mailto:${PROFILE.socials.email}?subject=${subject}&body=${body}`;
    
    setMailtoPrepared(true);
    // Launch client email app
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-purple-500/10">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">
            10 // Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Collaboration</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mt-3">
            Open for AI/ML engineering internships, research fellowships, and technical project collaborations.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Connect Directly
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Feel free to reach out directly via professional communication channels or use the contact form to dispatch an email.
              </p>

              {/* Direct Link Items */}
              <a
                href={`mailto:${PROFILE.socials.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-400/50 hover:bg-slate-900/90 transition-all group"
              >
                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Direct Email</span>
                  <span className="font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors">
                    {PROFILE.socials.email}
                  </span>
                </div>
              </a>

              <a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-400/50 hover:bg-slate-900/90 transition-all group"
              >
                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">LinkedIn Profile</span>
                  <span className="font-semibold text-sm text-white group-hover:text-purple-300 transition-colors">
                    vishwajith-p-69269335a
                  </span>
                </div>
              </a>

              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-400/50 hover:bg-slate-900/90 transition-all group"
              >
                <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-400/30 text-cyan-400 group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">GitHub Profile</span>
                  <span className="font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors">
                    vishwajith2402
                  </span>
                </div>
              </a>
            </div>

            {/* Factual disclaimer note */}
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-400 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Mailto Client Architecture:</strong> Submitting this form prepares a prefilled draft in your default email client. No third-party servers store your message data.
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl relative">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Jane Smith / Tech Recruiter"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition-all"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-rose-400 font-mono">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition-all"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-400 font-mono">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Discuss project requirements, internship scopes, or research collaboration..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition-all resize-none"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-rose-400 font-mono">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-xl shadow-purple-900/30 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Launch Email Draft</span>
                </button>

                {mailtoPrepared && (
                  <div className="p-3.5 rounded-xl bg-cyan-950/50 border border-cyan-400/40 text-cyan-200 text-xs flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>
                      Mail client triggered with encoded message. If your mail app did not open automatically, contact directly at {PROFILE.socials.email}.
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
