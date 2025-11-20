import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/constants";
import { ExternalLink, Github } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Projects() {
  const t = useTranslations("Projects");

  return (
    <section className="py-20 md:py-32 bg-background" id="project">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            {t("title")}

            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("desc")}

            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 bg-card border-border pt-0"
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap justify-start gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button asChild variant="default" className="flex-1 gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        {t("github")}

                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 gap-2 bg-transparent"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {t("demo")}

                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
