import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "How does Seekr's AI-powered career prediction work?",
    ans: "Seekr's AI analyzes your skills, experience, and career goals, along with current job market trends. It then uses machine learning algorithms to predict potential career paths and opportunities that best match your profile. The system continuously learns and updates its predictions based on the latest industry data and user outcomes.",
  },
  {
    id: 2,
    quest: "Can Seekr help me transition to a different industry?",
    ans: "Absolutely! Seekr specializes in identifying transferable skills and cross-industry opportunities. Our platform maps your current skillset to potential roles in various industries, highlighting areas where your expertise can be valuable. We also provide recommendations for additional skills or certifications that might boost your transition success.",
  },
  {
    id: 3,
    quest: "How accurate is the company culture fit analysis?",
    ans: "Seekr's company culture fit analysis is highly accurate, thanks to our advanced natural language processing algorithms. We analyze both your resume and the job description, considering factors like communication style, work preferences, and values. While no analysis is perfect, our users report a strong correlation between our compatibility scores and their actual experiences in new roles.",
  },
];

export default faqData;
