"use client";

import { motion } from "framer-motion";
import { Plus, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full blur-md"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full blur-xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            আপনার পুরানো বই বিক্রি করুন
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            মাত্র কয়েক মিনিটেই আপনার বই বিক্রির জন্য পোস্ট করুন এবং সহজেই
            ক্রেতা খুঁজে নিন
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/post-book" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto cursor-pointer bg-white text-blue-600 hover:bg-gray-50 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold px-8 py-3"
              >
                <Plus className="w-5 h-5 mr-2" />
                বই বিক্রি করুন
              </Button>
            </Link>
            <Link href="/books" className="w-full sm:w-auto ">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 cursor-pointer border-white text-black hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-200 font-semibold px-8 py-3 backdrop-blur-sm"
              >
                <Search className="w-5 h-5 mr-2" />
                বই খুঁজুন
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CallToAction;
