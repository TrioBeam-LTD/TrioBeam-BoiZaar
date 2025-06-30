"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  BookOpen,
  Building,
  GraduationCap,
  School,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

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
  {
    title: "CSE বই",
    icon: School,
    count: 200,
    href: "/books?class=SSC",
    color: "bg-green-500",
  },
];

export default function CarouselWithMultipleSlides() {
  return (
    <div className="w-[70%] mx-auto bg-[#fffaff] rounded-2xl shadow-lg">
      <Carousel
        opts={{
          align: "start",
        }}
        className=" "
      >
        <CarouselContent>
          {categories.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 lg:basis-1/6"
            >
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={item.href}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="group cursor-pointer"
                  >
                    <div className=" border-gray-200 duration-200">
                      <div className=" text-center py-8 rounded-2xl">
                        <div
                          className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center mx-auto mb-3`}
                        >
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-medium text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {item.count}+ বই
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

// <Carousel
//   opts={{
//     align: "start",
//   }}
//   className="w-[70%] container mx-auto"
// >
//   <CarouselContent>
//     {Array.from({ length: 50 }).map((_, index) => (
//       <CarouselItem
//         key={index}
//         className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
//       >
//         <div className="p-1">
//           <Card className="h-64 w-65">
//             <CardContent className="flex aspect-square items-center justify-center p-6">
//               <span className="text-3xl font-semibold">{index + 1}</span>
//             </CardContent>
//           </Card>
//         </div>
//       </CarouselItem>
//     ))}
//   </CarouselContent>
//   <CarouselPrevious />
//   <CarouselNext />
// </Carousel>
