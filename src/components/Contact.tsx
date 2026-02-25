import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Send, Sparkles, Github, Loader2, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { error } = await supabase
        .from('messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-[1px] bg-cyan-500" />
                <span className="text-cyan-400 font-display font-bold tracking-widest text-[10px] uppercase">GET IN TOUCH</span>
              </div>
              <h2 className="text-5xl sm:text-7xl font-display font-bold text-white tracking-tighter leading-tight">
                Let's Build <br />
                <span className="text-slate-500">Something </span>
                <span className="text-cyan-400 italic">Epic.</span>
              </h2>
            </div>

            <p className="text-slate-400 text-lg mb-12 max-w-md font-sans leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'Muhammadfaisalsahb12@gmail.com', href: 'mailto:Muhammadfaisalsahb12@gmail.com' },
                { icon: Github, label: 'GitHub', value: 'Faisal-khan-SE', href: 'https://github.com/Faisal-khan-SE' },
                { icon: Phone, label: 'WhatsApp', value: '+92 349 3979127', href: 'tel:+923493979127' },
                { icon: Linkedin, label: 'LinkedIn', value: 'Muhammad Faisal', href: 'https://www.linkedin.com/in/muhammad-faisal-2189b8328?utm_source=share_via&utm_content=profile&utm_medium=member_android' }
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-center gap-6 p-6 glass-card rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 flex items-center justify-center text-cyan-400 border border-white/5 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-display font-bold text-slate-500 tracking-widest uppercase">{item.label}</span>
                    <span className="text-white font-display font-medium group-hover:text-cyan-400 transition-colors">{item.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background Glow for Form */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/10 to-indigo-500/10 rounded-[3rem] blur-2xl -z-10" />

            <form
              className="glass-card p-10 rounded-[3rem] border border-white/10 space-y-6 relative overflow-hidden"
              onSubmit={handleSubmit}
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Sparkles className="w-12 h-12 text-white" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-display font-bold text-slate-500 tracking-widest uppercase ml-4">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-sans text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-display font-bold text-slate-500 tracking-widest uppercase ml-4">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-sans text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-display font-bold text-slate-500 tracking-widest uppercase ml-4">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-sans text-sm resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`w-full group relative py-5 rounded-2xl font-display font-black text-xs tracking-[0.2em] uppercase overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] ${status === 'success' ? 'bg-green-500 text-white' : 'bg-white text-slate-950'
                  }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {status === 'loading' ? (
                    <>Sending... <Loader2 className="w-4 h-4 animate-spin" /></>
                  ) : status === 'success' ? (
                    <>Sent Successfully! <CheckCircle2 className="w-4 h-4" /></>
                  ) : status === 'error' ? (
                    <>Try Again <Send className="w-4 h-4" /></>
                  ) : (
                    <>Send Message <Send className="w-4 h-4" /></>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-400 opacity-0 group-hover:opacity-10 transition-opacity" />
              </button>

              {status === 'error' && (
                <p className="text-center text-red-400 text-[10px] font-display font-bold uppercase tracking-widest animate-pulse">
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
