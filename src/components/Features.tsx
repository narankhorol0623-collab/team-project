"use client";
import { CheckCircle, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    name: "Өндөр нарийвчлал",
    description:
      "Хиймэл оюун ухаанд суурилсан технологиор таны бичвэрийн утга санаа, дүрмийн алдааг нарийн илрүүлнэ.",
    icon: Sparkles,
  },
  {
    name: "Цаг хэмнэнэ",
    description:
      "Урт хэмжээний текстийг хэдхэн секундын дотор шалгаж, засах хувилбаруудыг санал болгоно.",
    icon: Clock,
  },
  {
    name: "Хэрэглэхэд хялбар",
    description:
      "Facebook, Gmail, Twitter зэрэг таны өдөр тутам ашигладаг бүх вэбсайт дээр шууд ажиллана.",
    icon: CheckCircle,
  },
];

export default function Features() {
  return (
    <div
      className="relative bg-white dark:bg-black py-24 sm:py-32 overflow-hidden transition-colors"
      id="features"
    >

      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-cyan-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold text-[#F47983]">
            Давуу талууд
          </h2>

          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Яагаад манай Extension-ийг сонгох хэрэгтэй вэ?
          </p>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Бид таны өдөр тутмын бичгийн харилцааг илүү мэргэжлийн, алдаагүй,
            ойлгомжтой болгоход туслах болно.
          </p>
        </div>


        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <dl className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group rounded-2xl p-6 bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 hover:scale-105 hover:shadow-xl transition-all"
              >

                <div className="mb-4 flex items-center gap-3">
                  <feature.icon className="h-6 w-6 text-[#F47983] group-hover:scale-110 transition" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {feature.name}
                  </h3>
                </div>


                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
