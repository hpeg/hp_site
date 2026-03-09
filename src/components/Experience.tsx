import * as React from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Experience } from "@/data/experience"

type ExperienceProps = {
  items: Experience[]
}

export function Experience({ items }: ExperienceProps) {
  return (
    <section id="experience" className="mx-auto max-w-2xl py-16">
      <h2 className="mb-8 text-2xl font-semibold">Experience</h2>
      <ul className="space-y-6">
        {items.map((exp) => (
          <li key={exp.id}>
            <Card>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                  <p className="text-xs text-muted-foreground">{exp.period}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed">{exp.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  )
}
