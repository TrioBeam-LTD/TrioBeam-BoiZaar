"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Camera,
  CheckCircle,
  MapPin,
  Navigation,
  Phone,
  Plus,
  Sparkles,
  Star,
  Upload,
  X,
  Zap,
} from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

// Zod schema for form validation
const bookSchema = z.object({
  // Basic Book Info
  title: z.string().min(3, "বইয়ের নাম কমপক্ষে ৩ অক্ষরের হতে হবে"),
  author: z.string().min(2, "লেখকের নাম কমপক্ষে ২ অক্ষরের হতে হবে"),
  edition: z.string().min(1, "সংস্করণ প্রয়োজন"),
  condition: z.enum(["New", "Like New", "Good", "Fair", "Poor"], {
    required_error: "বইয়ের অবস্থা নির্বাচন করুন",
  }),

  // Academic Info
  class: z.string().min(1, "শ্রেণী নির্বাচন করুন"),
  subject: z.string().min(1, "বিষয় নির্বাচন করুন"),
  institution: z.string().min(2, "প্রতিষ্ঠানের নাম প্রয়োজন"),
  department: z.string().optional(),
  semester: z.string().optional(),

  // Pricing
  price: z.number().min(1, "দাম কমপক্ষে ১ টাকা হতে হবে"),
  originalPrice: z.number().optional(),

  // Location
  district: z.string().min(1, "জেলা নির্বাচন করুন"),
  division: z.string().min(1, "বিভাগ নির্বাচন করুন"),

  // Contact
  contactPhone: z.string().regex(/^01[3-9]\d{8}$/, "সঠিক মোবাইল নম্বর দিন"),
  contactEmail: z.string().email("সঠিক ইমেইল ঠিকানা দিন"),
  sellerName: z.string().min(2, "নাম কমপক্ষে ২ অক্ষরের হতে হবে"),

  // Description
  description: z.string().min(10, "বর্ণনা কমপক্ষে ১০ অক্ষরের হতে হবে"),

  // Images
  photos: z.array(z.string()).min(1, "কমপক্ষে একটি ছবি আপলোড করুন"),
});

type BookFormData = z.infer<typeof bookSchema>;

const steps = [
  { id: 1, title: "বইয়ের তথ্য", icon: BookOpen },
  { id: 2, title: "ছবি আপলোড", icon: Camera },
  { id: 3, title: "যোগাযোগ", icon: Phone },
  { id: 4, title: "সম্পূর্ণ", icon: CheckCircle },
];

const bangladeshDivisions = [
  "ঢাকা",
  "চট্টগ্রাম",
  "রাজশাহী",
  "খুলনা",
  "বরিশাল",
  "সিলেট",
  "রংপুর",
  "ময়মনসিংহ",
];

const districts = {
  ঢাকা: [
    "ঢাকা",
    "গাজীপুর",
    "নারায়ণগঞ্জ",
    "মানিকগঞ্জ",
    "মুন্শিগঞ্জ",
    "নরসিংদী",
    "টাঙ্গাইল",
    "কিশোরগঞ্জ",
    "ফরিদপুর",
    "গোপালগঞ্জ",
    "মাদারীপুর",
    "রাজবাড়ী",
    "শরীয়তপুর",
  ],
  চট্টগ্রাম: [
    "চট্টগ্রাম",
    "কক্সবাজার",
    "রাঙ্গামাটি",
    "বান্দরবান",
    "খাগড়াছড়ি",
    "ফেনী",
    "লক্ষ্মীপুর",
    "কুমিল্লা",
    "নোয়াখালী",
    "ব্রাহ্মণবাড়িয়া",
    "চাঁদপুর",
  ],
  রাজশাহী: [
    "রাজশাহী",
    "নাটোর",
    "নওগাঁ",
    "চাঁপাইনবাবগঞ্জ",
    "পাবনা",
    "সিরাজগঞ্জ",
    "বগুড়া",
    "জয়পুরহাট",
  ],
  খুলনা: [
    "খুলনা",
    "বাগেরহাট",
    "সাতক্ষীরা",
    "যশোর",
    "মাগুরা",
    "নড়াইল",
    "চুয়াডাঙ্গা",
    "মেহেরপুর",
    "কুষ্টিয়া",
    "ঝিনাইদহ",
  ],
  বরিশাল: ["বরিশাল", "পটুয়াখালী", "ভোলা", "বরগুনা", "ঝালকাঠি", "পিরোজপুর"],
  সিলেট: ["সিলেট", "মৌলভীবাজার", "হবিগঞ্জ", "সুনামগঞ্জ"],
  রংপুর: [
    "রংপুর",
    "দিনাজপুর",
    "ঠাকুরগাঁও",
    "পঞ্চগড়",
    "গাইবান্ধা",
    "কুড়িগ্রাম",
    "লালমনিরহাট",
    "নীলফামারী",
  ],
  ময়মনসিংহ: ["ময়মনসিংহ", "জামালপুর", "নেত্রকোণা", "শেরপুর"],
};

