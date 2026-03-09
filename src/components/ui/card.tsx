import * as React from "react"

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-border bg-card p-6 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
