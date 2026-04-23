import { Trans, useTranslation } from "react-i18next";

export function Impact() {
  const { t } = useTranslation();
  return (
    <section className="bg-background text-secondary py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          {" "}
          {t("impact_title")}
        </h2>

        <p className="mt-6 text-lg opacity-80">{t("impact_p1")}</p>

        <p className="mt-4 text-lg opacity-80">{t("impact_p2")}</p>

        <p className="mt-6 text-lg opacity-80">
          <Trans
            i18nKey="impact_contact"
            components={[
              <a
                href="mailto:sostenes.soeiro@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:opacity-70 transition"
              />,
            ]}
          />
        </p>
      </div>
    </section>
  );
}
