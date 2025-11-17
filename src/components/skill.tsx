import { Code2, Rocket, Users, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

const Skill = () => {
  const t = useTranslations("Skill");

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-foreground"> {t("header")}</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-6 rounded-lg bg-muted/50 border border-border">
          <Code2 className="h-8 w-8 mb-3 text-primary" />
          <h4 className="font-semibold mb-2 text-foreground">
            {t("cleanCodeTitle")}
          </h4>
          <p className="text-sm text-muted-foreground">
            {t("cleanCodeDescription")}
          </p>
        </div>
        <div className="p-6 rounded-lg bg-muted/50 border border-border">
          <Zap className="h-8 w-8 mb-3 text-primary" />
          <h4 className="font-semibold mb-2 text-foreground">
            {t("performanceTitle")}
          </h4>
          <p className="text-sm text-muted-foreground">
            {t("performanceDescription")}
          </p>
        </div>
        <div className="p-6 rounded-lg bg-muted/50 border border-border">
          <Rocket className="h-8 w-8 mb-3 text-primary" />
          <h4 className="font-semibold mb-2 text-foreground">
            {" "}
            {t("modernStackTitle")}
          </h4>
          <p className="text-sm text-muted-foreground">
            {t("modernStackDescription")}
          </p>
        </div>
        <div className="p-6 rounded-lg bg-muted/50 border border-border">
          <Users className="h-8 w-8 mb-3 text-primary" />
          <h4 className="font-semibold mb-2 text-foreground">
            {t("userFocusTitle")}
          </h4>
          <p className="text-sm text-muted-foreground">
            {t("userFocusDescription")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
