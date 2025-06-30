import { generateSEO, generateWebsiteStructuredData } from "@/lib/seo";
import HomePageClient from "./HomePageClient";

export const metadata = generateSEO({
  title: "বইজার.কম - বাংলাদেশের সবচেয়ে বড় একাডেমিক বই মার্কেটপ্লেস",
  description:
    "পুরানো বই কিনুন ও বিক্রি করুন সহজেই। ১০,০০০+ বই বিজ্ঞাপন, ৫,০০০+ সক্রিয় ব্যবহারকারী। HSC, SSC, অনার্স, মেডিকেল ও ইঞ্জিনিয়ারিং বই পাবেন সাশ্রয়ী দামে।",
  keywords: [
    "বই কিনুন",
    "বই বিক্রি",
    "পুরানো বই",
    "একাডেমিক বই",
    "HSC বই",
    "SSC বই",
    "অনার্স বই",
    "মেডিকেল বই",
    "ইঞ্জিনিয়ারিং বই",
    "বাংলাদেশ",
  ],
  url: "https://boibikroy.com",
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebsiteStructuredData()),
        }}
      />
      <HomePageClient />
    </>
  );
}
