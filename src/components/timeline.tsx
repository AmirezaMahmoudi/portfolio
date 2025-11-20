import { useTranslations } from "next-intl";

const Timeline = () => {
  const t = useTranslations("Timeline");

  return (
    <div className="py-20 md:py-32" id="experince">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-center mt-9">
        {t("header")}
      </h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="flex gap-6 group">
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center shrink-0">
              <div className="h-3 w-3 rounded-full bg-primary" />
            </div>
            <div className="w-0.5 h-full bg-border mt-2" />
          </div>
          <div className="pb-8 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h4 className="text-xl font-semibold text-foreground">
                {t("seniorTitle")}
              </h4>
              <span className="text-sm text-muted-foreground">
                {t("seniorTime")}
              </span>
            </div>
            <p className="text-primary font-medium mb-2">
              {t("seniorCompany")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              {t("seniorDescription")}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t("seniorDescription2")}
            </p>
          </div>
        </div>

        <div className="flex gap-6 group">
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-muted border-2 border-border flex items-center justify-center shrink-0">
              <div className="h-3 w-3 rounded-full bg-muted-foreground" />
            </div>
          </div>
          <div className="pb-8 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h4 className="text-xl font-semibold text-foreground">
                {t("developerTitle")}
              </h4>
              <span className="text-sm text-muted-foreground">
                {t("developerTime")}
              </span>
            </div>
            <p className="text-primary font-medium mb-2">
              {t("developerCompany")}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t("developerDescription")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
