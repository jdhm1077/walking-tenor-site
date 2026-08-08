"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setEmail("");
      setStatus("success");
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-cream/80 text-lg" aria-live="polite">
        You&rsquo;re subscribed — thanks for staying connected.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2.5 max-w-[420px] mx-auto flex-wrap justify-center">
      <input
        type="email"
        required
        disabled={status === "submitting"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="flex-1 min-w-[220px] px-4.5 py-3.5 rounded-full border border-cream/25 bg-cream/[0.06] text-cream placeholder:text-cream/45 disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-terracotta text-cream px-6.5 py-3.5 rounded-full font-bold disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Subscribing…" : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="w-full text-center text-red-300 text-sm mt-1" aria-live="polite">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
