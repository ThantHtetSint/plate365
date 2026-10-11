"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6 text-white space-y-10 pb-20">

      {/* Header */}
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold tracking-wide">Plate365</h1>
        <p className="text-gray-400 text-lg mt-2">
          Your daily nutrition companion
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col items-center gap-4 mt-10">
        <Link
          href="/discover"
          className="bg-green-600 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-green-700"
        >
          Discover Foods
        </Link>

        <Link
          href="/methodology"
          className="bg-gray-800 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-700"
        >
          How Plate365 Works
        </Link>

        <Link
          href="/about"
          className="text-gray-300 hover:text-white text-lg font-medium"
        >
          About Plate365
        </Link>
      </div>

    </div>
  );
}