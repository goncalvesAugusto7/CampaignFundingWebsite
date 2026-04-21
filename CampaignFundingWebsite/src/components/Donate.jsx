import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Donate() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  // 🔑 sua chave PIX
  const pixKey = "8746c11e-100c-4076-8810-f2a185b4da6e";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="donate"
      className="bg-white text-secondary py-20 px-6 text-center"
    >
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          {" "}
          {t("donate_title")}
        </h2>

        <p className="mt-4 text-lg opacity-80">{t("donate_subtitle")}</p>

        {/* 🧾 QR CODE (IMAGEM) */}
        <div className="mt-10 flex justify-center">
          <img
            src="/pix-qrcode.png" // coloque na pasta public/
            alt="QR Code PIX"
            className="w-48 h-48 rounded-xl border border-secondary/10 shadow-sm"
          />
        </div>

        {/* 🔘 BOTÃO COPIAR */}
        <button
          onClick={handleCopy}
          className="mt-8 bg-primary text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
        >
          {copied ? "✅ " + t("donate_copied") : t("donate_copy")}
        </button>

        {/* 🔑 chave visível */}
        <p className="mt-4 text-sm opacity-60 break-all">{pixKey}</p>
      </div>
    </section>
  );
}
