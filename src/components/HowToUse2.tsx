"use client";

import { Download, MousePointerClick, PenTool } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";

const steps = [
  {
    name: "1. Татаж авах",
    description:
      'Chrome Web Store руу орж "Chrome-д нэмэх" товчийг дарж өргөтгөлийг суулгана.',
    icon: Download,
    image: "tataj.png",
  },
  {
    name: "2. Идэвхжүүлэх",
    description:
      "Хөтчийнхөө баруун дээд буланд байрлах өргөтгөлийн дүрс дээр дарж идэвхжүүлнэ.",
    icon: MousePointerClick,
    image: "l.png",
  },
  {
    name: "3. Бичиж эхлэх",
    description:
      "Дурын вэбсайт дээр бичиж эхлэхэд алдаатай үгийг улаанаар зурж, засах саналыг харуулна.",
    icon: PenTool,
    image: "aldaa.png",
  },
];
const HowToUse2 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const match = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(match.matches);
    const listener = (e: MediaQueryListEvent) => setIsDark(e.matches);
    match.addEventListener("change", listener);
    return () => match.removeEventListener("change", listener);
  }, []);

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
      className="bg-gray-50 dark:bg-black flex items-center justify-center transition-colors"
      id="how-to-use transition-colors"
    >
      <div className="mx-auto max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none md:flex">
        <div className="flex flex-col gap-8 px-2 pb-15 rounded-2xl shadow-xl lg:p-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col justify-between items-center gap-8 bg-white dark:bg-white/5 p-8 rounded-2xl shadow-sm hover:scale-105 hover:shadow-xl transition-all ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >

              <div className="shrink-0 w-84 h-48 rounded-xl overflow-hidden">
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
  );
};

export default HowToUse2;
