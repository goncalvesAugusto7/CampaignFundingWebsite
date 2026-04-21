import { Trans, useTranslation } from "react-i18next";

export function Conference() {
  const { t } = useTranslation();
  return (
    <section
      id="conference"
      className="bg-background text-secondary py-20 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          {" "}
          {t("conference_title")}
        </h2>

        <p className="mt-6 text-lg opacity-80">
          <Trans
            i18nKey="conference_p1"
            components={[
              <a
                href="https://celsbrazil.org.br/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:opacity-70 transition"
              />,
            ]}
          />
        </p>

        <p className="mt-4 text-lg opacity-80">{t("conference_p2")}</p>
      </div>
    </section>
  );
}
