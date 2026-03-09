import { Badge } from "@/components/ui/badge"
import { SKILLS } from "@/data/skills"

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-2xl py-16">
      <h2 className="mb-4 text-2xl font-semibold">Core Skills</h2>
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </section>
  )
}
