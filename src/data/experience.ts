export type Experience = {
  id: string
  company: string
  role: string
  period: string
  description: string
  skills: string[]
}

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    company: "Made with Intent",
    role: "Senior Full Stack Developer",
    period: "Oct 2023 - Present",
    description:
      "Led redevelopment of a core dashboard application using React, TypeScript, and MUI, improving consistency and maintainability. Introduced atomic design principles to support scalable component development and faster feature delivery. Designed and implemented features to support customer onboarding and sales demonstrations.",
    skills: ["React", "TypeScript", "MUI", "Atomic Design"],
  },
  {
    id: "2",
    company: "Raytheon UK",
    role: "Senior Software Engineer",
    period: "Aug 2022 - Sep 2023",
    description:
      "Acted as technical lead for an MVP web application, shaping architecture and guiding the team through delivery. Assisted in leading front-end development in Vue, whilst supporting API development in Python.",
    skills: ["Vue", "Python", "Technical Leadership", "MVP Development"],
  },
  {
    id: "3",
    company: "Raytheon UK",
    role: "Software Engineer",
    period: "Sep 2021 - Jul 2022",
    description:
      "Delivered end-to-end features in Vue, Python and Neo4j. Implemented and supported infrastructure changes to improve deployment reliability.",
    skills: ["Vue", "Python", "Neo4j", "Infrastructure"],
  },
  {
    id: "4",
    company: "Sophos",
    role: "Software Engineer 3",
    period: "Jul 2021 - Sep 2021",
    description:
      "Web and mobile platform development using React, Python and Dart. Maintained high standards of code quality through testing and reviews.",
    skills: ["React", "Python", "Dart", "Testing"],
  },
  {
    id: "5",
    company: "Sophos",
    role: "Software Engineer 2",
    period: "Jul 2020 - Jun 2021",
    description:
      "Developed features for a core enterprise web application and companion mobile app. Mentored interns and junior engineers, supporting onboarding and technical growth.",
    skills: ["React", "Python", "Mentoring", "Mobile Development"],
  },
  {
    id: "6",
    company: "Sophos",
    role: "Software Engineer Intern",
    period: "Jul 2018 - Aug 2019",
    description:
      "Contributed to production features across the stack using React, JavaScript and Python.",
    skills: ["React", "JavaScript", "Python"],
  },
]
