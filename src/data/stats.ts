export type ChartDataPoint = {
  name: string
  value: number
}

export type StatMetric = {
  id: string
  label: string
  value: string | number
}

// Real data points for languages/technologies over time
export const LANGUAGES_DATA: ChartDataPoint[] = [
  { name: "JavaScript", value: 95 },
  { name: "TypeScript", value: 88 },
  { name: "React", value: 92 },
  { name: "Node.js", value: 85 },
  { name: "PostgreSQL", value: 80 },
  { name: "Python", value: 70 },
]

// Proficiency distribution across different skill types
export const SKILL_DISTRIBUTION: ChartDataPoint[] = [
  { name: "Frontend", value: 50 },
  { name: "Backend", value: 30 },
  { name: "Database", value: 20 },
]

// Major features & projects shipped per year
export const EXPERIENCE_TIMELINE: ChartDataPoint[] = [
  { name: "2019", value: 4 },
  { name: "2020", value: 8 },
  { name: "2021", value: 14 },
  { name: "2022", value: 18 },
  { name: "2023", value: 22 },
  { name: "2025", value: 12 },
]

export const STATS: StatMetric[] = [
  { id: "1", label: "Years of Professional Experience", value: "6+" },
  { id: "2", label: "Companies Worked At", value: "3" },
  { id: "3", label: "Languages & Frameworks", value: "8+" },
  { id: "4", label: "Technical Leadership Roles", value: "2+" },
]
