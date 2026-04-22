import { Trans, useTranslation } from "react-i18next";

export function WhoWeAre() {
  const { t } = useTranslation();
  return (
    <section id="whoWeAre" className="bg-background text-secondary py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          {t("whoWeAre_title")}
        </h2>

        <p className="mt-6 text-lg opacity-80">
          <Trans
            i18nKey="whoWeAre_p1"
            components={[
              <a
                href="http://lattes.cnpq.br/2580162312562951"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:opacity-70 underline transition"
              />,
              <a
                href="http://lattes.cnpq.br/2317130869085519"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:opacity-70 underline transition"
              />,
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:opacity-70 underline transition"
              />,
            ]}
          />
        </p>

        <p className="mt-4 text-lg opacity-80">{t("whoWeAre_p2")} </p>
      </div>
    </section>
  );
}
