"use client";

import { useState } from "react";
import styles from "./links.module.css";

export default function NewsletterSignup() {
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

  return (
    <div className={styles.newsletterCard}>
      <h2>Join The Walking Tenor List</h2>
      <p>New episodes, releases, tour dates, and stories from the road.</p>
      {status === "success" ? (
        <p className={styles.nlSuccess} aria-live="polite">
          You&rsquo;re subscribed — thanks for staying connected.
        </p>
      ) : (
        <form className={styles.nlForm} onSubmit={handleSubmit}>
          <input
            className={styles.nlInput}
            type="email"
            placeholder="your@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "submitting"}
          />
          <button
            className={styles.nlButton}
            type="submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Joining…" : "Join"}
          </button>
          {status === "error" && (
            <p className={styles.nlError} aria-live="polite">
              {errorMessage}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
