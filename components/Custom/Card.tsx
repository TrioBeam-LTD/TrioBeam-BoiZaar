"use client"
import { Book } from "@/Types/BookType";
import {motion }from "framer-motion";
import { Card, CardContent } from "../ui/card";
import {  Building, Eye, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";
type ProductCardProps = {
  book: Book;
};
function ProductCard({ book }: ProductCardProps) {
     let conditionColor = "bg-gray-100 text-gray-800"
    if (book.condition === "Like New") {
      conditionColor = "bg-green-100 text-green-800"
    } else if (book.condition === "Good") {
      conditionColor = "bg-blue-100 text-blue-800"
    } else if (book.condition === "Fair") {
      conditionColor = "bg-yellow-100 text-yellow-800"
    }
  return (
    <motion.div
      key={book.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3}}
      whileHover={{ y: -2 }}
      className="group"
    >
      <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
        {book.isFeatured && (
          <div className="bg-gradient-to-r from-orange-400 to-red-400 text-white text-xs font-medium px-3 py-1 text-center">
            ⭐ ফিচার্ড বিজ্ঞাপন
          </div>
        )}

        <div className="relative">
          <img
            src={book.image || "/placeholder.svg?height=200&width=150"}
            alt={book.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 left-2">
            <Badge variant={"outline"} className={`text-xs ${conditionColor}`}>
              {book.condition}
            </Badge>
          </div>
          <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
            <Eye className="w-3 h-3 inline mr-1" />
            {book.views}
          </div>
        </div>

        <CardContent className="p-4">
          <h3 className="font-semibold text-gray-900 mb-1 text-sm h-10 overflow-hidden">
            {book.title}
          </h3>
          <p className="text-gray-600 text-xs mb-2">লেখক: {book.author}</p>

          <div className="flex items-center gap-2 mb-2">
            <Badge variant={"outline"} className="text-xs">{book.class}</Badge>
            <Badge variant={"outline"} className="text-xs">{book.subject}</Badge>
          </div>

          <div className="text-xs text-gray-500 mb-2">
            <div className="flex items-center mb-1">
              <Building className="w-3 h-3 mr-1" />
              {book.institution}
            </div>
            <div className="flex items-center">
              <MapPin className="w-3 h-3 mr-1" />
              {book.district}, {book.division}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-bold text-green-600">
                ৳{book.price}
              </div>
              {book.originalPrice && (
                <div className="text-xs text-gray-400 line-through">
                  ৳{book.originalPrice}
                </div>
              )}
            </div>
            <div className="flex gap-1">
              <Button size="sm" variant="outline" className="text-xs px-2 py-1">
                <Phone className="w-3 h-3 mr-1" />
                কল
              </Button>
              <Link href={`/books/${book.id}`}>
                <Button
                  size="sm"
                  className="text-xs px-2 py-1 bg-blue-600 hover:bg-blue-700"
                >
                  বিস্তারিত
                </Button>
              </Link>
            </div>
          </div>

          <div className="text-xs text-gray-400 mt-2">
            পোস্ট: {new Date(book.postedDate).toLocaleDateString("bn-BD")} |
            বিক্রেতা: {book.sellerName}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ProductCard;
