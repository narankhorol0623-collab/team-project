"use client";
import { CheckCircle, Clock, Sparkles } from "lucide-react";
import { motion } from "motion/react";

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
    <div className="bg-white py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#F47983]">
            Давуу талууд
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Яагаад манай Extension-ийг сонгох хэрэгтэй вэ?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Бид таны өдөр тутмын бичгийн харилцааг илүү мэргэжлийн, алдаагүй,
            ойлгомжтой болгоход туслах болно.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none text-[#F47983]"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
