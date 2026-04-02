// "use client";

// import { motion } from "motion/react";
// import { ArrowRight, Globe } from "lucide-react";

// export default function Hero() {
//   return (
//     <div className="relative isolate pt-14 overflow-hidden bg-white">
//       <div
//         className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//         aria-hidden="true"
//       >
//         <div
//           className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//           style={{
//             clipPath:
//               "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//           }}
//         />
//       </div>
//       <div className="py-24 sm:py-32 lg:pb-40">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
//                 Монгол хэлний зөв бичгийн алдаа шалгагч
//               </h1>
//               <p className="mt-6 text-lg leading-8 text-gray-600">
//                 Таны бичсэн текстэн дэх алдааг хоромхон зуурт илрүүлж, засах
//                 санал болгоно. Илүү хурдан, илүү зөв бичицгээе.
//               </p>
//               <div className="mt-10 flex items-center justify-center gap-x-6">
//                 <a
//                   href="#"
//                   className="rounded-full bg-[#F47983] px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#832028] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#832028] flex items-center gap-2 transition-all hover:scale-105"
//                 >
//                   <Globe className="w-5 h-5" />
//                   Chrome-д нэмэх — Үнэгүй
//                 </a>
//                 <a
//                   href="#how-to-use"
//                   className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-1 hover:text-[#832028] transition-colors"
//                 >
//                   Хэрхэн ажилладаг вэ <ArrowRight className="w-4 h-4" />
//                 </a>
//               </div>
//             </motion.div>
//           </div>
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="mt-16 flow-root sm:mt-24"
//           >
//             <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
//               <div className="rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10 overflow-hidden">
//                 {/* Mockup UI */}
//                 <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
//                   <div className="w-3 h-3 rounded-full bg-red-400"></div>
//                   <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
//                   <div className="w-3 h-3 rounded-full bg-green-400"></div>
//                   <div className="ml-4 bg-white px-3 py-1 rounded text-xs text-gray-500 flex-1 max-w-sm border border-gray-200">
//                     facebook.com
//                   </div>
//                 </div>
//                 <div className="p-8 sm:p-12 text-left">
//                   <div className="max-w-xl">
//                     <p className="text-lg text-gray-800 leading-relaxed font-sans">
//                       Өнөөдөр цаг агаар маш{" "}
//                       <span className="underline decoration-red-500 decoration-wavy decoration-2 relative group cursor-pointer">
//                         сайханн
//                         <span className="absolute bottom-full left-0 mb-2 hidden group-hover:block bg-white border border-gray-200 shadow-lg rounded-lg p-2 text-sm text-gray-700 whitespace-nowrap z-10">
//                           <span className="font-semibold text-blue-600 hover:bg-blue-50 px-2 py-1 rounded cursor-pointer">
//                             сайхан
//                           </span>
//                         </span>
//                       </span>{" "}
//                       байна. Бид найзуудаараа ууланд{" "}
//                       <span className="underline decoration-red-500 decoration-wavy decoration-2 relative group cursor-pointer">
//                         алхахаар
//                         <span className="absolute bottom-full left-0 mb-2 hidden group-hover:block bg-white border border-gray-200 shadow-lg rounded-lg p-2 text-sm text-gray-700 whitespace-nowrap z-10">
//                           <span className="font-semibold text-blue-600 hover:bg-blue-50 px-2 py-1 rounded cursor-pointer">
//                             алхахаар
//                           </span>
//                         </span>
//                       </span>{" "}
//                       явлаа.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//       <div
//         className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//         aria-hidden="true"
//       >
//         <div
//           className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//           style={{
//             clipPath:
//               "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//           }}
//         />
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Globe } from "lucide-react";
import { useRef } from "react";

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
      size: Math.random() * 2 + 0.5,
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
