"use client";

import Link from "next/link";

export default function About() {
  return (
    <div className="p-6 space-y-6 pb-20">
      <h1 className="text-3xl font-bold">About Plate365</h1>

      <p className="text-gray-300 text-lg leading-relaxed">
        Plate365 is a nutrition intelligence platform built to help Myanmar consumers
        make informed food choices through clear grading, calorie insights, and
        multi‑domain health impact scores. Our mission is to improve food literacy
        across Myanmar households, empower preventive‑health decision‑making, and
        guide healthier everyday choices.
      </p>

      <div className="text-gray-500 text-sm pt-4 space-y-6">
        <p>Version 1.0 — built by T. H. Sint</p>
        <p>© 2026 Plate365 — all rights reserved</p>
      </div>
    </div>
  );
}
