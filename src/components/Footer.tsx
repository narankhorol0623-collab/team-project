export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 transition-colors">
      <div className="mx-auto max-w-7xl md:flex md:items-center md:justify-between pb-6">
        <div className="flex justify-center pt-6 space-x-6 md:order-2">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="">Youtube</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="">Facebook</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="">Twitter</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="">GitHub</span>
          </a>
        </div>
        <div className="md:order-1 flex items-center justify-center mt-4 md:mt-7 md:justify-start">
          <p className="text-center md:text-xl text-[0.625rem] leading-5 text-gray-500 p-6 ">
            &copy; 2026 ШаЛгАя - Монгол хэлний зөв бичгийн алдаа шалгагч.
          </p>
        </div>
      </div>
    </footer>
  );
}
