import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Harjot Singh",
    designation: "Co-Founder @Seekr",
    image: image1,
    content:
      "Seekr has revolutionized the way we approach career guidance. Our tools help people make informed decisions about their careers. It really does bring me joy to say that Seekr is able to help so many individual struggling to choose a career.",
  },
  {
    id: 2,
    name: "Avneet Kaur",
    designation: "Co-Founder @Seekr",
    image: image2,
    content:
      "We're proud of how Seekr bridges the gap between different industries, enabling professionals to discover new opportunities they might never have considered before. It's all about the user's career!",
  },
  {
    id: 3,
    name: "Gurleen Kaur",
    designation: "Co-Founder @Seekr",
    image: image1,
    content:
      "The positive feedback from our users has been overwhelming. Seekr's ability to match individuals with company cultures has led to more satisfying career transitions and improved job satisfaction across the board.",
  },
];