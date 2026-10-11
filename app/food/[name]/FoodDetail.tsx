"use client";

import { useParams } from "next/navigation";
import foods from "../../data/foods.json";

const gradeLabels = {
  A: "Excellent",
  B: "Good",
  C: "Moderate",
  D: "Low",
};

const gradeColors = {
  A: "bg-green-600",
  B: "bg-green-800",
  C: "bg-yellow-600",
  D: "bg-orange-800",
};

export default function FoodDetail() {
  const params = useParams();

  const rawName = params?.name;
  const name = typeof rawName === "string" ? decodeURIComponent(rawName) : "";

  const food = foods.find(
  (f) => f.FoodName.toLowerCase().trim() === name.toLowerCase().trim()
);


  if (!food) {
    return <div className="p-4 text-white">Food not found.</div>;
  }

  return (
    <div className="p-4 space-y-6 text-white pb-24">

      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">{food.FoodName}</h1>
        <p className="text-gray-400 text-2xl">{food.FoodName_Myanmar}</p>
        <p className="text-gray-400 text-xl">
          {food.Portion_g}g
        </p>
      </div>

      {/* Nutrition per serving */}
      <div className="bg-[#1a1a1c] p-4 rounded-xl space-y-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Nutrition per serving</h2>
          <p className="text-md text-gray-400">
            တစ်ကြိမ်စာ စားသောက်မှုအတွက် အာဟာရဓာတ်ပမာဏ
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#2a2a2c] p-3 rounded-lg">
            <p className="text-gray-300 text-xl">Calories <span className="text-lg">(ကယ်လိုရီ)</span></p>
            <p className="text-xl font-bold">{food.Calories_kcal} kcal</p>
          </div>

          <div className="bg-[#2a2a2c] p-3 rounded-lg">
            <p className="text-gray-300 text-xl">Carbohydrates  <span className="text-lg">(ကစီဓာတ်)</span></p>
            <p className="text-xl font-bold">{food.Carbs_g} g</p>
          </div>

          <div className="bg-[#2a2a2c] p-3 rounded-lg">
            <p className="text-gray-300 text-xl">Protein <span className="text-lg">(ပရိုတင်း)</span></p>
            <p className="text-xl font-bold">{food.Protein_g} g</p>
          </div>

          <div className="bg-[#2a2a2c] p-3 rounded-lg">
            <p className="text-gray-300 text-xl">Fat <span className="text-lg">(အဆီဓာတ်)</span> </p>
            <p className="text-xl font-bold">{food.Fat_g} g</p>
          </div>

          <div className="bg-[#2a2a2c] p-3 rounded-lg">
            <p className="text-gray-300 text-xl">Sodium <span className="text-lg">(အငန်ဓာတ်)</span></p>
            <p className="text-xl font-bold">{food.Sodium_mg} mg</p>
          </div>
        </div>
      </div>

      {/* Nutrient grades */}
      <div className="bg-[#1a1a1c] p-4 rounded-2xl space-y-3">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Nutrient grade</h2>
          <p className="text-md text-gray-400">အာဟာရဓာတ်အဆင့်</p>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {[
            { en: "Calories", mm: "ကယ်လိုရီ", grade: food.CalGrade },
            { en: "Carbohydrates", mm: "ကစီဓာတ်", grade: food.CarbGrade },
            { en: "Protein", mm: "ပရိုတင်း", grade: food.ProtGrade },
            { en: "Fat", mm: "အဆီဓာတ်", grade: food.FatGrade },
            { en: "Sodium", mm: "အငန်ဓာတ်", grade: food.SodiumGrade },
            { en: "Overall", mm: "စုစုပေါင်း", grade: food.MinGrade },
          ].map((item) => (
            <div
              key={item.en}
              className="bg-[#2a2a2c] p-3 rounded-2xl min-w-[150px] flex flex-col items-center"
            >
              <p className="text-md font-semibold text-white text-center">
                {item.en}
              </p>
              <p className="text-md text-gray-300 text-center mt-0.5 mb-2">
                {item.mm}
              </p>

              <div
                className={`
                  w-12 h-12 rounded-lg flex items-center justify-center
                  bg-opacity-30 ${gradeColors[item.grade]}
                `}
              >
                <span
                  className={`${gradeColors[item.grade].replace(
                    "bg-",
                    "text-"
                  )} text-2xl font-semibold`}
                >
                  {item.grade}
                </span>
              </div>

              <p className="mt-2 text-md font-semibold text-gray-300 text-center">
                {gradeLabels[item.grade]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Health scores */}
      <div className="bg-[#1a1a1c] p-4 rounded-xl space-y-7">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Health scores</h2>
          <p className="text-md text-gray-400">ကျန်းမာရေးဆိုင်ရာအမှတ်</p>
        </div>

        <div className="space-y-4">
          {[
            { en: "Longevity", mm: "သက်ရှည်ကျန်းမာခြင်း", value: food.L },
            { en: "Liver", mm: "အသည်းကျန်းမာရေး", value: food.Lv },
            { en: "Metabolic", mm: "ဇီဝဖြစ်စဥ်", value: food.M },
            { en: "Cardio", mm: "နှလုံးကျန်းမာရေး", value: food.C },
            { en: "Weight", mm: "ကိုယ်အလေးချိန်", value: food.O },
            { en: "Nutrients", mm: "အာဟာရ", value: food.N },
          ].map((item) => (
            <div key={item.en} className="flex items-center justify-between">

              {/* Two-line label */}
              <div className="flex flex-col">
                <span className="text-white text-xl font-semibold">
                  {item.en}
                </span>
                <span className="text-gray-300 text-md">{item.mm}</span>
              </div>

              {/* Dots + score */}
              <div className="flex items-center gap-3 min-w-[160px] justify-start">

                {/* Dots */}
                <div className="flex gap-1">
                  {/* Filled dots */}
                  {Array(item.value)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={`g${i}`}
                        className="w-5 h-5 bg-green-500 rounded-full"
                      ></div>
                    ))}

                  {/* Empty dots */}
                  {Array(4 - item.value)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={`e${i}`}
                        className="w-5 h-5 bg-gray-600 rounded-full"
                      ></div>
                    ))}
                </div>

                {/* Score text */}
                <span className="text-gray-300 text-lg font-semibold">
                  {item.value}/4
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
