import { useState } from "react";
import { chefsData } from "./chefsData";
import ChefHeader from "./ChefHeader";
import ChefSkills from "./ChefSkills";

export default function ChefSlider() {
  const [currentChef, setCurrentChef] = useState(0);

  const nextChef = () => {
    setCurrentChef((prev) =>
      prev === chefsData.length - 1 ? 0 : prev + 1
    );
  };

  const prevChef = () => {
    setCurrentChef((prev) =>
      prev === 0 ? chefsData.length - 1 : prev - 1
    );
  };

  return (
    <section className="max-w-8xl mx-auto px-4 md:px-8 lg:px-16 py-10">
      <ChefHeader chef={chefsData[currentChef]} />
      <ChefSkills skills={chefsData[currentChef].skills} />

      {/* Arrows */}
      <div className="flex justify-center gap-6 mt-12">
        <button
          onClick={prevChef}
          className="px-5 py-2 border rounded-full disabled:opacity-40 bg-[#FF4033]"
        >
          ←
        </button>
        <button
          onClick={nextChef}
          className="px-5 py-2 border rounded-full disabled:opacity-40 bg-[#007a59]"
        >
          →
        </button>
      </div>
    </section>
  );
}
