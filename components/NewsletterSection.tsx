"use client";

import { useState } from "react";
import { Mail, Check, AlertCircle } from "lucide-react";

type Status = "idle" | "success" | "error";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <section id="newsletter" className="bg-gray-900 py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-2xl mb-6">
          <Mail size={26} className="text-orange-400" />
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
          Get Exclusive Deals
        </h2>
        <p className="text-gray-400 text-base mb-8 max-w-md mx-auto">
          Subscribe to our newsletter and be the first to know about flash
          sales, new arrivals, and members-only discounts.
        </p>

        {status === "success" ? (
          <div className="inline-flex items-center gap-3 bg-green-500/20 border border-green-500/30 text-green-400 px-6 py-4 rounded-2xl">
            <Check size={20} />
            <span className="font-semibold">
              You&apos;re subscribed! Check your inbox for a welcome gift.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="Enter your email address"
                  aria-label="Email address for newsletter"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900 whitespace-nowrap"
              >
                Subscribe Free
              </button>
            </div>

            {status === "error" && (
              <div className="flex items-center justify-center gap-2 mt-3 text-red-400 text-sm">
                <AlertCircle size={14} />
                <span>Please enter a valid email address.</span>
              </div>
            )}
          </form>
        )}

        <p className="text-gray-600 text-xs mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
