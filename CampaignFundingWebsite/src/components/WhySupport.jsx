import { useTranslation } from "react-i18next";

export function WhySupport() {
  const { t } = useTranslation();
  return (
    <section className="bg-white text-secondary py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          {" "}
          {t("whySupport_title")}
        </h2>

        <p className="mt-6 text-lg opacity-80">{t("whySupport_p1")}</p>

        <p className="mt-4 text-lg opacity-80">{t("whySupport_p2")}</p>

        <p className="mt-4 text-lg opacity-80">{t("whySupport_p3")}</p>
      </div>
    </section>
  );
}
