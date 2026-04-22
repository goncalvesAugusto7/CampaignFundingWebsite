import { Trans, useTranslation } from "react-i18next";

export function AboutResearch() {
  const { t } = useTranslation();
  return (
    <section id="aboutResearch" className="bg-white text-secondary py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          {t("aboutResearch_title")}
        </h2>

        <p className="mt-6 text-lg opacity-80">
          <Trans
            i18nKey="aboutResearch_p1"
            components={[
              <a
                href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6313138"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:opacity-70 underline transition"
              />,
            ]}
          />
        </p>

        <p className="mt-4 text-lg opacity-80">{t("aboutResearch_p2")}</p>
      </div>
    </section>
  );
}
