"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import foods from "../data/foods.json";

// Green shade scale
function scoreColor(score: number) {
  switch (score) {
    case 4: return "bg-[#1fbf55]";
    case 3: return "bg-[#4cd97a]";
    case 2: return "bg-[#7feea0]";
    case 1: return "bg-[#b7f5c2]";
    default: return "bg-gray-600";
  }
}

const categories = [
  "All-အားလုံး",
  "Breakfast-နံနက်စာ",
  "Rice Dishes-ထမင်းအဆက်အစပ်",
  "Noodles-ခေါက်ဆွဲ",
  "Main Dishes-အဓိကဟင်းလျာ",
  "Salads-အသုပ်",
  "Snacks-သရေစာ",
  "Desserts-အချိုပွဲ"
];

export default function Discover() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter foods from JSON
  const filteredFoods = foods.filter((food) => {
    if (selectedCategory === "All") return true;
    return food.Category === selectedCategory;
  });

  return (
    <div className="p-4 space-y-6 pb-20">

      {/* Header */}
<div className="text-center mb-4">
  <h1 className="text-3xl tracking-wide">
    <span className="font-sans font-bold"
    style={{ color: "#ffffff" }}>Plate365</span>
  </h1>
</div>
      <div>
        <h1 className="text-2xl font-bold">Discover</h1>
        <p className="text-gray-400 text-md">Browse foods by category</p>
      </div>

      {/* Category Chips */}
      <div className="flex gap-2 overflow-x-auto mt-2">
        {categories.map((cat) => {
          const [en, mm] = cat.split("-");
          const isActive = selectedCategory === en;

          return (
            <div
              key={cat}
              onClick={() => setSelectedCategory(en)}
              className={`px-4 py-2 rounded-full text-md cursor-pointer
                ${isActive ? "bg-green-600" : "bg-gray-800"}`}
            >
              <div className={`${isActive ? "text-black" : "text-white"} font-semibold leading-tight`}>
                {en}
              </div>
              <div className={`${isActive ? "text-black" : "text-gray-300"} text-sm leading-tight`}>
                {mm}
              </div>
            </div>
          );
        })}
      </div>

      {/* Food List */}
      <div className="space-y-4">
        {filteredFoods.map((food) => (
          <div
            key={food.FoodName}
            onClick={() => router.push(`/food/${encodeURIComponent(food.FoodName)}`)}
            className="bg-[#1a1a1c] p-4 rounded-xl flex items-center shadow-md relative cursor-pointer"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{food.FoodName}</h3>
              <p className="text-gray-400 text-lg">{food.FoodName_Myanmar}</p>

              <div className="flex items-center gap-2 mt-2">
                <div className="px-3 py-1 bg-purple-700/40 text-purple-300 text-md rounded-full">
                  {food.Category}
                </div>

                <p className="text-gray-300 text-md font-medium">
                  {food.Portion_g}g · {food.Calories_kcal} kcal
                </p>
              </div>
            </div>

            {/* REMOVE HEALTH GOAL UI → Only show General scores */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-4 text-xl font-bold text-white">
              {[
                { label: "L", value: food.L },
                { label: "Lv", value: food.Lv },
                { label: "M", value: food.M },
                { label: "C", value: food.C },
                { label: "O", value: food.O },
                { label: "N", value: food.N }
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  <span className="text-gray-300 text-lg mb-1">{item.label}</span>
                  <div
                    className={`w-6 h-6 flex items-center justify-center rounded-full ${scoreColor(item.value)} text-black text-lg font-bold`}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
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