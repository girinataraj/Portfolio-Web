"use client";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/portfolio";
export function ContactCopy() {
  const [message, setMessage] = useState(
    "A direct address. No form or account required.",
  );
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  return (
    <div className="contact-copy-row">
      <button
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(site.email);
            setMessage("Email address copied.");
          } catch {
            setMessage("Copy unavailable. Select the email address above.");
          }
          if (timer.current) clearTimeout(timer.current);
          timer.current = setTimeout(
            () => setMessage("A direct address. No form or account required."),
            5000,
          );
        }}
      >
        Copy email address
      </button>
      <p role="status">{message}</p>
    </div>
  );
}
