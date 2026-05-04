"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-orange-500 text-white text-sm font-medium py-2.5 px-4 flex items-center justify-center gap-3 relative">
      <span className="animate-pulse inline-block w-2 h-2 rounded-full bg-white/70 mr-1" />
      <span>
        🎉 Limited Time: <strong>20% OFF</strong> sitewide — use code{" "}
        <span className="bg-white/20 rounded px-1.5 py-0.5 font-mono tracking-wider">
          SAVE20
        </span>{" "}
        at checkout
      </span>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss promotional banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
      >
        <X size={14} />
      </button>
    </div>
  );
}
