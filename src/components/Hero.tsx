import { AnimatedSection } from "@/components/AnimatedSection"

export function Hero() {
  return (
    <AnimatedSection
      id="home"
      className="py-16 text-center"
      animationType="slide-up"
    >
      <h1 className="text-4xl font-bold">Harry Pegrum</h1>
      <p className="mt-2 text-lg text-muted-foreground">
        Senior Full Stack Software Engineer. Building scalable, secure web
        applications with React, TypeScript, Python, and more.
      </p>
    </AnimatedSection>
  )
}
