import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <BookOpen className="w-12 h-12 text-blue-600" />
        </div>

        <h1 className="text-6xl font-bold text-gray-900 mb-4">৪০৪</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">পেজ পাওয়া যায়নি</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি। এটি সরিয়ে ফেলা হয়েছে বা URL ভুল হতে পারে।
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Home className="w-4 h-4 mr-2" />
              হোম পেজে যান
            </Button>
          </Link>
          <Link href="/books">
            <Button variant="outline">
              <Search className="w-4 h-4 mr-2" />
              বই খুঁজুন
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
