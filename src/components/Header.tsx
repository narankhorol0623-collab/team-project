"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, SpellCheck, Moon, Sun } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md  border-black dark:border-black dark:text-white ">
      <nav className="flex items-center justify-between p-6 lg:px-8">
        {/* LOGO */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
            <div className="bg-[#F47983] p-2 rounded-lg">
              <SpellCheck className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900 dark:text-white">
              ЗөвБич
            </span>
          </a>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="#features"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#832028] dark:text-white transition-colors"
          >
            Давуу тал
          </a>
          <a
            href="#how-to-use transition-colors"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#832028] dark:text-white transition-colors"
          >
            Хэрхэн хэрэглэх вэ?
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-[#832028] transition-colors"
          >
            Тусламж
          </a>
        </div>

        <div className="flex items-center gap-3 pl-5 ">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur"
          >
            {dark ? <Sun className="text-white" /> : <Moon />}
          </button>

          <div className="flex lg:hidden">
            <button
              className="p-2.5 text-gray-700 dark:text-gray-200"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://chromewebstore.google.com/detail/grammarly-with-ghost/iakfoofepmfjafjepidembmheemidbdb"
            className="rounded-full bg-[#F47983] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#832028]"
          >
            Татаж авах
          </a>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 w-full bg-white dark:bg-black px-6 py-6 sm:max-w-sm">
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl text-gray-900 dark:text-white">
                ЗөвБич
              </span>

              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6 text-gray-700 dark:text-gray-200" />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <a className="block text-gray-900 dark:text-gray-200">
                Давуу тал
              </a>
              <a className="block text-gray-900 dark:text-gray-200">
                Хэрхэн хэрэглэх вэ?
              </a>
              <a className="block text-gray-900 dark:text-gray-200">Тусламж</a>

              <a className="block bg-[#F47983] text-white text-center py-2 rounded-full">
                Татаж ав
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
