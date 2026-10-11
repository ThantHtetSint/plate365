export default function About() {
  return (
    <div className="p-6 space-y-6 pb-20">
      <h1 className="text-3xl font-bold">About Plate365</h1>

      <p className="text-gray-300 text-lg leading-relaxed">
        Plate365 is a nutrition intelligence platform built to help Myanmar consumers
        make informed food choices through clear grading, calorie insights, and multi‑domain health impact scores.
      </p>

      <p className="text-gray-500 text-sm">
        Version 1.0 — Built by T. H. Sint
      </p>

      <p className="text-gray-500 text-sm">
        © 2026 Plate365 — All rights reserved.
      </p>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0f0f10] border-t border-gray-700 p-3 flex justify-around">
        {[
          { name: "Discover", link: "/discover" },
          { name: "About", link: "/about" },
          { name: "Methodology", link: "/methodology" }
        ].map((tab) => (
          <a
            key={tab.name}
            href={tab.link}
            className="text-center text-gray-300 font-medium cursor-pointer hover:text-white"
          >
            {tab.name}
          </a>
        ))}
      </div>
    </div>
  );
}