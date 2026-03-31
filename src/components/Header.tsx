"use client";

import { useState } from "react";
import { Menu, X, SpellCheck } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">ЗөвБич</span>
            <div className="bg-[#F47983] p-2 rounded-lg">
              <SpellCheck className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">ЗөвБич</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Үндсэн цэс нээх</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="#features"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#832028] transition-colors"
          >
            Давуу тал
          </a>
          <a
            href="#how-to-use"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#832028] transition-colors"
          >
            Хэрхэн хэрэглэх вэ?
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#832028] transition-colors"
          >
            Тусламж
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 items-center">
          {/* <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
          >
            Нэвтрэх
          </a> */}
          <a
            href="#"
            className="rounded-full bg-[#F47983] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#832028] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
          >
            Татаж авах
          </a>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 z-50 bg-gray-900/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
                <span className="sr-only">ЗөвБич</span>
                <div className="bg-[#F47983] p-2 rounded-lg">
                  <SpellCheck className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-xl text-gray-900">ЗөвБич</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Цэс хаах</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#features"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Давуу тал
                  </a>
                  <a
                    href="#how-to-use"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Хэрхэн хэрэглэх вэ?
                  </a>
                  <a
                    href="#"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Тусламж
                  </a>
                </div>
                <div className="py-6 space-y-4">
                  {/* <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Нэвтрэх
                  </a> */}
                  <a
                    href="#"
                    className="block rounded-full bg-[#F47983] px-3 py-2.5 text-center text-base font-semibold text-white shadow-sm hover:bg-[#832028]"
                  >
                    Татаж ав
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
