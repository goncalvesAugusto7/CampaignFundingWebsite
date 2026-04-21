import { useTranslation } from "react-i18next";

export function FinalCTA() {
  const { t } = useTranslation();
  return (
    <section className="py-20 px-6 text-center">
      <p className="max-w-2xl mx-auto text-gray-600">{t("donate_footer")}</p>
    </section>
  );
}
