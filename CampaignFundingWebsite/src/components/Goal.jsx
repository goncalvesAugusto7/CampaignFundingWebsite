import { useTranslation } from "react-i18next";

export function Goal() {
  const { t } = useTranslation();
  const total = 11460;
  const amount = 1012.39;
  const progress = (amount * 100) / total;
  return (
    <section className="bg-white text-secondary py-20 px-6 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          {" "}
          {t("goal_title")}
        </h2>

        <p className="mt-4 text-lg opacity-80">
          {t("goal_text_pt1")}
          <span className="text-primary font-semibold">
            {t("goal_text_value")}
          </span>
          {t("goal_text_pt2")}
        </p>

        {/* Barra de progresso */}
        <div className="mt-8">
          <div className="w-full bg-secondary/10 rounded-full h-4 overflow-hidden">
            <div
              className="bg-primary h-4 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p className="mt-3 text-sm opacity-70">
            {progress.toFixed(2)}
            {t("goal_progress")}
          </p>
        </div>
      </div>
    </section>
  );
}
