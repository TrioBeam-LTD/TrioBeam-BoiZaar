"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerBenefits } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Lock, Mail, MapPin, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side -Branding */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <div className=" flex items-center justify-center lg:justify-start space-x-3 mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold text-gray-900">বইজার.কম</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            আমাদের <span className=" text-blue-600">কমিউনিটিতে</span> যোগ দিন
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            বাংলাদেশের সবচেয়ে বিশ্বস্ত একাডেমিক বই মার্কেটপ্লেসে অ্যাকাউন্ট
            তৈরি করুন
          </p>

          {/* Benefits */}
          <div className="space-y-4 max-w-md mx-auto lg:mx-0">
            {registerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Righ Side - Register Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-white border border-gray-200 shadow-lg">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                অ্যাকাউন্ট তৈরি করুন
              </CardTitle>
              <p className="text-gray-600">আপনার তথ্য দিয়ে রেজিস্টার করুন</p>
            </CardHeader>

            <CardContent className=" space-y-6">
              <form className="space-y-2">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div className=" space-y-2">
                    <Label
                      htmlFor="firstName"
                      className="text-sm font-medium text-gray-700"
                    >
                      নামের প্রথম অংশ
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="যেমন: মোহাম্মদ"
                      className=" border-gray-300 focus:border-blue-500"
                    />
                    {/* error will be added */}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="lastName"
                      className="text-sm font-medium text-gray-700"
                    >
                      নামের শেষ অংশ
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="যেমন: রহমান"
                      className="border-gray-300 focus:border-blue-500"
                    />
                    {/* errors will be added */}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm text-gray-700 font-medium"
                  >
                    ইমেইল ঠিকানা
                  </Label>
                  <div className=" relative">
                    <Mail className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="আপনার ইমেইল ঠিকানা"
                      className="pl-10 border-gray-300 focus:border-blue-500"
                    />
                  </div>
                  {/* error will be added */}
                </div>

                {/* Phone */}
                <div>
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700"
                  >
                    ফোন নম্বর
                  </Label>
                  <Input
                    id="phone"
                    placeholder="০১৭১২৩৪৫৬৭৮"
                    className="border-gray-300 focus:border-blue-500"
                  />
                  {/* errors will be added */}
                </div>

                {/* District */}
                <div className=" space-y-2">
                  <Label
                    htmlFor="district"
                    className="text-sm font-medium text-gray-700"
                  >
                    জেলা
                  </Label>
                  <div className=" relative">
                    <MapPin className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="district"
                      placeholder="আপনার জেলার নাম"
                      className="pl-10 border-gray-300 focus:border-blue-500"
                    />
                  </div>
                  {/* error will be added */}
                </div>

                {/* Password Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className=" space-y-2">
                    <Label
                      htmlFor="password"
                      className="text-sm font-medium text-gray-700"
                    >
                      পাসওয়ার্ড
                    </Label>
                    <div className=" relative">
                      <Lock className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="আপনার পাসওয়ার্ড"
                        className=" pl-10 pr-10 border-gray-300 focus:border-blue-500"
                      />
                      <button
                        type="button"
                        className=" absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {/* Eye will be added with useState for password */}
                      </button>
                    </div>
                    {/* error will be added */}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="confirmPassword"
                      className="text-sm font-medium text-gray-700"
                    >
                      পাসওয়ার্ড নিশ্চিত করুন
                    </Label>
                    <div className=" relative">
                      <Lock className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="পাসওয়ার্ড আবার লিখুন"
                        className="pl-10 pr-10 border-gray-300 focus:border-blue-500"
                      />
                      <button
                        type="button"
                        className=" absolute right-3 top-1/2 transform  -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {/* Eye will be added  */}
                      </button>
                    </div>
                    {/* error will be added */}
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="flex items-center space-x-2">
                  <Checkbox id="agreeToTerms" />
                  <Label
                    htmlFor="agreeToTerms"
                    className="text-sm text-gray-700"
                  >
                    আমি
                    <Link
                      href="/terms"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      শর্তাবলী
                    </Link>
                    এবং{" "}
                    <Link
                      href="/privacy"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      গোপনীয়তা নীতি
                    </Link>{" "}
                    মেনে নিচ্ছি
                  </Label>
                </div>
                {/* error will be added */}

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-medium"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2">
                        অ্যাকাউন্ট তৈরি করা হচ্ছে...
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <User className="w-5 h-5 mr-2" />
                      অ্যাকাউন্ট তৈরি করুন
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  )}
                </Button>
              </form>

              <div className="text-center">
                <p className="text-gray-600">
                  ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
                  <Link
                    href="/auth/login"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    লগইন করুন
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
