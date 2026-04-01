"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

typeof window !== "undefined";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // ⭐ stars
  const stars = useMemo(() => {
    return Array.from({ length: 80 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 0.5,
      speed: Math.random() * 0.03 + 0.01,
    }));
  }, []);

  return (
    <div className="relative isolate pt-14 overflow-hidden bg-white dark:bg-black transition-colors">
      {/* ⭐ STARS BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {stars.map((star, i) => {
          const offsetX = (mousePos.x - window.innerWidth / 2) * star.speed;
          const offsetY = (mousePos.y - window.innerHeight / 2) * star.speed;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white dark:bg-yellow-300"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                width: star.size,
                height: star.size,
                top: `${star.y}%`,
                left: `${star.x}%`,
                transform: `translate(${offsetX}px, ${offsetY}px)`,
              }}
            />
          );
        })}
      </div>

      {/* 🌈 TOP GRADIENT */}
      <div className="absolute inset-x-0 -top-40 -z-10 blur-3xl">
        <div className="bg-gradient-to-tr from-pink-500/20 to-cyan-500/20 w-full h-[400px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-6xl">
                Монгол хэлний зөв бичгийн алдаа шалгагч
              </h1>

              <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
                Таны бичсэн текстэн дэх алдааг хоромхон зуурт илрүүлж, засах
                санал болгоно.
              </p>

              <div className="mt-10 flex justify-center gap-6">
                <a className="bg-pink-500 px-6 py-3 rounded-full text-white flex gap-2 hover:scale-105 transition">
                  <Globe className="w-5 h-5" />
                  Chrome-д нэмэх
                </a>

                <a className="text-gray-900 dark:text-white flex gap-1">
                  Хэрхэн ажилладаг <ArrowRight />
                </a>
              </div>
            </motion.div>
          </div>

          {/* MOCKUP */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16"
          >
            <div className="rounded-xl bg-gray-100 dark:bg-white/10 p-2">
              <div className="rounded-md bg-white dark:bg-black shadow-xl overflow-hidden">
                {/* browser bar */}
                <div className="bg-gray-100 dark:bg-white/10 px-4 py-3 flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>

                {/* text */}
                <div className="p-8 text-gray-800 dark:text-gray-200">
                  Өнөөдөр цаг агаар маш{" "}
                  <span className="underline decoration-red-500">сайханн</span>{" "}
                  байна...
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
