import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${name || 'a visitor'}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:hello@yourstartup.ai?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-fuchsia-900 to-indigo-950 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(500px_300px_at_20%_10%,rgba(255,255,255,0.10),transparent_50%),radial-gradient(600px_300px_at_80%_90%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-white border border-white/20 mb-6">
            <Mail className="w-4 h-4 text-amber-300" />
            <span className="text-sm font-medium">Let’s build something brilliant</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold">Get in touch</h2>
          <p className="text-white/80 mt-2">Tell us about your use case and timelines — we’ll respond within 24 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Work email"
              className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What would you like to build?"
            rows={5}
            className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <div className="flex justify-center">
            <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 px-6 py-3 text-white font-semibold shadow-lg shadow-pink-500/30 hover:scale-[1.01] transition-transform">
              Send message
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
