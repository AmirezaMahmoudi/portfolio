import { Code2, Rocket, Users, Zap } from "lucide-react";
import Timeline from "./timeline";
import Skill from "./skill";
import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("About");

  return (
    <section className="py-24 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {t("sectionHeader")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              {t("subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                {t("whoIAmHeader")}
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t("paragraph1")}</p>
                <p>{t("paragraph2")}</p>
                <p>{t("paragraph3")}</p>
              </div>
            </div>

            <Skill />
          </div>

          <Timeline />
        </div>
      </div>
    </section>
  );
}
