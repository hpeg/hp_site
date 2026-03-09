import * as React from "react"

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode
  variant?: "default" | "secondary" | "outline"
}

export function Badge({
  children,
  variant = "default",
  className,
  ...props
}: BadgeProps) {
  const variantClasses = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-border bg-background text-foreground",
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
