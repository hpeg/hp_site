import * as React from "react"
import { Card } from "@/components/ui/card"
import type { Education } from "@/data/education"

type EducationProps = {
  items: Education[]
}

export function Education({ items }: EducationProps) {
  return (
    <section id="education" className="mx-auto max-w-2xl py-16">
      <h2 className="mb-8 text-2xl font-semibold">Education</h2>
      <ul className="space-y-4">
        {items.map((edu) => (
          <li key={edu.id}>
            <Card>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">
                    {edu.field} • {edu.school}
                  </p>
                  <p className="text-xs text-muted-foreground">{edu.year}</p>
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  )
}
