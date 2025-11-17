import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section className="py-6 md:py-10 " id="contact"> 
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Lets Work Together
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            If you like what you see and want to work together on your next
            project, feel free to reach out. I am always open to discussing new
            opportunities and creative ideas.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <a
              href="https://github.com/AmirezaMahmoudi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-14 w-14 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/amirreza-mahmoudi1381/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-14 w-14 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>

            <a
              href="mailto:amirrezamh03@gmail.com"
              className="flex items-center justify-center h-14 w-14 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
