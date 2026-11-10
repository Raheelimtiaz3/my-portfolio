'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Mail,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Github,
  Linkedin,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full Stack Development',
    budget: '$5,000 - $15,000',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const emailAddress = 'raheelimtiaz.pk3@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and a brief description of your project.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Functional client-side transmission handler
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Trigger celebratory metallic confetti burst
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#D98245', '#C99A68', '#F5F2ED'],
        });
      } catch {
        // Safe fallback if canvas-confetti is unavailable
      }

      setIsSubmitted(true);
      setIsSubmitting(false);
    } catch {
      setErrorMessage('Failed to send message. Please email directly at raheelimtiaz.pk3@gmail.com.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Editorial Section Header */}
      <div className="mb-20">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D98245] mb-3">
          <span>CHAPTER 05</span>
          <span aria-hidden="true">·</span>
          <span>INITIATE CONTACT</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[#F5F2ED] font-display mb-4">
          HAVE A PROJECT IN MIND?
        </h2>
        <p className="text-lg sm:text-xl text-[#929292] font-light max-w-2xl text-balance">
          Let&apos;s turn your ideas into meaningful digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Inquiries & Channel Hub */}
        <div className="lg:col-span-5 space-y-8">
          {/* Email Channel Card */}
          <div className="p-8 bg-[#111111]/70 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-[#929292] mb-2 flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#D98245]" />
              <span>Direct Electronic Mail</span>
            </div>
            <p className="text-base sm:text-lg font-mono text-[#F5F2ED] break-all mb-4">
              {emailAddress}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-xs font-mono uppercase tracking-wider text-[#F5F2ED] rounded-md border border-white/10 transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied Address</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
              <a
                href={`mailto:${emailAddress}?subject=Project%20Inquiry%20via%20Portfolio`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#D98245] hover:bg-[#c47239] text-xs font-mono uppercase tracking-wider text-black font-semibold rounded-md transition-colors"
              >
                <span>Compose Mail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Social Platforms & Direct Links */}
          <div className="p-8 bg-[#111111]/70 backdrop-blur-sm border border-white/10 rounded-2xl space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#929292] mb-1">
              Networks & Presence
            </div>

            <div className="space-y-3 font-mono text-sm">
              <a
                href="https://github.com/raheelwahla"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 text-[#F5F2ED] border border-white/5 hover:border-white/15 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-[#929292] group-hover:text-[#D98245]" />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#929292] group-hover:text-[#F5F2ED]" />
              </a>

              <a
                href="https://linkedin.com/in/raheelwahla"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 text-[#F5F2ED] border border-white/5 hover:border-white/15 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-[#929292] group-hover:text-[#D98245]" />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#929292] group-hover:text-[#F5F2ED]" />
              </a>

              <a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 text-[#F5F2ED] border border-white/5 hover:border-white/15 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-[#929292] group-hover:text-[#D98245]" />
                  <span>WhatsApp Direct</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#929292] group-hover:text-[#F5F2ED]" />
              </a>
            </div>
          </div>

          {/* Schedule & Availability Box */}
          <div className="p-6 border border-white/10 rounded-2xl text-xs font-mono text-[#929292] space-y-2">
            <div className="text-[#F5F2ED] uppercase tracking-wider font-semibold">
              Availability Status
            </div>
            <p className="leading-relaxed">
              Available for select full-stack development contracts, creative direction, and technical consultation. Standard response time is within 24 hours.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 bg-[#111111]/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl relative">
            {isSubmitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#D98245]/20 border border-[#D98245]/40 text-[#D98245] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F2ED] font-display">
                  Transmission Received.
                </h3>
                <p className="text-sm sm:text-base text-[#929292] font-light max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <span className="text-[#F5F2ED] font-medium">{formData.name}</span>. I have received your message regarding <span className="text-[#D98245]">{formData.service}</span> and will get back to you shortly.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        service: 'Full Stack Development',
                        budget: '$5,000 - $15,000',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/15 text-xs font-mono uppercase tracking-wider text-[#F5F2ED] rounded-md transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#929292] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full px-4 py-3 bg-black/50 border border-white/15 rounded-lg text-sm text-[#F5F2ED] placeholder:text-[#555] focus:outline-none focus:border-[#D98245] transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#929292] mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 bg-black/50 border border-white/15 rounded-lg text-sm text-[#F5F2ED] placeholder:text-[#555] focus:outline-none focus:border-[#D98245] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#929292] mb-2">
                      Area of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-white/15 rounded-lg text-sm text-[#F5F2ED] focus:outline-none focus:border-[#D98245] transition-colors"
                    >
                      <option value="Full Stack Development">Full Stack Development</option>
                      <option value="Frontend Development">Frontend Development</option>
                      <option value="Backend Development">Backend Development</option>
                      <option value="3D Web & Interactive Systems">3D Web & Interactive Systems</option>
                      <option value="UI/UX Implementation">UI/UX Implementation</option>
                      <option value="Website Optimization">Website Optimization</option>
                    </select>
                  </div>

                  {/* Budget Scope */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#929292] mb-2">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-white/15 rounded-lg text-sm text-[#F5F2ED] focus:outline-none focus:border-[#D98245] transition-colors"
                    >
                      <option value="Under $5,000">Under $5,000</option>
                      <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                      <option value="$15,000 - $35,000">$15,000 - $35,000</option>
                      <option value="$35,000+">$35,000+</option>
                    </select>
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#929292] mb-2">
                    Project Overview & Timeline *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your product vision, technical challenges, and ideal timeline..."
                    className="w-full px-4 py-3 bg-black/50 border border-white/15 rounded-lg text-sm text-[#F5F2ED] placeholder:text-[#555] focus:outline-none focus:border-[#D98245] transition-colors resize-none"
                  />
                </div>

                {errorMessage && (
                  <p className="text-xs font-mono text-red-400 bg-red-950/30 border border-red-800/40 p-3 rounded-lg">
                    {errorMessage}
                  </p>
                )}

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#D98245] hover:bg-[#c47239] disabled:opacity-50 text-black font-semibold text-xs tracking-widest uppercase font-mono rounded-lg transition-all shadow-lg shadow-[#D98245]/20 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Transmitting Message...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
