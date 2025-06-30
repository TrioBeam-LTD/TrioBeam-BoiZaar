"use client";

import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useBookStore } from "@/lib/store";
import ProductCard from "./Card";

function FeatureSection() {
  const { books, featuredBooks } = useBookStore();
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-between mb-8">
          <div>
            <SectionTitle text="ফিচার্ড বই"></SectionTitle>
            <p className="text-gray-600">বিশেষভাবে নির্বাচিত বই সমূহ</p>
          </div>
          <Link href="/books?freadtured=true">
            <Button variant={"outline"} className="bg-transparent">
              সব দেখুন
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* card book */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book, i) => (
            <ProductCard key={i} book={book}></ProductCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
