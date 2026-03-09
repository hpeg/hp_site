import * as React from "react"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggle = React.useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark")
  }, [theme, setTheme])

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="rounded p-2 hover:bg-muted focus:ring-2 focus:ring-ring focus:outline-none"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  )
}
