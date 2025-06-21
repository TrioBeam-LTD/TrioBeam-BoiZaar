import { BookOpen } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

function Navber() {
  return (
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">
                  বইবিক্রয়.কম
                </span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/books" className="text-gray-700 hover:text-blue-600">
                সব বই
              </Link>
              <Link
                href="/post-book"
                className="text-gray-700 hover:text-blue-600"
              >
                বই বিক্রি করুন
              </Link>
              <Link href="/chat" className="text-gray-700 hover:text-blue-600">
                চ্যাট
              </Link>
            </nav>

            <div className="flex items-center space-x-3">
              <Link href="/auth/login">
                <Button variant="outline" size="sm">
                  লগইন
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  রেজিস্টার
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
  );
}

export default Navber;
