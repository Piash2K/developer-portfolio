export type ExperienceItem = {
  id: number;
  title: string;
  organization: string;
  duration: string;
  projectType: string;
  liveLink: string;
};

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Smart Mentoring System",
    organization: "Developed for Daffodil International University",
    duration: "2025 - Present",
    projectType: "Team Project",
    liveLink: "http://smart-mentoring-system.netlify.app/",
  },
  {
    id: 2,
    title: "Catering Connect",
    organization: "Startup Project",
    duration: "2024 - 2025",
    projectType: "Team Project",
    liveLink: "https://catering-connects.firebaseapp.com/",
  },
];
