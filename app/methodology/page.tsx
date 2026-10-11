"use client";

export default function Methodology() {
  return (
    <div className="p-6 space-y-8 pb-24 text-gray-200">
      {/* Title */}
      <h1 className="text-3xl font-bold">Methodology</h1>

      {/* Section 1 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Grading for Nutrients per Serving</h2>
        <p>
          Plate365 evaluates foods using a multi‑domain scoring system designed to
          reflect nutritional balance, density, and health impact. Each food item is
          assessed across several core dimensions, and the final grade (A–D)
          represents its overall nutritional quality.
        </p>

        <h3 className="text-xl font-semibold">Category Normalization</h3>
        <p>
          Foods are grouped into standardized categories to ensure fair comparison:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Breakfast</li>
          <li>Rice Dishes</li>
          <li>Noodles</li>
          <li>Main Dishes</li>
          <li>Salads</li>
          <li>Snacks</li>
          <li>Desserts</li>
        </ul>

        <p>
          Each category has its own nutritional expectations and typical portion
          patterns. Thresholds are adjusted accordingly so that foods are evaluated
          within their appropriate context.
        </p>

        <h3 className="text-xl font-semibold">Multi‑Domain Nutrient Evaluation</h3>
        <p>Plate365 assesses foods across six core nutrient domains:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Energy Density (Calorie)</li>
          <li>Fat Composition</li>
          <li>Sodium Load</li>
          <li>Carbohydrate Intensity</li>
          <li>Protein Adequacy</li>
          <li>Mineral Density (Calcium & Iron)</li>
        </ul>

        <p>
          Each domain contributes differently depending on the food category. For
          example, sodium is more relevant for main dishes, while carbohydrate load
          is more relevant for rice and noodle dishes.
        </p>

        <h3 className="text-xl font-semibold">Threshold‑Based Scoring</h3>
        <p>
          Each nutrient domain has a category‑specific threshold that determines
          whether a food performs above expectation, within acceptable range, or
          below expectation. These thresholds are derived from nutritional guidelines
          and Plate365’s internal analysis of local food patterns.
        </p>

        <h3 className="text-xl font-semibold">Grade Classification (A–D)</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>A (High Nutritional Quality)</strong> — Balanced and nutrient‑dense.
          </li>
          <li>
            <strong>B (Moderate Quality)</strong> — Acceptable nutritional balance with
            minor weaknesses.
          </li>
          <li>
            <strong>C (Low Quality)</strong> — Multiple domains fall below recommended
            thresholds.
          </li>
          <li>
            <strong>D (Poor Quality)</strong> — High energy load, low nutrient density,
            or significant imbalance.
          </li>
        </ul>

        <h3 className="text-xl font-semibold">Portion Adjustment</h3>
        <p>
          For foods commonly consumed in larger portions, Plate365 applies a
          portion‑based adjustment to reflect real‑world intake.
        </p>
      </section>

      {/* Section 2 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Multi‑Domain Nutrition Grading</h2>
        <p>
          Different health outcomes are driven by distinct nutritional pathways. A
          single composite score cannot capture the complexity of longevity,
          metabolic resilience, liver function, cardiovascular risk, obesity control,
          or micronutrient richness. Plate365 therefore uses a multi‑domain grading
          architecture, where each food receives several parallel grades based on
          specific physiological mechanisms.
        </p>

        <p>
          This approach aligns with modern public health frameworks that prioritize
          targeted risk reduction rather than one‑size‑fits‑all scoring. By
          separating domains, the system reflects how different nutrients influence
          different health outcomes and provides a more precise basis for dietary
          guidance, risk communication, and policy design.
        </p>

        <h3 className="text-xl font-semibold">The Six Health Domains</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Longevity grade</li>
          <li>Liver health grade</li>
          <li>Metabolic health grade</li>
          <li>Cardiovascular health grade</li>
          <li>Obesity (weight‑management) grade</li>
          <li>Nutrient density grade</li>
        </ul>

        <p>
          Each grade is calculated using a weighted combination of relevant
          nutrients. Risk‑related nutrients contribute in one direction, and
          protective nutrients contribute in the opposite direction. No formulas are
          shown publicly.
        </p>

        {/* Longevity */}
        <h3 className="text-xl font-semibold">Longevity Grade (L)</h3>
        <p>
          Longevity reflects metabolic stability, nutrient density, and chronic
          disease prevention. Foods supportive of long‑term health typically show:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Low sodium</li>
          <li>Low calorie density</li>
          <li>Low refined carbohydrates</li>
          <li>Moderate fat</li>
          <li>Adequate protein</li>
          <li>High mineral richness (iron & calcium)</li>
        </ul>
        <p>
          Conceptually, the longevity grade combines nutrients linked to metabolic
          strain with protective nutrients such as protein and minerals. The balance
          between these factors determines how longevity‑aligned a food is.
        </p>

        {/* Liver */}
        <h3 className="text-xl font-semibold">Liver Health Grade (Lv)</h3>
        <p>
          NAFLD is rising in Myanmar due to high‑carbohydrate diets, sugary
          beverages, and fried foods. Autoimmune conditions can also elevate liver
          enzymes. Foods supportive of liver health typically show:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Low refined carbohydrates</li>
          <li>Low sugar</li>
          <li>Low saturated fat</li>
          <li>Moderate protein</li>
          <li>Low calorie density</li>
          <li>Low alcohol (if applicable)</li>
        </ul>
        <p>
          Conceptually, the liver grade emphasizes nutrients that contribute to
          hepatic fat accumulation and insulin resistance, balanced against protein,
          which supports metabolic stability.
        </p>

        {/* Metabolic */}
        <h3 className="text-xl font-semibold">Metabolic Health Grade (M)</h3>
        <p>
          Myanmar’s metabolic syndrome burden is driven by high‑carbohydrate meals,
          sweetened drinks, and low protein intake. Foods supportive of metabolic
          resilience typically show:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Low carbohydrates (20–40–60 system)</li>
          <li>Low sugar</li>
          <li>Low calorie density</li>
          <li>Adequate protein</li>
          <li>Low sodium (secondary)</li>
        </ul>
        <p>
          Conceptually, the metabolic grade evaluates nutrients that influence
          glycemic load and insulin response, balanced against protein, which
          supports glucose regulation.
        </p>

        {/* Cardiovascular */}
        <h3 className="text-xl font-semibold">Cardiovascular Health Grade (C)</h3>
        <p>
          Cardiovascular disease is Myanmar’s leading cause of death. Foods
          supportive of cardiovascular health typically show:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Low sodium</li>
          <li>Low fat</li>
          <li>Low calorie density</li>
          <li>Adequate protein</li>
          <li>Low refined carbohydrates (secondary)</li>
        </ul>
        <p>
          Conceptually, the cardiovascular grade emphasizes nutrients associated
          with hypertension, lipid imbalance, and vascular inflammation, balanced
          against protein, which supports cardiometabolic resilience.
        </p>

        {/* Obesity */}
        <h3 className="text-xl font-semibold">Obesity / Weight‑Management Grade (O)</h3>
        <p>
          Obesity is driven by calorie density, fat load, and refined carbohydrates.
          Foods supportive of weight management typically show:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Low calories</li>
          <li>Low fat</li>
          <li>Low refined carbohydrates</li>
          <li>Adequate protein</li>
          <li>Low sugar</li>
        </ul>
        <p>
          Conceptually, the obesity grade evaluates nutrients that influence energy
          load and fat accumulation, balanced against protein, which supports
          satiety and lean mass preservation.
        </p>

        {/* Nutrient Density */}
        <h3 className="text-xl font-semibold">Nutrient Density Grade (N)</h3>
        <p>
          This grade highlights foods that provide essential micronutrients.
          Nutrient‑dense foods typically show:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>High protein</li>
          <li>High iron</li>
          <li>High calcium</li>
          <li>Moderate fat</li>
          <li>Moderate calories</li>
        </ul>
        <p>
          Conceptually, the nutrient density grade emphasizes protein and minerals,
          balanced against calorie load, which can dilute nutrient value.
        </p>

         <p className="text-gray-500 text-sm">
        © 2026 Plate365 — All rights reserved.
      </p>
      </section>

      {/* Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0f0f10] border-t border-gray-700 p-3 flex justify-around">
        <a href="/discover" className="text-gray-300 hover:text-white">
          Discover
        </a>
        <a href="/about" className="text-gray-300 hover:text-white">
          About
        </a>
        <a href="/methodology" className="text-gray-300 hover:text-white">
          Methodology
        </a>
      </div>
    </div>
  );
}
