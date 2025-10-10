'use client';

import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  if (!mounted) {
    // Avoid SSR/CSR mismatch from browser extensions injecting attributes
    return null;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-10 max-w-xl w-full p-4 sm:p-6 md:p-8 bg-transparent rounded-lg flex flex-col gap-4"
    >
      <label className="block">
        <span className="block mb-1 text-white text-sm">Name</span>
        <input
          type="text"
          name="name"
          placeholder='Enter Your Name'
          value={form.name}
          onChange={handleChange}
          required
          className="block w-full p-2 md:p-3 border border-gray-400 rounded bg-transparent text-white focus:outline-none focus:border-purple-400 transition"
        />
      </label>
      <label className="block">
        <span className="block mb-1 text-white text-sm">Email</span>
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder='Enter Your Email'
            value={form.email}
            onChange={handleChange}
            required
            className="block w-full p-2 md:p-3 border border-gray-400 rounded bg-transparent text-white pr-10 focus:outline-none focus:border-purple-400 transition"
          />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
            {/* <img src="/email-icon.png" alt="email icon" className="w-5 h-5 md:w-6 md:h-6" /> */}
            <Image src="/email-icon.png" width={10} height={10} alt="email icon" className="w-5 h-5 md:w-6 md:h-6"/>
          </span>
        </div>
      </label>
      <label className="block">
        <span className="block mb-1 text-white text-sm">Message</span>
        <textarea
          name="message"
          placeholder='Enter Your Message'
          value={form.message}
          onChange={handleChange}
          required
          className="block w-full p-2 md:p-3 border border-gray-400 rounded bg-transparent text-white h-28 md:h-32 resize-none focus:outline-none focus:border-purple-400 transition"
        />
      </label>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-2 md:py-3 bg-purple-400 text-white rounded transition-colors duration-300 hover:bg-purple-600 cursor-pointer disabled:bg-purple-300 text-base md:text-lg font-semibold"
      >
        {status === 'loading' ? 'Submitting...' : 'Submit'}
      </button>
      {status === 'success' && <p className="text-green-400 text-center mt-2">Message sent!</p>}
      {status === 'error' && <p className="text-red-400 text-center mt-2">Error sending message.</p>}
    </form>
  );
}
