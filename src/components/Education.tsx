import { Card } from "@/components/ui/card"
import { AnimatedSection } from "@/components/AnimatedSection"
import { AnimatedListItem } from "@/components/AnimatedListItem"
import type { Education } from "@/data/education"

type EducationProps = {
  items: Education[]
}

export function Education({ items }: EducationProps) {
  return (
    <AnimatedSection id="education" className="mx-auto max-w-2xl py-16">
      {(isInView) => (
        <>
          <h2 className="mb-8 text-2xl font-semibold">Education</h2>
          <ul className="space-y-4">
            {items.map((edu, index) => (
              <li key={edu.id}>
                <AnimatedListItem index={index} isInView={isInView}>
                  <Card>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">
                          {edu.field} • {edu.school}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {edu.year}
                        </p>
                      </div>
                    </div>
                  </Card>
                </AnimatedListItem>
              </li>
            ))}
          </ul>
        </>
      )}
    </AnimatedSection>
  )
}
