"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Audience = "Personal" | "Corporate";
type Status = "idle" | "loading" | "success" | "error";

const fieldClasses =
  "w-full border-0 border-b border-ink/20 bg-transparent py-fluid-md text-body placeholder:text-ink/40 focus:border-brand-500 focus:outline-none";

/** The contact form + office details block reused at the bottom of every page. */
export function ContactSection() {
  const [audience, setAudience] = useState<Audience | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          audience,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
      setAudience(null);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-section-lg">
      <Container className="grid grid-cols-1 gap-fluid-4xl lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <form onSubmit={handleSubmit} className="flex flex-col gap-fluid-xl">
            <div className="flex gap-fluid-lg">
              {(["Personal", "Corporate"] as const).map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => setAudience(option)}
                  className={cn(
                    "flex items-center gap-fluid-sm font-display text-body-sm uppercase tracking-[0.06em] transition-colors",
                    audience === option ? "text-brand-600" : "text-ink/50 hover:text-ink"
                  )}
                >
                  <span
                    className={cn(
                      "flex size-4 items-center justify-center rounded-full border",
                      audience === option ? "border-brand-600" : "border-ink/30"
                    )}
                  >
                    {audience === option && (
                      <motion.span
                        layoutId="audience-dot"
                        className="size-2 rounded-full bg-brand-600"
                      />
                    )}
                  </span>
                  {option}
                </button>
              ))}
            </div>
            <p className="text-body-sm text-ink/60">
              *Please choose whether you&rsquo;re contacting us on behalf of a{" "}
              <strong className="text-ink">business</strong> or{" "}
              <strong className="text-ink">personally.</strong>
            </p>

            <input name="name" type="text" placeholder="Your name" required className={fieldClasses} />
            <input
              name="email"
              type="email"
              placeholder="Your e-mail address"
              required
              className={fieldClasses}
            />
            <input
              name="message"
              type="text"
              placeholder="Your message"
              required
              className={fieldClasses}
            />

            <div className="flex items-center gap-fluid-lg pt-fluid-md">
              <Button type="submit">
                {status === "loading" ? "Sending..." : "Send"}
              </Button>
              {status === "success" && (
                <span className="text-body-sm text-brand-600">
                  Thank you! Your submission has been received.
                </span>
              )}
              {status === "error" && (
                <span className="text-body-sm text-red-600">
                  Something went wrong — please try again.
                </span>
              )}
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.1} direction="left" className="flex flex-col justify-between gap-fluid-4xl">
          <div className="flex flex-col gap-fluid-sm">
            <span className="text-body-sm text-ink/50">Where we&rsquo;ll be replying from:</span>
            <span className="text-h5">Curehub Headquarters, Budapest, Hungary</span>
            <span className="text-body-sm text-ink/50">(GMT+2) Time zone</span>
          </div>
          <p className="font-display text-h3 uppercase leading-none text-ink/10">
            Contact
            <br />
            Us
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
