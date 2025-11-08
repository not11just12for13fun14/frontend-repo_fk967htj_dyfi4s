import React from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0a0a10] py-20 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-md bg-violet-600/20 p-2 text-violet-400">
            <Mail className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-semibold sm:text-3xl">Get in touch</h2>
        </div>
        <form className="grid gap-4">
          <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-violet-500" placeholder="Your name" />
          <input type="email" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-violet-500" placeholder="Email" />
          <textarea rows={5} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-violet-500" placeholder="Message" />
          <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-600/30 transition hover:bg-violet-500">
            <Send className="h-4 w-4" /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
