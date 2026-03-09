import * as React from "react"

const SKILLS = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "GraphQL",
  "Tailwind CSS",
  "Vite",
  "Docker",
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-2xl py-16">
      <h2 className="mb-4 text-2xl font-semibold">Core Skills</h2>
      <ul className="flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <li key={skill} className="rounded-full bg-muted px-3 py-1 text-sm">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
