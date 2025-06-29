import { generateSEO } from "@/lib/seo";
import type { Metadata } from "next";
import BookDetailPageclient from "./BookDetailPageClient";

export async function generateMetadat({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const bookId = params.id;

  return generateSEO({
    title: `বইয়ের বিস্তারিত - বইবিক্রয়.কম`,
    description: `বইয়ের সম্পূর্ণ তথ্য, দাম, অবস্থা এবং বিক্রেতার যোগাযোগ। নিরাপদে বই কিনুন বইবিক্রয়.কম থেকে।`,
    keywords: ["বই বিস্তারিত", "বই কিনুন", "বই তথ্য", "বিক্রেতা যোগাযোগ"],
    url: `https://boibikroy.com/books/${bookId}`,
    type: "product",
  });
}

export default function BookDetailPage() {
  return <BookDetailPageclient />;
}
