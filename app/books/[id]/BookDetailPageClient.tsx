"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  generateBookStructuredData,
  generateBreadcrumbStructuredData,
} from "@/lib/seo";
import { useBookStore } from "@/lib/store";
import {
  ArrowLeft,
  BookOpen,
  Building,
  Eye,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
  User,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BookDetailPageclient() {
  const params = useParams();
  const { books } = useBookStore();
  const [book, setBook] = useState(null);
  const [isLinked, setIsLinked] = useState(false);

  useEffect(() => {
    const foundBook = books.find((b) => b.id === params.id);
    setBook(foundBook);
  }, [params.id, books]);

  if (!book) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            বই পাওয়া যায়নি
          </h2>
          <p className="text-gray-600 mb-6">
            এই বইটি আর উপলব্ধ নেই বা সরিয়ে ফেলা হয়েছে।
          </p>
          <Link href="/books">
            <Button className="bg-blue-600 hover: bg-blue-700">
              সব বই দেখুন
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedBooks = books
    .filter((b) => b.id !== book.id && b.subject === book.subject)
    .slice(0, 4);

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
              <Card className="overflow-hidden border border-gray-200 shadow-sm">
                <div className=" relative">
                  <img
                    src={book.image || "/placeholder.sbg?height=500&width=350"}
                    alt={book.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className=" absolute top-4 left-4">
                    <Badge
                      className={`${
                        book.condition === "Like New"
                          ? "bg-green-100 text-green-800"
                          : book.condition === "Good"
                          ? "bg-blue-100 text-blue-800"
                          : book.condition === "Fair"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {book.condition}
                    </Badge>
                  </div>

                  <div className=" absolute top-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded">
                    <Eye className="w-4 h-4 inline mr-1" />
                    {book.views} বার দেখা হয়েছে
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {book.price}
                    </div>
                    {book.originalPrice && (
                      <div className="text-lg text-gray-400 line-through mb-4">
                        {book.originalPrice}
                      </div>
                    )}

                    <div className="flex gap-3 mb-4">
                      <Button className="flex-1 bg-green-600 hover:bg-green-700">
                        <Phone className="w-4 h-4 mr-2" />
                        কল করুন
                      </Button>
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        চ্যাট করুন
                      </Button>
                    </div>
                    <p className="text-sm text-gray-600">
                      পোস্ট করা হয়েছে:{" "}
                      {new Date(book.postedDate).toLocaleDateString("bn-BD")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Book Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {book.title}{" "}
                </h1>
                <p className="text-xl text-gray-700 mb-6">{book.author}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <GraduationCap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">
                      {book.class}
                    </div>
                    <div className="text-sm text-gray-600">শ্রেণি</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <BookOpen className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">
                      {book.subject}
                    </div>
                    <div className="text-sm text-gray-600">বিষয়</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50">
                    <Building className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">
                      {book.institution}
                    </div>
                    <div className="text-sm text-gray-600">প্রতিষ্ঠান</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50">
                    <MapPin className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">
                      {book.district}
                    </div>
                    <div className="text-sm text-gray-600">জেলা</div>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">ইয়ের বিবরণ</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {book.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="font-medium text-gray-900">
                        সংস্করণ:
                      </span>
                      <span className="ml-2 text-gray-700">{book.edition}</span>
                    </div>
                    {book.department && (
                      <div>
                        <span className="font-medium text-gray-900">
                          বিভাগ:
                        </span>
                        <span className="ml-2 text-gray-700">
                          {book.department}
                        </span>
                      </div>
                    )}
                    {book.semester && (
                      <div>
                        <span className="font-medium text-gray-900">
                          সেমিস্টার:
                        </span>
                        <span className="ml-2 text-gray-700">
                          {book.semester}
                        </span>
                      </div>
                    )}
                    <div>
                      <span className="font-medium text-gray-900">
                        অবস্থান:
                      </span>
                      <span className="ml-2 text-gray-700">
                        {book.district}, {book.division}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Seller Info */}
            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-900">
                  <User className="w-5 h-5 mr-2 text-blue-600" />
                  বিক্রেতার তথ্য
                </h3>
                <div className="flex items-center gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src='/placeholder.svg?height=64&width=64' />
                      <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold text-lg">
                        {book.sellerName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-gray-900 mb-2">{book.sellerName}</h4>
                      <div className="space-y-1">
                        <div className="flex items-center text-gray-600">
                          <Phone className="w-4 h-4 mr-2" />
                          {book.contactPhone}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Mail className="w-4 h-4 mr-2" />
                          {book.contactEmail}
                        </div>
                        <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {book.district}, {book.division}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button className="bg-green-600 hover:bg-green-700">
                        <Phone className="w-4 h-4 mr-2" />
                        কল করুন
                      </Button>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        চ্যাট করুন
                      </Button>
                    </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Books */}
            {relatedBooks.length > 0 && (
              <Card className="border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">একই বিষয়ের অন্যান্য বই</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {relatedBooks.map((relatedBook) => (
                      <Link key={relatedBook.id} href={`/books/${relatedBook.id}`}>
                        <div className="group cursor-pointer">
                          <div className="relative overflow-hidden rounded-lg mb-3">
                            <img
                              src={relatedBook.image || "/placeholder.svg?height=150&width=120"}
                              alt={relatedBook.title}
                              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-200"
                            />
                          </div>
                          <h4 className="font-medium text-sm text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                            {relatedBook.title}
                          </h4>
                          <p className="text-green-600 font-semibold">৳{relatedBook.price}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
