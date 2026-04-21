import { useTranslation } from "react-i18next";

export function Costs() {
  const { t } = useTranslation();
  return (
    <section className="bg-background text-secondary py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          {t("costs_title")}
        </h2>

        <div className="mt-10 border border-secondary/10 rounded-2xl overflow-hidden bg-white">
          <div className="grid grid-cols-2 p-4 border-b border-secondary/10 font-semibold">
            <span>{t("costs_item")}</span>
            <span className="text-right">{t("costs_value")}</span>
          </div>

          {[
            [t("costs_flights"), "$X"],
            [t("costs_accommodation"), "$X"],
            [t("costs_registration"), "$X"],
            [t("costs_meals"), "$X"],
          ].map(([item, cost]) => (
            <div
              key={item}
              className="grid grid-cols-2 p-4 border-b border-secondary/10 last:border-0"
            >
              <span className="opacity-80">{item}</span>
              <span className="text-right">{cost}</span>
            </div>
          ))}

          {/* Total destacado */}
          <div className="grid grid-cols-2 p-4 bg-primary/10 font-semibold">
            <span>{t("costs_total")}</span>
            <span className="text-right">$X</span>
          </div>
        </div>
      </div>
    </section>
  );
}