const classes = [
  "প্রাথমিক",
  "JSC/JDC",
  "SSC/Dakhil",
  "HSC/Alim",
  "Honors/Degree",
  "Masters",
  "BBA",
  "MBA",
  "Engineering",
  "Medical",
  "অন্যান্য",
];

const subjects = [
  "গণিত",
  "পদার্থবিজ্ঞান",
  "রসায়ন",
  "জীববিজ্ঞান",
  "বাংলা",
  "ইংরেজি",
  "ইতিহাস",
  "ভূগোল",
  "অর্থনীতি",
  "রাষ্ট্রবিজ্ঞান",
  "সমাজবিজ্ঞান",
  "দর্শন",
  "ইসলামিক স্টাডিজ",
  "হিসাববিজ্ঞান",
  "ব্যবসায় সংগঠন",
  "ফিন্যান্স",
  "মার্কেটিং",
  "কম্পিউটার সায়েন্স",
  "অন্যান্য",
];

const conditions = [
  { value: "New", label: "নতুন", color: "bg-green-100 text-green-800" },
  {
    value: "Like New",
    label: "নতুনের মতো",
    color: "bg-blue-100 text-blue-800",
  },
  { value: "Good", label: "ভালো", color: "bg-yellow-100 text-yellow-800" },
  { value: "Fair", label: "মোটামুটি", color: "bg-orange-100 text-orange-800" },
  { value: "Poor", label: "খারাপ", color: "bg-red-100 text-red-800" },
];

function PostBookForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [locationError, setLocationError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger,
  } = useForm<BookFormData>({
    resolver: zodResolver(bookSchema),
    mode: "onChange",
  });

  const watchedDivision = watch("division");

  // Location detection function
  const detectLocation = async () => {
    setIsLoadingLocation(true);
    setLocationError("");

    try {
      if (!navigator.geolocation) {
        throw new Error("আপনার ব্রাউজার লোকেশন সাপোর্ট করে না");
      }

      const position = await new Promise<GeolocationPosition>(
        (resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 300000,
          });
        }
      );

      // Reverse geocoding to get location name
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
      );

      if (!response.ok) throw new Error("লোকেশন খুঁজে পাওয়া যায়নি");

      const data = await response.json();

      // Map the detected location to Bangladesh divisions/districts
      const detectedDistrict =
        data.city || data.locality || data.principalSubdivision;
      const detectedDivision = data.principalSubdivision;

      // Try to match with our predefined divisions and districts
      for (const [division, districtList] of Object.entries(districts)) {
        if (
          districtList.some(
            (district) =>
              district
                .toLowerCase()
                .includes(detectedDistrict?.toLowerCase()) ||
              detectedDistrict?.toLowerCase().includes(district.toLowerCase())
          )
        ) {
          setValue("division", division);
          setValue("district", detectedDistrict);
          break;
        }
      }
    } catch (error) {
      setLocationError(error instanceof Error ? error.message : "লোকেশন খুঁজে পেতে সমস্যা হয়েছে");
    } finally {
      setIsLoadingLocation(false);
    }
  };

  const nextStep = async () => {
    let fieldsToValidate: (keyof BookFormData)[] = [];

    switch (currentStep) {
      case 1:
        fieldsToValidate = [
          "title",
          "author",
          "edition",
          "condition",
          "class",
          "subject",
          "institution",
          "price",
          "description",
        ];
        break;
      case 2:
        fieldsToValidate = ["photos"];
        break;
      case 3:
        fieldsToValidate = [
          "district",
          "division",
          "contactPhone",
          "contactEmail",
          "sellerName",
        ];
        break;
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages: string[] = [];
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            newImages.push(e.target.result as string);
            if (newImages.length === files.length) {
              const updatedImages = [...selectedImages, ...newImages];
              setSelectedImages(updatedImages);
              setValue("photos", updatedImages);
            }
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(updatedImages);
    setValue("photos", updatedImages);
  };

  const onSubmit = async (data: BookFormData) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your API
      console.log("Form data:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setCurrentStep(4);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-4 lg:py-8">
      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Sidebar - AdSense (Hidden on mobile) */}
          <div className="hidden lg:block lg:w-64 xl:w-80 flex-shrink-0">
            <div className="sticky top-8 space-y-6">
              {/* AdSense Banner 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 px-4 py-2 border-b">
                  <div className="flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-yellow-600 mr-2" />
                    <span className="text-sm font-medium text-yellow-800">
                      স্পন্সর্ড
                    </span>
                  </div>
                </div>
                <div className="p-4 min-h-[300px] flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Star className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-sm text-gray-600 mb-2">বিজ্ঞাপন স্থান</p>
                    <div className="text-xs text-gray-400 bg-white px-2 py-1 rounded border">
                      [AdSense 300x250]
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* AdSense Banner 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 border-b">
                  <div className="flex items-center justify-center">
                    <Zap className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-sm font-medium text-green-800">
                      প্রচার
                    </span>
                  </div>
                </div>
                <div className="p-4 min-h-[250px] flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Sparkles className="w-6 h-6 text-green-600" />
                    </div>
                    <p className="text-sm text-gray-600 mb-2">বিজ্ঞাপন স্থান</p>
                    <div className="text-xs text-gray-400 bg-white px-2 py-1 rounded border">
                      [AdSense 300x200]
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Support Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-lg p-4 shadow-sm border border-blue-200"
              >
                <div className="text-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    আমাদের সাপোর্ট করুন
                  </h4>
                  <p className="text-xs text-gray-600">
                    বিজ্ঞাপন দেখে আমাদের ফ্রি সেবা চালু রাখতে সাহায্য করুন
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Main Content */}
          <div className="">
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between gap-1 px-3 lg:px-0 ">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className="lg:flex lg:items-center lg:gap-1"
                  >
                    <motion.div
                      className={`flex items-center justify-center w-10  lg:w-12 h-10 lg:h-12 rounded-full border-2 transition-all duration-500 ${
                        currentStep >= step.id
                          ? "bg-gradient-to-br from-blue-500 to-blue-600 border-blue-600 text-white shadow-lg"
                          : "bg-white border-gray-300 text-gray-400 hover:border-blue-300"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      animate={
                        currentStep === step.id
                          ? {
                              scale: [1, 1.1, 1],
                              boxShadow: [
                                "0 0 0 0 rgba(59, 130, 246, 0.4)",
                                "0 0 0 10px rgba(59, 130, 246, 0)",
                                "0 0 0 0 rgba(59, 130, 246, 0)",
                              ],
                            }
                          : {}
                      }
                      transition={{ duration: 0.6 }}
                    >
                      <step.icon className="w-6 h-6" />
                    </motion.div>
                    <div className="ml-3 hidden sm:block">
                      <motion.p
                        className={`text-sm font-medium transition-colors duration-300 ${
                          currentStep >= step.id
                            ? "text-blue-600"
                            : "text-gray-400"
                        }`}
                        animate={
                          currentStep === step.id ? { scale: [1, 1.05, 1] } : {}
                        }
                        transition={{ duration: 0.3 }}
                      >
                        {step.title}
                      </motion.p>
                    </div>
                    {index < steps.length - 1 && (
                      <motion.div
                        className={`w-12 sm:w-20 h-1 mx-4 rounded-full transition-all duration-500 ${
                          currentStep > step.id
                            ? "bg-gradient-to-r from-blue-500 to-blue-600"
                            : "bg-gray-300"
                        }`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: currentStep > step.id ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ transformOrigin: "left" }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <Card className="shadow-xl border-0 px-0">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {currentStep === 1 && "বইয়ের বিস্তারিত তথ্য"}
                  {currentStep === 2 && "বইয়ের ছবি আপলোড করুন"}
                  {currentStep === 3 && "যোগাযোগের তথ্য"}
                  {currentStep === 4 && "সফলভাবে সম্পন্ন!"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <AnimatePresence mode="wait">
                    {/* Step 1: Book Information */}
                    {currentStep === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="title">বইয়ের নাম *</Label>
                            <Input
                              id="title"
                              {...register("title")}
                              placeholder="যেমন: উচ্চতর গণিত"
                              className="mt-1"
                            />
                            {errors.title && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.title.message}
                              </p>
                            )}
                          </div>

                          <div>
                            <Label htmlFor="author">লেখকের নাম *</Label>
                            <Input
                              id="author"
                              {...register("author")}
                              placeholder="যেমন: ড. মোহাম্মদ আমীর হোসেন"
                              className="mt-1"
                            />
                            {errors.author && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.author.message}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                            <Label htmlFor="edition">সংস্করণ *</Label>
                            <Input
                              id="edition"
                              {...register("edition")}
                              placeholder="যেমন: ২০২৩ সংস্করণ"
                              className="mt-1"
                            />
                            {errors.edition && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.edition.message}
                              </p>
                            )}
                          </div>

                          <div>
                            <Label htmlFor="class">শ্রেণী *</Label>
                            <Select
                              onValueChange={(value) =>
                                setValue("class", value)
                              }
                            >
                              <SelectTrigger className="mt-1">
                                <SelectValue placeholder="শ্রেণী নির্বাচন করুন" />
                              </SelectTrigger>
                              <SelectContent>
                                {classes.map((cls) => (
                                  <SelectItem key={cls} value={cls}>
                                    {cls}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {errors.class && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.class.message}
                              </p>
                            )}
                          </div>

                          <div>
                            <Label htmlFor="subject">বিষয় *</Label>
                            <Select
                              onValueChange={(value) =>
                                setValue("subject", value)
                              }
                            >
                              <SelectTrigger className="mt-1">
                                <SelectValue placeholder="বিষয় নির্বাচন করুন" />
                              </SelectTrigger>
                              <SelectContent>
                                {subjects.map((subject) => (
                                  <SelectItem key={subject} value={subject}>
                                    {subject}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {errors.subject && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.subject.message}
                              </p>
                            )}
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="institution">
                            প্রতিষ্ঠানের নাম *
                          </Label>
                          <Input
                            id="institution"
                            {...register("institution")}
                            placeholder="যেমন: ঢাকা কলেজ"
                            className="mt-1"
                          />
                          {errors.institution && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.institution.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label>বইয়ের অবস্থা *</Label>
                          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-2">
                            {conditions.map((condition) => (
                              <button
                                key={condition.value}
                                type="button"
                                onClick={() =>
                                  setValue("condition", condition.value as any)
                                }
                                className={`p-3 rounded-lg border-2 text-sm font-medium transition-all duration-200 ${condition.color} hover:scale-105`}
                              >
                                {condition.label}
                              </button>
                            ))}
                          </div>
                          {errors.condition && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.condition.message}
                            </p>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="price">দাম (টাকা) *</Label>
                            <Input
                              id="price"
                              type="number"
                              {...register("price", { valueAsNumber: true })}
                              placeholder="যেমন: ১৮০"
                              className="mt-1"
                            />
                            {errors.price && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.price.message}
                              </p>
                            )}
                          </div>

                          <div>
                            <Label htmlFor="originalPrice">
                              মূল দাম (ঐচ্ছিক)
                            </Label>
                            <Input
                              id="originalPrice"
                              type="number"
                              {...register("originalPrice", {
                                valueAsNumber: true,
                              })}
                              placeholder="যেমন: ৩৫০"
                              className="mt-1"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="description">বর্ণনা *</Label>
                          <textarea
                            id="description"
                            {...register("description")}
                            placeholder="বইয়ের অবস্থা, কোন পৃষ্ঠা ছেঁড়া আছে কিনা, লেখা আছে কিনা ইত্যাদি লিখুন..."
                            className="mt-1 w-full min-h-[100px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          {errors.description && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.description.message}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Image Upload */}
                    {currentStep === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="text-center">
                          <p className="text-gray-600 mb-6">
                            বইয়ের স্পষ্ট ছবি আপলোড করুন। ভালো ছবি ক্রেতাদের
                            আকর্ষণ করে।
                          </p>
                        </div>

                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors duration-200">
                          <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                            id="image-upload"
                          />
                          <label
                            htmlFor="image-upload"
                            className="cursor-pointer"
                          >
                            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-lg font-medium text-gray-700 mb-2">
                              ছবি আপলোড করুন
                            </p>
                            <p className="text-sm text-gray-500">
                              একাধিক ছবি নির্বাচন করতে পারেন (সর্বোচ্চ ৫টি)
                            </p>
                          </label>
                        </div>

                        {selectedImages.length > 0 && (
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {selectedImages.map((image, index) => (
                              <div key={index} className="relative group">
                                <img
                                  src={image}
                                  alt={`Book image ${index + 1}`}
                                  className="w-full h-32 object-cover rounded-lg border-2 border-gray-200"
                                />
                                <button
                                  type="button"
                                  onClick={() => removeImage(index)}
                                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            ))}

                            {selectedImages.length < 5 && (
                              <label
                                htmlFor="image-upload"
                                className="cursor-pointer"
                              >
                                <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-blue-400 transition-colors duration-200">
                                  <Plus className="w-8 h-8 text-gray-400" />
                                </div>
                              </label>
                            )}
                          </div>
                        )}

                        {errors.photos && (
                          <p className="text-red-500 text-sm text-center">
                            {errors.photos.message}
                          </p>
                        )}
                      </motion.div>
                    )}

                    {/* Step 3: Contact Information */}
                    {currentStep === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        {/* Location Detection Section */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                              <h4 className="font-medium text-blue-900">
                                আপনার অবস্থান
                              </h4>
                            </div>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={detectLocation}
                              disabled={isLoadingLocation}
                              className="flex items-center text-blue-600 border-blue-300 hover:bg-blue-50"
                            >
                              {isLoadingLocation ? (
                                <>
                                  <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-2" />
                                  খুঁজছি...
                                </>
                              ) : (
                                <>
                                  <Navigation className="w-4 h-4 mr-2" />
                                  বর্তমান অবস্থান
                                </>
                              )}
                            </Button>
                          </div>
                          {locationError && (
                            <p className="text-red-500 text-sm mb-4">
                              {locationError}
                            </p>
                          )}
                          <p className="text-sm text-blue-700">
                            দ্রুত ফর্ম পূরণের জন্য আপনার বর্তমান অবস্থান ব্যবহার
                            করুন
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="division">বিভাগ *</Label>
                            <Select
                              onValueChange={(value) =>
                                setValue("division", value)
                              }
                            >
                              <SelectTrigger className="mt-1">
                                <SelectValue placeholder="বিভাগ নির্বাচন করুন" />
                              </SelectTrigger>
                              <SelectContent>
                                {bangladeshDivisions.map((division) => (
                                  <SelectItem key={division} value={division}>
                                    {division}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {errors.division && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.division.message}
                              </p>
                            )}
                          </div>

                          <div>
                            <Label htmlFor="district">জেলা *</Label>
                            <Select
                              onValueChange={(value) =>
                                setValue("district", value)
                              }
                              disabled={!watchedDivision}
                            >
                              <SelectTrigger className="mt-1">
                                <SelectValue placeholder="জেলা নির্বাচন করুন" />
                              </SelectTrigger>
                              <SelectContent>
                                {watchedDivision &&
                                  districts[
                                    watchedDivision as keyof typeof districts
                                  ]?.map((district) => (
                                    <SelectItem key={district} value={district}>
                                      {district}
                                    </SelectItem>
                                  ))}
                              </SelectContent>
                            </Select>
                            {errors.district && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.district.message}
                              </p>
                            )}
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="sellerName">আপনার নাম *</Label>
                          <Input
                            id="sellerName"
                            {...register("sellerName")}
                            placeholder="যেমন: মোহাম্মদ রহিম"
                            className="mt-1"
                          />
                          {errors.sellerName && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.sellerName.message}
                            </p>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="contactPhone">মোবাইল নম্বর *</Label>
                            <Input
                              id="contactPhone"
                              {...register("contactPhone")}
                              placeholder="যেমন: 01712345678"
                              className="mt-1"
                            />
                            {errors.contactPhone && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.contactPhone.message}
                              </p>
                            )}
                          </div>

                          <div>
                            <Label htmlFor="contactEmail">ইমেইল ঠিকানা *</Label>
                            <Input
                              id="contactEmail"
                              type="email"
                              {...register("contactEmail")}
                              placeholder="যেমন: example@email.com"
                              className="mt-1"
                            />
                            {errors.contactEmail && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.contactEmail.message}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <div className="flex items-start">
                            <MapPin className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-blue-900 mb-1">
                                গোপনীয়তার নিশ্চয়তা
                              </h4>
                              <p className="text-sm text-blue-700">
                                আপনার ব্যক্তিগত তথ্য সম্পূর্ণ নিরাপদ থাকবে।
                                শুধুমাত্র আগ্রহী ক্রেতারা আপনার সাথে যোগাযোগ
                                করতে পারবেন।
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 4: Success */}
                    {currentStep === 4 && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center py-8"
                      >
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle className="w-12 h-12 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          সফলভাবে পোস্ট হয়েছে!
                        </h3>
                        <p className="text-gray-600 mb-8 max-w-md mx-auto">
                          আপনার বইয়ের বিজ্ঞাপন সফলভাবে পোস্ট হয়েছে। শীঘ্রই
                          ক্রেতারা আপনার সাথে যোগাযোগ করবেন।
                        </p>
                        <div className="space-y-4">
                          <Button
                            type="button"
                            size="lg"
                            className="w-full sm:w-auto"
                            onClick={() => (window.location.href = "/books")}
                          >
                            সব বই দেখুন
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto ml-0 sm:ml-4"
                            onClick={() => window.location.reload()}
                          >
                            আরেকটি বই পোস্ট করুন
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  {currentStep < 4 && (
                    <div className="flex justify-between pt-8 border-t border-gray-200">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        className="flex items-center"
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        পূর্ববর্তী
                      </Button>

                      {currentStep < 3 ? (
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="flex items-center"
                        >
                          পরবর্তী
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex items-center"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                              পোস্ট করা হচ্ছে...
                            </>
                          ) : (
                            <>
                              পোস্ট করুন
                              <CheckCircle className="w-4 h-4 ml-2" />
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Tips Section */}
            {currentStep < 4 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                  সহায়ক টিপস
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  {currentStep === 1 && (
                    <>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <p>বইয়ের সঠিক নাম ও লেখকের নাম লিখুন</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <p>বাজার দরের চেয়ে কম দাম রাখুন</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <p>বইয়ের অবস্থা সততার সাথে উল্লেখ করুন</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <p>বিস্তারিত বর্ণনা দিন</p>
                      </div>
                    </>
                  )}
                  {currentStep === 2 && (
                    <>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <p>স্পষ্ট ও উজ্জ্বল ছবি তুলুন</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <p>বইয়ের সামনে ও পিছনের ছবি দিন</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <p>ক্ষতিগ্রস্ত অংশের ছবি দিন</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <p>একাধিক কোণ থেকে ছবি তুলুন</p>
                      </div>
                    </>
                  )}
                  {currentStep === 3 && (
                    <>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <p>সঠিক মোবাইল নম্বর দিন</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <p>দ্রুত উত্তর দেওয়ার চেষ্টা করুন</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <p>নিরাপদ স্থানে দেখা করুন</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <p>আগাম টাকা নেবেন না</p>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Bottom AdSense Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 lg:mt-12"
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-3 border-b">
              <div className="flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
                <span className="text-sm font-medium text-purple-800">
                  স্পন্সর্ড বিজ্ঞাপন
                </span>
                <Star className="w-4 h-4 text-purple-600 ml-2" />
              </div>
            </div>

            {/* Mobile AdSense */}
            <div className="lg:hidden p-4 min-h-[200px] bg-gray-50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-sm text-gray-600 mb-2">মোবাইল বিজ্ঞাপন</p>
                <div className="text-xs text-gray-400 bg-white px-2 py-1 rounded border">
                  [AdSense Mobile 320x100]
                </div>
              </div>
            </div>

            {/* Desktop AdSense */}
            <div className="hidden lg:flex p-6 min-h-[150px] bg-gray-50 items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-lg text-gray-700 mb-3">
                  ডেস্কটপ বিজ্ঞাপন স্থান
                </p>
                <div className="text-sm text-gray-400 bg-white px-4 py-2 rounded border">
                  [AdSense Desktop 728x90 Leaderboard]
                </div>
              </div>
            </div>

            {/* Support Message */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 border-t">
              <p className="text-center text-xs text-gray-600">
                বিজ্ঞাপনের মাধ্যমে আমরা আমাদের ফ্রি সেবা চালিয়ে যেতে পারি।
                আপনার সাপোর্টের জন্য ধন্যবাদ! 💝
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default PostBookForm;
