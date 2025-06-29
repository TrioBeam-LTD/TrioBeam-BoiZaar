"use client";

import Navber from "@/components/Custom/Navber";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  generateBookStructuredData,
  generateBreadcrumbStructuredData,
} from "@/lib/seo";
import { useBookStore } from "@/lib/store";
import { ArrowLeft, Heart, Share2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function BookDetailPageclient() {
  const params = useParams();
  const { books } = useBookStore();
  const [book, setBook] = useState(null);
  const [isLinked, setIsLinked] = useState(false);


  if (!book) {
    return(
      <div className="min-h-screen bg-gray-50">
        <div>
          <div>

          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {book && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBookStructuredData(book)),
          }}
        />
      )}

      {book && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateBreadcrumbStructuredData([
                { name: "হোম", url: "https://boibikroy.com" },
                { name: "সব বই", url: "https://boibikroy.com/books" },
                {
                  name: book.title,
                  url: `https://boibikroy.com/books/${book.id}`,
                },
              ])
            ),
          }}
        />
      )}
      {/* header */}
      <Navber />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/books">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-blue-600"
              >
                <ArrowLeft />
                সব বই
              </Button>
            </Link>

            <div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLinked(!isLinked)}
                className={`${
                  isLinked ? "text-red-500" : "text-gray-600"
                } hover:text-red-500`}
              >
                <Heart
                  className={`w-4 h-4 mr-2 ${isLinked ? "fill-current" : ""}`}
                />
                {isLinked
                  ? "পছন্দের তালিকায় আছে"
                  : "পছন্দের তালিকায় যোগ করুন"}
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                শেয়ার করুন
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Book Image */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="overflow-hidden border border-gray-200 shadow-md">
                <div className=" relative">
                  <img
                    src={book.image || "/placeholder.svg?height=500&width=300"}
                    alt={book.title}
                    className="w-full h-96 object-cover"
                  />

                  <div className=" absolute top-4 left-4">
                    <Badge
                      className={`${
                        book.condition === "Like New" ?
                        "bg-green-100 text-green-800" : 
                        book.condition === "Good" ? 
                        "bg-blue-100 text-blue-800" : 
                        book.condition === "Fair" ?
                        "bg-yellow-100 text-yellow-800" :
                        "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {book.condition}
                    </Badge>
                  </div>

                  <div className=" absolute top-4 ">
                    {book.views} বার দেখা হয়েছে
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
