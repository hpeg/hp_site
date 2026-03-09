import * as React from "react"
import { useInView } from "@/hooks/useInView"

type AnimationType = "slide-up" | "fade-in" | "scale-in"

type AnimatedSectionProps = {
  id: string
  children: React.ReactNode | ((isInView: boolean) => React.ReactNode)
  className?: string
  animationType?: AnimationType
}

const animationStyles: Record<
  AnimationType,
  { visible: string; hidden: string }
> = {
  "slide-up": {
    visible: "animate-slide-up",
    hidden: "opacity-0 translate-y-10",
  },
  "fade-in": {
    visible: "animate-fade-in",
    hidden: "opacity-0",
  },
  "scale-in": {
    visible: "animate-scale-in",
    hidden: "opacity-0 scale-95",
  },
}

export function AnimatedSection({
  id,
  children,
  className = "",
  animationType = "fade-in",
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView()
  const { visible, hidden } = animationStyles[animationType]

  return (
    <section
      ref={ref}
      id={id}
      className={`transition-all duration-700 ${isInView ? visible : hidden} ${className}`}
    >
      {typeof children === "function" ? children(isInView) : children}
    </section>
  )
}
