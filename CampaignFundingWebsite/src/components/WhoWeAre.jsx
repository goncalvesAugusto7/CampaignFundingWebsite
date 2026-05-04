import { Trans, useTranslation } from "react-i18next";
import { useRef, useState } from "react";

export function WhoWeAre() {
  const { t } = useTranslation();

  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);

  const handlePlay = () => {
    setStarted(true);
    videoRef.current.play();
  };

  return (
    <section id="whoWeAre" className="bg-background text-secondary py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 📝 TEXTO */}
          <div className="text-center md:text-left">
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
                    href="http://lattes.cnpq.br/1779289943235667"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:opacity-70 underline transition"
                  />,
                ]}
              />
            </p>

            <p className="mt-4 text-lg opacity-80">{t("whoWeAre_p2")}</p>
          </div>

          <div className="flex justify-center">
            <div className="relative h-[50vh] md:h-[60vh] aspect-[9/16]">
              <video
                ref={videoRef}
                controls={started}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              >
                <source src="/presentationVideo.mp4" type="video/mp4" />
              </video>

              {!started && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-2xl"
                >
                  <div className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold">
                    ▶
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
