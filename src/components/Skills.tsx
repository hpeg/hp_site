import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/AnimatedSection"
import { AnimatedListItem } from "@/components/AnimatedListItem"
import { SKILLS } from "@/data/skills"

export function Skills() {
  return (
    <AnimatedSection id="skills" className="mx-auto max-w-2xl py-16">
      {(isInView) => (
        <>
          <h2 className="mb-4 text-2xl font-semibold">Core Skills</h2>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill, index) => (
              <AnimatedListItem key={skill} index={index} isInView={isInView}>
                <Badge>{skill}</Badge>
              </AnimatedListItem>
            ))}
          </div>
        </>
      )}
    </AnimatedSection>
  )
}
