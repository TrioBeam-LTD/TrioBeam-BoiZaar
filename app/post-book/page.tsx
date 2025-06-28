import PostBookForm from "@/components/Custom/PostBookForm";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "বই বিক্রি করুন",
  description:
    "আপনার পুরানো বই বিক্রি করুন। সহজ ও নিরাপদ প্রক্রিয়ায় বই পোস্ট করুন এবং ক্রেতা খুঁজে নিন।",
  keywords: ["বই বিক্রি", "পুরানো বই", "বই পোস্ট", "বই বিজ্ঞাপন", "বাংলাদেশ"],
});

function PostBookPage() {
  return (
    <div>
      <PostBookForm />
    </div>
  );
}

export default PostBookPage;
