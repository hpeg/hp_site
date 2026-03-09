import { About } from "@/components/About"
import { Contact } from "@/components/Contact"
import { Hero } from "@/components/Hero"
import { Skills } from "@/components/Skills"
import { ThemeToggle } from "@/components/ThemeToggle"

export function App() {
  return (
    <div className="flex flex-col items-center px-6">
      <nav className="flex w-full items-center justify-between px-4 py-4 text-sm">
        <div className="flex gap-6">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#skills" className="hover:underline">
            Skills
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>
        <ThemeToggle />
      </nav>
      <Hero />
      <About />
      <Skills />
      <Contact />
      <footer className="py-8 text-xs text-muted-foreground">
        <p>This is a footer.</p>
      </footer>
    </div>
  )
}

export default App
