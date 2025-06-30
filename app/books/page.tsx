import { generateSEO } from "@/lib/seo";
import BookPage from "./BooksClientPage";

export const matadata = generateSEO({
  title: "সব বই - বইবিক্রয়.কম",
  description:
    "বাংলাদেশের সবচেয়ে বড় বই কালেকশন। HSC, SSC, অনার্স, মাস্টার্স, মেডিকেল ও ইঞ্জিনিয়ারিং বই খুঁজুন। ফিল্টার করুন দাম, অবস্থা ও অবস্থান অনুযায়ী।",
  keywords: [
    "বই খুঁজুন",
    "বই কিনুন",
    "একাডেমিক বই",
    "পুরানো বই",
    "সেকেন্ড হ্যান্ড বই",
    "বই ফিল্টার",
  ],
  url: "https://boibikroy.com/books",
});

export default function BooksPage() {
  return <BookPage />;
}
