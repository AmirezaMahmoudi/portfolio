import {
  ArrowRight,
  CircleChevronDown,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { Button } from "./ui/button";
import { useLocale, useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  const locale = useLocale();

  return (
    <main className="h-screen from-foreground via-foreground to-primary/10">
      <div className="container mx-auto px-4 py-20 md:py-36">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl  font-bold tracking-tight text-balance text-foreground">
                {t("hi")}{" "}
                <span className="bg-linear-to-r from-primary via-primary to-chart-2 bg-clip-text text-transparent">
                  {t("name")}
                </span>
                {locale === "fa" && ` ${t("am")}`}
              </h1>
              <p className="text-2xl md:text-3xl text- text-foreground font-medium">
                {t("title")}
              </p>
            </div>

            <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-2xl text-pretty">
              {t("description")}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gap-2 group">
                {t("viewWork")}
              </Button>
              <Button size="lg" variant="outline" className="gap-2 ">
                <Mail className="h-4 w-4" />
                {t("getInTouch")}
              </Button>
            </div>

            <div className="flex gap-4 pt-8">
              <a
                href="https://github.com/AmirezaMahmoudi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-12 w-12 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/amirreza-mahmoudi1381/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-12 w-12 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:amirrezamh03@gmail.com"
                className="flex items-center justify-center h-12 w-12 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-16 w-full flex  justify-center items-center animate-bounce">
        <CircleChevronDown size="32" className=" text-primary" />
      </div>
    </main>
  );
}
