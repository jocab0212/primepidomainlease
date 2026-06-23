"use client";

import { useEffect } from "react";
import { PiNetwork } from "pi-sdk-lite";

export default function Home() {
  useEffect(() => {
    const pi = new PiNetwork({
      apiKey: process.env.NEXT_PUBLIC_PI_NETWORK_KEY!,
    });

    pi.init()
      .then(() => {
        console.log("✅ Pi SDK initialized successfully");
      })
      .catch((err) => {
        console.error("❌ Pi SDK failed to init:", err);
      });
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>PrimePiDomainLease</h1>
      <p>
        Check your browser console for Pi SDK status.
      </p>
    </main>
  );
}
