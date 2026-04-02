"use client";

import { Download, MousePointerClick, PenTool, Play } from "lucide-react";
import { motion } from "motion/react";
import { a, image } from "motion/react-client";
import { useEffect, useMemo, useState } from "react";
import YouTube from "react-youtube";

const steps = [
  {
    name: "1. Татаж авах",
    description:
      'Chrome Web Store руу орж "Chrome-д нэмэх" товчийг дарж өргөтгөлийг суулгана.',
    icon: Download,
    image: "./images.jpeg",
  },
  {
    name: "2. Идэвхжүүлэх",
    description:
      "Хөтчийнхөө баруун дээд буланд байрлах өргөтгөлийн дүрс дээр дарж идэвхжүүлнэ.",
    icon: MousePointerClick,
    image: "./neg.png",
  },
  {
    name: "3. Бичиж эхлэх",
    description:
      "Дурын вэбсайт дээр бичиж эхлэхэд алдаатай үгийг улаанаар зурж, засах саналыг харуулна.",
    icon: PenTool,
    image: "./Tm.jpg",
  },
];

export default function HowToUse() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const match = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(match.matches);
    const listener = (e: MediaQueryListEvent) => setIsDark(e.matches);
    match.addEventListener("change", listener);
    return () => match.removeEventListener("change", listener);
  }, []);

  // subtle floating animation for icons
  const floatVariants = useMemo(
    () => ({
      animate: {
        y: [0, -5, 0],
        transition: { yoyo: Infinity, duration: 2 },
      },
    }),
    [],
  );
  return (
    <div
      className="bg-gray-50 dark:bg-black py-24 sm:py-32"
      id="how-to-use transition-colors"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl lg:text-center ">
          <h2 className="text-base font-semibold leading-7 text-[#F47983] ">
            Заавар
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Хэрхэн хэрэглэх вэ?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ердөө 3-хан алхмаар таны бичвэр алдаагүй, төгс болно.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 max-w-4xl rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10 relative bg-gray-900 aspect-video flex items-center justify-center group cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          {!isPlaying ? (
            <>
              <img
                src="https://picsum.photos/seed/typing/1920/"
                alt="Video"
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity group-hover:opacity-40"
                referrerPolicy="no-referrer"
              />
              <button className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-bg-[#F47983] text-white shadow-lg backdrop-blur-sm transition-all hover:bg-blue-500 group-hover:scale-110">
                <Play className="h-8 w-8 ml-1" fill="currentColor" />
              </button>
              <div className="absolute bottom-6 left-8 z-10">
                <p className="text-white font-semibold text-lg drop-shadow-md">
                  ЗөвБич хэрхэн ажилладаг вэ? (Заавар бичлэг)
                </p>
              </div>
            </>
          ) : (
            <YouTube
              videoId="G3UjfzsMK88"
              opts={{
                width: "100%",
                height: "100%",
                playerVars: {
                  autoplay: 1,
                },
              }}
              className="w-full h-full"
            />
          )}
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="flex flex-col gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-row justify-between items-center gap-8 bg-white dark:bg-white/5 p-8 rounded-2xl shadow-sm   hover:scale-105 hover:shadow-xl transition-all ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse" // ← сондгой индекст зураг баруун талд
                }`}
              >
                {/* Зураг */}
                <div className="flex-shrink-0 w-84 h-48 rounded-xl overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.name}
                    className="w-full h-full object-cover"
                  />
                  <img
                    src="/Tm.jpg"
                    alt={step.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Агуулга */}
                <div className="flex flex-col items-start text-left gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full">
                    <step.icon
                      className="h-8 w-8 text-[#F47983]"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-semibold leading-7 text-gray-900 dark:text-white">
                    {step.name}
                  </h3>
                  <p className="text-base leading-7 text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
