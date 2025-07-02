"use client";

import React from "react";
import SectionTitle from "./SectionTitle";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import ProductCard from "./Card";
import { useBookStore } from "@/lib/store";

function RecentBook() {
  const { books } = useBookStore();

  return (
    <section className="py-12 ">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <SectionTitle text="সাম্প্রতিক বই "></SectionTitle>
            <p className="text-gray-600">নতুন যোগ হওয়া বই সমূহ</p>
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
          {books.map((book, i) => (
            <ProductCard key={i} book={book}></ProductCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentBook;
