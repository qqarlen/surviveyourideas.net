"use client";

import { useState } from "react";

export default function CodePill({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      className="code-pill"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(code);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch {
          setCopied(false);
        }
      }}
    >
      <span>{code}</span>
      <span className="text-xs font-sans font-bold text-brand-700">
        {copied ? "Copied!" : "Copy"}
      </span>
    </button>
  );
}
