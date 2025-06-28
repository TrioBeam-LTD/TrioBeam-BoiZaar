"use client";

import { motion } from "framer-motion";
import { Sparkles, Star, Zap } from "lucide-react";
import { useEffect } from "react";

interface GoogleAdSenseProps {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  className?: string;
  title?: string;
  showDecorations?: boolean;
  size?: "small" | "medium" | "large" | "leaderboard" | "mobile";
  variant?: "yellow" | "green" | "purple" | "blue";
}

function GoogleAdSense({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  className = "",
  title = "স্পন্সর্ড",
  showDecorations = true,
  size = "medium",
  variant = "yellow",
}: GoogleAdSenseProps) {
  useEffect(() => {
    try {
      // Load AdSense script if not already loaded
      if (!window.adsbygoogle) {
        const script = document.createElement("script");
        script.async = true;
        script.src =
          "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID";
        script.crossOrigin = "anonymous";
        document.head.appendChild(script);
      }

      // Push ad to AdSense
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative ${className}`}
    >
      {/* Decorative Header */}
      {showDecorations && (
        <div className="flex items-center justify-center mb-4">
          <div className="flex items-center bg-gradient-to-r from-yellow-100 to-orange-100 px-4 py-2 rounded-full border border-yellow-200">
            <Sparkles className="w-4 h-4 text-yellow-600 mr-2" />
            <span className="text-sm font-medium text-yellow-800">{title}</span>
            <Star className="w-4 h-4 text-yellow-600 ml-2" />
          </div>
        </div>
      )}

      {/* AdSense Container */}
      <div className="relative bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        {showDecorations && (
          <>
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-8 h-8">
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-blue-300 rounded-tl-lg"></div>
            </div>
            <div className="absolute top-0 right-0 w-8 h-8">
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-blue-300 rounded-tr-lg"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-8 h-8">
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-blue-300 rounded-bl-lg"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8">
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-blue-300 rounded-br-lg"></div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-4 right-4"
            >
              <Zap className="w-5 h-5 text-blue-400 opacity-60" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-4 left-4"
            >
              <Star className="w-4 h-4 text-yellow-400 opacity-60" />
            </motion.div>
          </>
        )}

        {/* Actual AdSense Ad */}
        <div className="p-4">
          <ins
            className="adsbygoogle block"
            style={{ display: "block" }}
            data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
            data-ad-slot={adSlot}
            data-ad-format={adFormat}
            data-full-width-responsive={fullWidthResponsive.toString()}
          />
        </div>

        {/* Fallback content when ads are blocked */}
        <div className="hidden ad-blocked:block p-8 text-center bg-gray-50">
          <div className="max-w-sm mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              আমাদের সাপোর্ট করুন
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              বিজ্ঞাপন দেখে আমাদের ফ্রি সেবা চালু রাখতে সাহায্য করুন
            </p>
            <div className="text-xs text-gray-500">Ad blocker detected</div>
          </div>
        </div>
      </div>

      {/* Support message */}
      {showDecorations && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-3"
        >
          <p className="text-xs text-gray-500">
            বিজ্ঞাপনের মাধ্যমে আমরা আমাদের ফ্রি সেবা চালিয়ে যেতে পারি
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

// Declare global adsbygoogle for TypeScript
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default GoogleAdSense;
