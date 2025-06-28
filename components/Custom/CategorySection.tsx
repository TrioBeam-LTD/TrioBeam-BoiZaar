"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  BookOpen,
  Building,
  GraduationCap,
  School,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "HSC বই",
    icon: GraduationCap,
    count: 150,
    href: "/books?class=HSC",
    color: "bg-blue-500",
  },
  {
    title: "SSC বই",
    icon: School,
    count: 200,
    href: "/books?class=SSC",
    color: "bg-green-500",
  },
  {
    title: "অনার্স বই",
    icon: BookOpen,
    count: 300,
    href: "/books?class=Honours",
    color: "bg-purple-500",
  },
  {
    title: "মেডিকেল বই",
    icon: Building,
    count: 80,
    href: "/books?class=MBBS",
    color: "bg-red-500",
  },
  {
    title: "ইঞ্জিনিয়ারিং",
    icon: Building,
    count: 120,
    href: "/books?class=Engineering",
    color: "bg-orange-500",
  },
  {
    title: "BBA বই",
    icon: TrendingUp,
    count: 90,
    href: "/books?class=BBA",
    color: "bg-indigo-500",
  },
];

function CategorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            বই ক্যাটেগরি
          </h2>
          <p className="text-gray-600">আপনার প্রয়োজনীয় বই খুঁজে নিন</p>
        </div>
        <div className="grid sm:grid-clos-2 md:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-6">
          {categories.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={item.href}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="group cursor-pointer"
                >
                  <Card className="bg-white border border-gray-200 hover:shadow-md transition-shadow duration-200">
                    <CardContent className=" text-center">
                      <div
                        className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mx-auto mb-3`}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.count}+ বই</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
