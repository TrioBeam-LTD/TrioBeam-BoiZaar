import CallToAction from "@/components/Custom/CallToAction";
import CategorySlider from "@/components/Custom/CategorySlider";
import FeatureSection from "@/components/Custom/FeatureSection";
import HeroSection from "@/components/Custom/HeroSection";
import RecentBook from "@/components/Custom/RecentBook";

function HomePageClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section - Full Width */}
      <HeroSection />

      {/* Main Content with Left Sidebar Layout */}
      <div className=" sm:px-6 lg:px-6 py-12 lg:py-12">
        <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12">
          {/* Left Sidebar - All AdSense (Hidden on mobile) */}
          {/* <div className="hidden lg:block lg:w-80 xl:w-96 flex-shrink-0">
            <div className="sticky top-8 space-y-8">
              
              <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden transform hover:-translate-y-1">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-3">
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mr-2">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-white tracking-wide">
                      স্পন্সর্ড বিজ্ঞাপন
                    </span>
                  </div>
                </div>
                <div className="p-6 min-h-[300px] bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
                 
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-30"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-100 rounded-full translate-y-12 -translate-x-12 opacity-40"></div>

                  <div className="text-center relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-gray-700 mb-3">
                      প্রিমিয়াম বিজ্ঞাপন স্থান
                    </p>
                    <div className="text-sm text-gray-500 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                      [AdSense 300x250]
                    </div>
                  </div>
                </div>
              </div>

             
              <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden transform hover:-translate-y-1">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-3">
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mr-2">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-white tracking-wide">
                      প্রচারণা
                    </span>
                  </div>
                </div>
                <div className="p-6 min-h-[250px] bg-gradient-to-br from-gray-50 to-emerald-50 flex items-center justify-center relative overflow-hidden">
               
                  <div className="absolute top-0 left-0 w-28 h-28 bg-emerald-100 rounded-full -translate-y-14 -translate-x-14 opacity-30"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-teal-100 rounded-full translate-y-10 translate-x-10 opacity-40"></div>

                  <div className="text-center relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-gray-700 mb-3">
                      বিশেষ অফার স্থান
                    </p>
                    <div className="text-sm text-gray-500 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                      [AdSense 300x200]
                    </div>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden transform hover:-translate-y-1">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 px-4 py-3">
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mr-2">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-white tracking-wide">
                      বিশেষ স্পন্সর
                    </span>
                  </div>
                </div>
                <div className="p-6 min-h-[300px] bg-gradient-to-br from-gray-50 to-purple-50 flex items-center justify-center relative overflow-hidden">
            
                  <div className="absolute top-0 right-0 w-30 h-30 bg-purple-100 rounded-full -translate-y-15 translate-x-15 opacity-30"></div>
                  <div className="absolute bottom-0 left-0 w-22 h-22 bg-pink-100 rounded-full translate-y-11 -translate-x-11 opacity-40"></div>

                  <div className="text-center relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-gray-700 mb-3">
                      এক্সক্লুসিভ বিজ্ঞাপন
                    </p>
                    <div className="text-sm text-gray-500 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                      [AdSense 300x250]
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 shadow-lg border border-blue-200/50">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                    আমাদের সাপোর্ট করুন
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    বিজ্ঞাপন দেখে আমাদের ফ্রি সেবা চালু রাখতে সাহায্য করুন।
                    আপনার সাপোর্টেই আমরা এগিয়ে চলি! 💝
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          {/* Main Content Area */}
          <div className="flex-1 container mx-auto bg-white rounded-4xl">
            <CategorySlider />

            <FeatureSection />

            <RecentBook />
            {/* Mobile AdSense - Only visible on mobile */}
            <div className="lg:hidden">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-3">
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mr-2">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-white tracking-wide">
                      মোবাইল বিজ্ঞাপন
                    </span>
                  </div>
                </div>
                <div className="p-6 min-h-[150px] bg-gradient-to-br from-gray-50 to-amber-50 flex items-center justify-center relative overflow-hidden">
                  {/* Decorative background elements */}
                  <div className="absolute top-0 left-0 w-24 h-24 bg-amber-100 rounded-full -translate-y-12 -translate-x-12 opacity-30"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-orange-100 rounded-full translate-y-10 translate-x-10 opacity-40"></div>

                  <div className="text-center relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-gray-700 mb-3">
                      মোবাইল বিজ্ঞাপন স্থান
                    </p>
                    <div className="text-sm text-gray-500 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                      [AdSense Mobile 320x100]
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 lg:mt-24">
        <CallToAction />
      </div>

      {/* Bottom Support Message */}
      <section className="py-8 bg-gradient-to-r from-slate-100 via-blue-100 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              আপনার সাপোর্টেই আমরা এগিয়ে চলি
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed max-w-2xl mx-auto">
              বিজ্ঞাপনের মাধ্যমে আমরা আমাদের ফ্রি সেবা চালিয়ে যেতে পারি। আপনার
              সাপোর্টের জন্য আমাদের হৃদয় থেকে ধন্যবাদ! 💝
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePageClient;
