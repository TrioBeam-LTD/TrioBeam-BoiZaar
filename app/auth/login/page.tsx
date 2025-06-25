"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginPageData } from "@/lib/utils";
import { motion } from "framer-motion";
import { BookOpen, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const loginSchema = z.object({
  email: z.string().email(""),
  password: z.string().min(6, ""),
  rememberMe: z.boolean().optional(),
})

type LoginForm = z.infer<typeof loginSchema>

export default function LoginPage() {

  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue,
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema)
  })

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Branding */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start space-x-3 mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold text-gray-900">
              বইবিক্রয়.কম
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            আপনার একাডেমিক বই
            <span className="block text-blue-600">মার্কেটপ্লেসে</span>
            স্বাগতম
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed  ">
            হাজারো ছাত্রছাত্রীর সাথে যুক্ত হয়ে আপনার প্রয়োজনীয় বই খুঁজে নিন বা বিক্রি করুন
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
            {
              loginPageData.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1}}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))
            }
          </div>

        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x:0 }}
          transition={{ duration: 0.6, delay: 0.2}}
        >
          <Card className="bg-white border border-gray-200 shadow-lg">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">লগইন করুন</CardTitle>
            <p className="text-gray-600">আপনার অ্যাকাউন্টে প্রবেশ করুন</p>
            </CardHeader>

            <CardContent className="space-y-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    ইমেইল ঠিকানা
                  </Label>
                  <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input 
                        id="email"
                        type="email"
                        placeholder="আপনার ইমেইল ঠিকানা"
                        className="pl-10 border-gray-300 focus:border-blue-500"
                        
                      />
                      
                  </div>
                  {errors.email && <p className="text-sm text-red-600">{errors.email.message }</p>}
                </div>

                <div >

                </div>
              </form>

            </CardContent>

          </Card>
        </motion.div>
      </div>
      <div></div>
    </div>
  );
}
// ruhul amin , find the repo