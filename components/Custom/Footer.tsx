import { BookOpen } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">বইবিক্রয়.কম</span>
            </div>
            <p className="text-gray-400">
              বাংলাদেশের সবচেয়ে বিশ্বস্ত একাডেমিক বই মার্কেটপ্লেস
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">দ্রুত লিংক</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/books" className="hover:text-white">
                  সব বই
                </Link>
              </li>
              <li>
                <Link href="/post-book" className="hover:text-white">
                  বই বিক্রি করুন
                </Link>
              </li>
              <li>
                <Link href="/chat" className="hover:text-white">
                  চ্যাট
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">ক্যাটেগরি</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/books?class=HSC" className="hover:text-white">
                  HSC বই
                </Link>
              </li>
              <li>
                <Link href="/books?class=SSC" className="hover:text-white">
                  SSC বই
                </Link>
              </li>
              <li>
                <Link href="/books?class=Honours" className="hover:text-white">
                  অনার্স বই
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">যোগাযোগ</h3>
            <ul className="space-y-2 text-gray-400">
              <li>ইমেইল: info@boibikroy.com</li>
              <li>ফোন: ০১৭১২৩৪৫৬৭৮</li>
              <li>ঠিকানা: ঢাকা, বাংলাদেশ</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; ২০২৪ বইবিক্রয়.কম। সকল অধিকার সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
