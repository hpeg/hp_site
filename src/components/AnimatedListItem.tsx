import * as React from "react"

type AnimatedListItemProps = {
  index: number
  isInView: boolean
  children: React.ReactNode
  className?: string
}

export function AnimatedListItem({
  index,
  isInView,
  children,
  className = "",
}: AnimatedListItemProps) {
  return (
    <div
      className={`transition-all duration-700 ${
        isInView ? "stagger-item" : "translate-y-4 opacity-0"
      } ${className}`}
      style={{ animationDelay: isInView ? `${index * 0.1}s` : "0s" }}
    >
      {children}
    </div>
  )
}
