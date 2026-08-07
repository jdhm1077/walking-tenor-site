"use client";

import { useState } from "react";

export default function BookingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, details }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section className="py-24 md:py-28 bg-teal-deep text-center relative overflow-hidden">
        <div className="max-w-[560px] mx-auto px-8 relative z-10">
          <span className="eyebrow text-gold block mb-4">Booking</span>
          <h1 className="text-4xl md:text-5xl text-cream leading-tight mb-5">
            Inquiry sent!
          </h1>
          <p className="text-cream/70 leading-relaxed">
            Thanks, {name}. We received your inquiry and will be in touch soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 md:py-28 bg-teal-deep text-center relative overflow-hidden">
      <div className="max-w-[560px] mx-auto px-8 relative z-10">
        <span className="eyebrow text-gold block mb-4">Booking</span>
        <h1 className="text-4xl md:text-5xl text-cream leading-tight mb-5">
          Bring The Walking Tenor to your stage
        </h1>
        <p className="text-cream/65 mb-10 leading-relaxed">
          For concert bookings, presenter inquiries, weddings, and special
          events, reach out with your event details and we&rsquo;ll follow up
          with availability and a press kit.
        </p>

        <form onSubmit={handleSubmit} className="text-left space-y-5 bg-cream/[0.04] border border-cream/10 rounded-xl p-8">
          <div>
            <label className="block text-cream/80 text-sm mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-cream/20 bg-cream/[0.06] text-cream placeholder:text-cream/40"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-cream/80 text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-cream/20 bg-cream/[0.06] text-cream placeholder:text-cream/40"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-cream/80 text-sm mb-2" htmlFor="details">
              Event details
            </label>
            <textarea
              id="details"
              rows={4}
              required
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-cream/20 bg-cream/[0.06] text-cream placeholder:text-cream/40"
              placeholder="Date, venue, event type..."
            />
          </div>
          {status === "error" && (
            <p className="text-red-400 text-sm text-center">{errorMessage}</p>
          )}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-terracotta text-cream py-3.5 rounded-full font-bold hover:bg-terracotta/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Sending…" : "Send inquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}
