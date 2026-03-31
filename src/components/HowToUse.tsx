"use client";

import { Download, MousePointerClick, PenTool, Play } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

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

export default function HowToUse() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-gray-50 py-24 sm:py-32" id="how-to-use">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#F47983]">
            Заавар
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Хэрхэн хэрэглэх вэ?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
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
            <video
              className="w-full h-full object-cover"
              src="https://www.youtube.com/watch?v=G3UjfzsMK88&list=RDG3UjfzsMK88&start_radio=1"
              controls
              autoPlay
            />
          )}
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-3 gap-y-16 lg:grid-cols-3 lg:gap-x-8 ">
            {steps.map((step, index) => (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex flex-col  items-center text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <step.icon
                    className="h-8 w-8 text-[#F47983]"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-semibold leading-7 text-gray-900 mb-4">
                  {step.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {step.description}
                </p>
                <img src="./tm.jpg" alt="" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
