import "./globals.css";
import Link from "next/link";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Plate365",
  description: "Nutrition scoring app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0f0f10] text-white">
        <div className="min-h-screen pb-20">{children}</div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#0f0f10] border-t border-gray-700 p-3 flex justify-around">
          <Link
            href="/discover"
            className="text-center text-gray-300 font-medium hover:text-white"
          >
            Discover
          </Link>

          <Link
            href="/about"
            className="text-center text-gray-300 font-medium hover:text-white"
          >
            About
          </Link>

          <Link
            href="/methodology"
            className="text-center text-gray-300 font-medium hover:text-white"
          >
            Methodology
          </Link>
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
