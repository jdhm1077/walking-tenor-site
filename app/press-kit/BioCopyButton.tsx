"use client";

import { useState } from "react";

export default function BioCopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const el = document.createElement("textarea");
      el.value = text;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleCopy}
      className={`shrink-0 text-sm px-3 py-1.5 rounded-full border transition-colors ${
        copied
          ? "border-teal text-teal"
          : "border-teal-deep/40 text-teal-deep hover:border-teal-deep hover:bg-teal-deep hover:text-cream"
      }`}
    >
      {copied ? "Copied!" : "Copy to clipboard"}
    </button>
  );
}
