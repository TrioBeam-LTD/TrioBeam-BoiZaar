import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const loginPageData = [
  { number: "১০,০০০+", label: "বই বিজ্ঞাপন" },
  { number: "৫,০০০+", label: "সক্রিয় ব্যবহারকারী" },
  { number: "৬৪", label: "জেলায় সেবা" },
];
