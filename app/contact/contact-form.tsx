"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const FIELD =
  "w-full rounded-[14px] border border-[rgba(86,53,23,0.16)] bg-[rgba(251,248,244,0.7)] px-[18px] py-[13px] text-[15px] font-light text-mocha-900 outline-none transition-[border-color,background-color] duration-300 placeholder:text-[rgba(86,53,23,0.4)] focus:border-mocha-600 focus:bg-cream-50 disabled:opacity-60";

const LABEL =
  "mb-[7px] block text-[10px] uppercase tracking-[0.26em] text-mocha-600";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          company: data.get("company"),
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setError(json.error ?? "Something went wrong. Please try again.");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setError("Network error — check your connection and try again.");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex h-full flex-col items-start justify-center gap-4 py-4">
        <span className="text-[10px] uppercase tracking-[0.26em] text-mocha-600">
          Sent
        </span>
        <p className="text-[clamp(22px,2.4vw,30px)] font-extralight leading-[1.2] tracking-[-0.02em] text-mocha-800">
          Thanks — your message is on its way.
          <br />
          I&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-[13px] font-light uppercase tracking-[0.14em] text-mocha-600 underline-offset-4 hover:underline"
        >
          Write another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative flex flex-col gap-[clamp(14px,2.2vh,20px)]"
    >
      {/* honeypot — hidden from humans, catnip for bots */}
      <label
        aria-hidden
        className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0"
      >
        Company
        <input type="text" name="company" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="flex flex-wrap gap-[clamp(14px,2vw,18px)]">
        <div className="min-w-[180px] flex-1">
          <label htmlFor="cf-name" className={LABEL}>
            Name
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            maxLength={120}
            autoComplete="name"
            placeholder="Your name"
            disabled={status === "sending"}
            className={FIELD}
          />
        </div>
        <div className="min-w-[180px] flex-1">
          <label htmlFor="cf-email" className={LABEL}>
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            placeholder="you@example.com"
            disabled={status === "sending"}
            className={FIELD}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className={LABEL}>
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          maxLength={5000}
          rows={5}
          placeholder="What's on your mind?"
          disabled={status === "sending"}
          className={`${FIELD} resize-none`}
        />
      </div>

      {status === "error" && error && (
        <p role="alert" className="text-[13px] font-light text-red-800">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-1 inline-flex w-fit items-center gap-3 rounded-full bg-mocha-800 px-[clamp(24px,2.6vw,34px)] py-[clamp(13px,1.9vh,17px)] text-[clamp(12px,1vw,14px)] font-light uppercase tracking-[0.16em] text-cream-50 transition-[background-color,transform] duration-[350ms] ease-out hover:-translate-y-[2px] hover:bg-mocha-900 disabled:translate-y-0 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
        {status !== "sending" && <span aria-hidden>&rarr;</span>}
      </button>
    </form>
  );
}
