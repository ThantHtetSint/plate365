import { Suspense } from "react";
import FoodDetail from "./FoodDetail";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-4 text-white">Loading...</div>}>
      <FoodDetail />
    </Suspense>
  );
}
