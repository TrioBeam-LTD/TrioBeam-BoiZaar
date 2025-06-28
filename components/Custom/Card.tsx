"use client";
import { Book } from "@/Types/BookType";
import { motion } from "framer-motion";
import { Eye, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
type ProductCardProps = {
  book: Book;
};
function ProductCard({ book }: ProductCardProps) {
  let conditionColor = "bg-gray-100 text-gray-800";
  if (book.condition === "Like New") {
    conditionColor = "bg-green-100 text-green-800";
  } else if (book.condition === "Good") {
    conditionColor = "bg-blue-100 text-blue-800";
  } else if (book.condition === "Fair") {
    conditionColor = "bg-yellow-100 text-yellow-800";
  }
  return (
    <motion.div
      key={book.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
      className="group"
    >
      <Card className="bg-white  p-0 border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 overflow-hidden group-hover:scale-[1.02]">
        <div className="relative  ">
          <img
            src={book.image || "/placeholder.svg?height=200&width=150"}
            alt={book.title}
            className="w-full h-48 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 left-2">
            <Badge
              variant={"outline"}
              className={`text-xs ${conditionColor} backdrop-blur-sm bg-white/90`}
            >
              {book.condition}
            </Badge>
          </div>
          <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md group-hover:bg-black/80 transition-colors duration-200">
            <Eye className="w-3 h-3 inline mr-1" />
            {book.views}
          </div>
        </div>

        <CardContent className="px-4 pb-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1 text-sm line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
              {book.title}
            </h3>
            <p className="text-gray-600 text-xs mb-2 group-hover:text-gray-700 transition-colors duration-200">
              লেখক: {book.author}
            </p>

            <div className="flex items-center gap-2 mb-2">
              <Badge
                variant={"outline"}
                className="text-xs group-hover:border-blue-300 transition-colors duration-200"
              >
                {book.class}
              </Badge>
              <Badge
                variant={"outline"}
                className="text-xs group-hover:border-blue-300 transition-colors duration-200"
              >
                {book.subject}
              </Badge>
            </div>

            <div className="text-xs text-gray-500 mb-2 group-hover:text-gray-600 transition-colors duration-200">
              {/* <div className="flex items-center mb-1">
                <Building className="w-3 h-3 mr-1" />
                {book.institution}
              </div> */}
              <div className="flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                {book.district}, {book.division}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-bold text-green-600 group-hover:text-green-700 transition-colors duration-200">
                ৳{book.price}
              </div>
              {/* {book.originalPrice && (
                <div className="text-xs text-gray-400 line-through">
                  ৳{book.originalPrice}
                </div>
              )} */}
            </div>
            <div className="flex gap-1">
              <Button
                size="sm"
                variant="outline"
                className="text-xs px-2 py-1 cursor-pointer hover:border-blue-300 hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                <MessageCircle className="w-3 h-3 mr-1" />
                মেসেজ
              </Button>
              <Link href={`/books/${book.id}`}>
                <Button
                  size="sm"
                  className="text-xs px-2 py-1 bg-blue-600 hover:bg-blue-700 cursor-pointer transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md"
                >
                  বিস্তারিত
                </Button>
              </Link>
            </div>
          </div>

          <div className="text-xs text-gray-400 mt-2 group-hover:text-gray-500 transition-colors duration-200">
            পোস্ট: {new Date(book.postedDate).toLocaleDateString("bn-BD")} |
            বিক্রেতা: {book.sellerName}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ProductCard;
