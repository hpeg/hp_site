export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-2xl py-16 text-center">
      <h2 className="mb-2 text-2xl font-semibold">Get in Touch</h2>
      <p className="text-base">
        Feel free to reach out via{" "}
        <a
          href="mailto:hello@harrypegrum.com"
          className="text-primary underline"
        >
          hello@harrypegrum.com
        </a>
        . Find me on{" "}
        <a
          href="https://www.linkedin.com/in/harrypegrum/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          LinkedIn
        </a>{" "}
        or{" "}
        <a
          href="https://github.com/hpeg"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          GitHub
        </a>
        .
      </p>
    </section>
  )
}
