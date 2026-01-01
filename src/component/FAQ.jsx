import { useState } from "react";
import Group83 from "../images/Group83.svg";
import UseScrollReveal from "./UseScrollReveal";
export default function FAQ() {
  UseScrollReveal();
  const faqs = [
    {
      question: "What are the opening hours?",
      answer: "24 hours on day.",
    },
    {
      question: "Are you open on public holidays?",
      answer: "Yap.",
    },
    {
      question: "How do I book a table?",
      answer:
        "You can contact the restaurant directly, use their website, or utilize third-party reservation platforms like OpenTable.",
    },
    {
      question: "Are pets allowed outside and inside?",
      answer: "No.",
    },
    {
      question: "Do you have any ongoing promotions or special offers?",
      answer: "Yap.",
    },
    {
      question: "What food does your restaurant specialise in?",
      answer: "Meal.",
    },
    {
      question: "Are there choices for children on the menu?",
      answer: "Absolutley.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-3xl mx-auto px-4">

        {/* العنوان */}
        <div className="flex flex-col items-center reveal gap-2 mb-10">
          <h2 className="text-[#007a59] text-[30px] md:text-[26px] font-semibold">
            FAQ
          </h2>
                <img src={Group83} alt="" className="w-[55px] h-[6px]" />
        </div>

        {/* الأسئلة */}
        <div className="flex reveal flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#E7F5F2] rounded-lg px-5 py-4 cursor-pointer transition-all duration-300"
              onClick={() => toggleFAQ(index)}
            >
              {/* السؤال */}
              <div className="flex justify-between items-center">
                <h3 className="text-[16px] md:text-[30px] font-medium text-black">
                  {faq.question}
                </h3>

                <span className="text-[30px] font-semibold text-black">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              {/* الإجابة */}
              <div
                className={`
                  overflow-hidden transition-all duration-300
                  ${activeIndex === index ? "max-h-40 mt-3" : "max-h-0"}
                `}
              >
                <p className="text-[14px] text-gray-700 leading-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
