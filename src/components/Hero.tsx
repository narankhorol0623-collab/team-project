"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Globe } from "lucide-react";
import { useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group";

const FadeInWhenVisible = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

type Star = { x: number; y: number; size: number; speed: number };

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [stars, setStars] = useState<Star[]>([]); 

  useEffect(() => {

    setStars(
      Array.from({ length: 80 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 15 + 0.5,
        speed: Math.random() * 0.03 + 0.01,
      })),
    );

    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    const move = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative isolate pt-14 overflow-hidden bg-white dark:bg-black transition-colors">

      <div className="absolute inset-0 z-0">
        {stars.map((star, i) => {
          const offsetX = (mousePos.x - windowSize.width / 2) * star.speed;
          const offsetY = (mousePos.y - windowSize.height / 2) * star.speed;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-pink-400 dark:bg-pink-300"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.02 }}
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


      <div className="absolute inset-x-0 -top-40 -z-10 blur-3xl">
        <div className="bg-linear-to-tr from-pink-500/20 to-cyan-500/20 w-full h-100" />
      </div>
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
                Таны бичсэн текстэн дэх алдааг хоромхон зуурт илрүүлж, засаж
                санал болгоно.
              </p>
              <div className="mt-10 flex justify-center items-center gap-6">
                <a className="bg-[#F47983] px-6 py-3 rounded-full text-white flex gap-2 hover:scale-105 transition">
                  <Globe className="w-5 h-5" />
                  Chrome-д нэмэх
                </a>
                <a
                  href="#how-to-use transition-colors "
                  className="bg-[#F47983] px-6 py-3 rounded-full text-white flex gap-2 hover:scale-105 transition"
                >
                  Хэрхэн ажилладаг <ArrowRight />
                </a>
              </div>
            </motion.div>
          </div>


          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16"
          >
            <div className="rounded-xl bg-gray-100 dark:bg-white/10 p-2 mb-15">
              <div className="rounded-md bg-white dark:bg-black shadow-xl overflow-hidden">
                <div className="bg-gray-100 dark:bg-white/10 px-4 py-3 flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>
                <div className="p-8 sm:p-12 text-left">
                  <div className="max-w-xl">
                    <div className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed font-sans">
                      Өнөөдөр цаг агаар маш{" "}
                      <span className="underline decoration-red-500 decoration-wavy decoration-2 relative group cursor-pointer">
                        сайханн
                        <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block bg-white border border-gray-200 shadow-lg rounded-lg p-2 text-sm text-gray-700 whitespace-nowrap z-10">
                          <div className="font-semibold text-red-600 hover:bg-blue-50 px-2 py-1 rounded cursor-pointer">
                            сайхан
                          </div>
                        </div>
                      </span>{" "}
                      байна. Бид найзуудаараа ууланд{" "}
                      <span className="underline decoration-red-500 decoration-wavy decoration-2 relative group cursor-pointer">
                        алхахаар
                        <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block bg-white border border-gray-200 shadow-lg rounded-lg p-2 text-sm text-gray-700 whitespace-nowrap z-10">
                          <div className="font-semibold text-red-600 hover:bg-blue-50 px-2 py-1 rounded cursor-pointer">
                            алхахаар
                          </div>
                        </div>
                      </span>{" "}
                      явлаа.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-gray-100 dark:bg-white/10 p-2">
              <div className="rounded-md bg-white dark:bg-black shadow-xl overflow-hidden">
                <div className="bg-gray-100 dark:bg-white/10 px-4 py-3 flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>
                <div className="p-8 sm:p-12 text-left text-lg">
                  <InputGroup className="flex text-2xl border-0">
                    <TextareaAutosize
                      data-slot="input-group-control"
                      className="flex field-sizing-content min-h-16 w-full resize-none rounded-md  px-3 py-2.5 bg-white dark:bg-black text-sm transition-[color,box-shadow] outline-none md:text-xl"
                      placeholder="Энд бичиж бидний Extension-ийг шалгаж үзээрэй."
                    />
                  </InputGroup>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
