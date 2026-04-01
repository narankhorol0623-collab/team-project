"use client";

import { Download, MousePointerClick, PenTool, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useMemo, useEffect } from "react";

const steps = [
  {
    name: "1. Татаж авах",
    description:
      'Chrome Web Store руу орж "Chrome-д нэмэх" товчийг дарж өргөтгөлийг суулгана.',
    icon: Download,
  },
  {
    name: "2. Идэвхжүүлэх",
    description:
      "Хөтчийнхөө баруун дээд буланд байрлах өргөтгөлийн дүрс дээр дарж идэвхжүүлнэ.",
    icon: MousePointerClick,
  },
  {
    name: "3. Бичиж эхлэх",
    description:
      "Дурын вэбсайт дээр бичиж эхлэхэд алдаатай үгийг улаанаар зурж, засах саналыг харуулна.",
    icon: PenTool,
  },
];

export default function MotionHowToUse() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Detect dark mode
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
    <div className={`${isDark ? "dark:bg-black" : "bg-gray-0"} py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#F47983]">
            Заавар
          </h2>
          <p
            className={`${isDark ? "text-white" : "text-gray-900"} mt-2 text-3xl font-bold tracking-tight sm:text-4xl`}
          >
            Хэрхэн хэрэглэх вэ?
          </p>
          <p
            className={`${isDark ? "text-gray-300" : "text-gray-600"} mt-6 text-lg leading-8`}
          >
            Ердөө 3-хан алхмаар таны бичвэр алдаагүй, төгс болно.
          </p>
        </div>

        {/* Video Section */}
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
                alt="Video thumbnail"
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity group-hover:opacity-40"
                referrerPolicy="no-referrer"
              />
              <button className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#F47983] text-white shadow-lg backdrop-blur-sm transition-all hover:scale-110">
                <Play className="h-8 w-8 ml-1" fill="currentColor" />
              </button>
              <div className="absolute bottom-6 left-8 z-10">
                <p className="text-white font-semibold text-lg drop-shadow-md">
                  ЗөвБич хэрхэн ажилладаг вэ? (Заавар бичлэг)
                </p>
              </div>
            </>
          ) : (
            <video
              className="w-full h-full object-cover"
              src="https://www.youtube.com/watch?v=G3UjfzsMK88&list=RDG3UjfzsMK88&start_radio=1"
              controls
              autoPlay
            />
          )}
        </motion.div>

        {/* Steps */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, scale: 0.9, y: 20, rotate: -1 }}
                whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"} relative flex flex-col items-center text-center p-8 rounded-2xl shadow-sm cursor-pointer`}
              >
                <motion.div
                  className={`${isDark ? "bg-gray-700" : "bg-blue-100"} mb-6 flex h-16 w-16 items-center justify-center rounded-full`}
                  variants={floatVariants}
                  animate="animate"
                >
                  <step.icon className="h-8 w-8 text-[#F47983]" />
                </motion.div>
                <h3
                  className={`${isDark ? "text-white" : "text-gray-900"} text-xl font-semibold leading-7 mb-4`}
                >
                  {step.name}
                </h3>
                <p
                  className={`${isDark ? "text-gray-300" : "text-gray-600"} text-base leading-7`}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
