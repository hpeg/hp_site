import { About } from "@/components/About"
import { Contact } from "@/components/Contact"
import { Hero } from "@/components/Hero"
import { Skills } from "@/components/Skills"
import { Experience } from "@/components/Experience"
import { Education } from "@/components/Education"
import { Stats } from "@/components/Stats"
import { ThemeToggle } from "@/components/ThemeToggle"
import { EXPERIENCES } from "@/data/experience"
import { EDUCATION } from "@/data/education"
import { STATS } from "@/data/stats"

export function App() {
  return (
    <div className="flex flex-col items-center px-6">
      <nav className="animate-slide-down sticky top-0 z-50 flex w-full items-center justify-between border-b border-border bg-background px-4 py-4 text-sm backdrop-blur-sm">
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
          <a href="#experience" className="hover:underline">
            Experience
          </a>
          <a href="#education" className="hover:underline">
            Education
          </a>
          <a href="#stats" className="hover:underline">
            Stats
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
      <Experience items={EXPERIENCES} />
      <Education items={EDUCATION} />
      <Stats metrics={STATS} />
      <Contact />
      <footer className="py-8 text-xs text-muted-foreground">
        <p>This is a footer.</p>
      </footer>
    </div>
  )
}

export default App
