import Chaf1 from "../images/chaf1.svg";
import MaleChafe from "../images/MaleChafe.svg";
import GirlChafe from "../images/GirlChafe.svg";

export const chefsData = [
  {
    name: "Owen Great",
    role: "Executive Chef",
    image: Chaf1,
    bio: "Passionate and creative culinary professional with over 10 years of experience in diverse kitchen environments. Skilled in creating innovative dishes, managing kitchen operations, and leading high-performing teams. Known for blending traditional flavours with modern techniques to deliver memorable dining experiences. Committed to maintaining high standards of quality, hygiene, and customer satisfaction. Proven ability to work under pressure while maintaining precision, consistency, and creativity on every plate.",
    socials: ["phone", "mail", "insta", "youtube"],
    skills: [
      { label: "Leadership", value: 65 },
      { label: "Kitchen Management", value: 85 },
      { label: "Menu Planning", value: 50 },
      { label: "Food Preparation", value: 95 },
      { label: "Cooking Techniques", value: 75 },
      { label: "Time Management", value: 100 },
    ],
  },
  {
    name: "Sarah Bloom",
    role: "Sous Chef",
    image: MaleChafe,
    bio: "Expert in modern cuisine with strong attention to detail.",
    socials: ["phone", "mail", "insta"],
    skills: [
      { label: "Creativity", value: 90 },
      { label: "Hygiene & Safety", value: 100 },
      { label: "Multitasking", value: 60 },
      { label: "Communication", value: 80 },
    ],
  },
  {
    name: "James Cook",
    role: "Pastry Chef",
    image: GirlChafe,
    bio: "Specialist in desserts and bakery arts.",
    socials: ["phone", "insta"],
    skills: [
      { label: "Baking", value: 95 },
      { label: "Plating", value: 85 },
      { label: "Creativity", value: 90 },
    ],
  },
];
