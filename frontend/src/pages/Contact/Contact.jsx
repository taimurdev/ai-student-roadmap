import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-[80vh] bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-xl w-full bg-slate-900/60 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-white tracking-tight">Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Touch</span></h1>
          <p className="text-slate-400 text-sm mt-2">Have questions or feedback? Drop us a message below.</p>
        </div>

        {submitted ? (
          <div className="bg-blue-950/40 border border-blue-500/30 p-6 rounded-2xl text-center space-y-2">
            <span className="text-3xl">🎉</span>
            <h3 className="text-lg font-bold text-white">Message Sent Successfully!</h3>
            <p className="text-slate-300 text-sm">Thank you for reaching out. We will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Your Name</label>
              <input 
                type="text" 
                required 
                placeholder="Your Name"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition" 
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Email Address</label>
              <input 
                type="email" 
                required 
                placeholder="Your Email Address"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition" 
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Message</label>
              <textarea 
                rows="4" 
                required 
                placeholder="Write your message here..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition resize-none" 
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3.5 px-6 rounded-xl transition shadow-lg shadow-blue-500/25 mt-2"
            >
              Send Message 🚀
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;