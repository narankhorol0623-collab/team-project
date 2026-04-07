"use client";

import { Download, MousePointerClick, PenTool, Play } from "lucide-react";
import { motion } from "motion/react";
import { a, image } from "motion/react-client";
import { useEffect, useMemo, useState } from "react";
import YouTube from "react-youtube";

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
                src="nuur.png"
                alt="Video"
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity group-hover:opacity-40"
                referrerPolicy="no-referrer"
              />
              <button className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-bg-[#F47983] text-white shadow-lg backdrop-blur-sm transition-all hover:bg-blue-500 group-hover:scale-110">
                <Play className="h-8 w-8 ml-1" fill="currentColor" />
              </button>
              <div className="absolute bottom-6 left-8 z-10">
                <p className="text-white font-semibold text-lg drop-shadow-md">
                  ШаЛгАя хэрхэн ажилладаг вэ? (Заавар бичлэг)
                </p>
              </div>
            </>
          ) : (
            <YouTube
              videoId="kwPkJqg64cs"
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
      </div>
    </div>
  );
}
