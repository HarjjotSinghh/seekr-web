import { Feature } from "@/types/feature";
import {
  TbBolt,
  TbChartBar,
  TbArrowRight,
  TbLayersLinked,
  TbHeart,
  TbSearch,
} from "react-icons/tb";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <TbBolt className="size-8" />,
    title: "AI-Powered Career Path Prediction",
    description:
      "Utilize advanced machine learning to generate personalized career trajectory forecasts based on your unique profile and skills.",
  },
  {
    id: 2,
    icon: <TbChartBar className="size-8" />,
    title: "Job Market Trend Analysis",
    description:
      "Stay ahead with real-time insights into job market trends, emerging roles, and in-demand skills across various industries.",
  },
  {
    id: 3,
    icon: <TbArrowRight className="size-8" />,
    title: "Skill Transferability Mapping",
    description:
      "Discover how your current skills can be applied to different roles and industries, opening up new career possibilities.",
  },
  {
    id: 4,
    icon: <TbLayersLinked className="size-8" />,
    title: "Industry Transition Recommendations",
    description:
      "Receive tailored suggestions for potential career shifts across industries, based on your experience and transferable skills.",
  },
  {
    id: 5,
    icon: <TbHeart className="size-8" />,
    title: "Company Culture Compatibility Score",
    description:
      "Get a data-driven compatibility score that matches your work style and values with potential employers' cultures.",
  },
  {
    id: 6,
    icon: <TbSearch className="size-8" />,
    title: "Resume-Job Description Analyzer",
    description:
      "Use AI to compare your resume against job descriptions, highlighting strengths and areas for improvement to increase your chances of success.",
  },
];

export default featuresData;
