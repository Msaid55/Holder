import React from "react";

export default function FoodBenefits() {
  const benefits = [
    {
      title: "High in Protein",
      desc: "The grilled chicken provides lean protein, which helps build and repair muscles and keeps you full longer.",
    },
    {
      title: "Good Source of Fibre",
      desc: "The romaine lettuce and other vegetables add fiber, which supports digestion and helps control blood sugar levels.",
    },
    {
      title: "Rich in Vitamins & Minerals",
      desc: "Contains vitamin A, vitamin C, calcium, and iron, especially from lettuce and Parmesan cheese.",
    },
    {
      title: "Healthy Fats",
      desc: "The dressing and cheese contain fats, which help absorb nutrients and provide energy. (Use in moderation if watching calories.)",
    },
    {
      title: "Low Carb Option (if croutons are limited)",
      desc: "Ideal for people following low-carb or keto-friendly diets.",
    },
    {
      title: "Quick & Balanced Meal",
      desc: "Offers a good balance of protein, veggies, and fats—great for lunch or dinner.",
    },
  ];

  return (
    <section className="max-w-8xl mx-auto px-4 md:px-8 lg:px-16 py-16">
      <h2 className="text-[30px] text-black font-bold mb-6">
        What are the benefits of this food?
      </h2>

      <div className="space-y-4">
        {benefits.map((item, index) => (
          <div
            key={index} >
            <h3 className="text-[20px] font-bold text-black mb-1">
              {item.title}
            </h3>
          <div className="bg-emerald-50 rounded-lg px-5 py-4 shadow-sm">
          <p className="text-[18px] text-black">
              {item.desc}
            </p>
          </div>
           
          </div>
        ))}
      </div>
    </section>
  );
}
