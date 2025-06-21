import { create } from "zustand"

interface Book {
  id: string
  title: string
  author: string
  image: string
  price: number
  originalPrice?: number
  condition: "New" | "Like New" | "Good" | "Fair" | "Poor"
  edition: string
  subject: string
  class: string
  institution: string
  department?: string
  semester?: string
  district: string
  division: string
  description: string
  contactPhone: string
  contactEmail: string
  sellerName: string
  postedDate: string
  views: number
  isFeatured: boolean
  isActive: boolean
  photos: string[]
}

interface BookStore {
  books: Book[]
  featuredBooks: Book[]
  filteredBooks: Book[]
  filters: {
    search: string
    class: string
    subject: string
    institution: string
    district: string
    condition: string
    priceRange: number[]
    sortBy: string
  }
  setFilters: (filters: Partial<BookStore["filters"]>) => void
}

const bangladeshiBooks: Book[] = [
  // HSC Books
  {
    id: "1",
    title: "উচ্চতর গণিত (Higher Mathematics)",
    author: "ড. মোহাম্মদ আমীর হোসেন",
    image: "/placeholder.svg?height=300&width=200",
    price: 180,
    originalPrice: 350,
    condition: "Good",
    edition: "2023 Edition",
    subject: "Mathematics",
    class: "HSC",
    institution: "All Boards",
    district: "Dhaka",
    division: "Dhaka",
    description: "HSC উচ্চতর গণিত বই। সব অধ্যায় আছে। কিছু পেন্সিল মার্ক আছে কিন্তু পড়তে কোন সমস্যা নেই।",
    contactPhone: "01712345678",
    contactEmail: "student1@email.com",
    sellerName: "রাহুল আহমেদ",
    postedDate: "2024-01-15",
    views: 45,
    isFeatured: true,
    isActive: true,
    photos: ["/placeholder.svg?height=300&width=200"],
  },
  {
    id: "2",
    title: "পদার্থবিজ্ঞান ১ম পত্র (Physics 1st Paper)",
    author: "ড. শাহজাহান তপন",
    image: "/placeholder.svg?height=300&width=200",
    price: 150,
    originalPrice: 280,
    condition: "Like New",
    edition: "2023 Edition",
    subject: "Physics",
    class: "HSC",
    institution: "All Boards",
    district: "Chittagong",
    division: "Chittagong",
    description: "HSC পদার্থবিজ্ঞান ১ম পত্র। প্রায় নতুনের মতো। খুব কম ব্যবহার করা হয়েছে।",
    contactPhone: "01812345678",
    contactEmail: "physics_student@email.com",
    sellerName: "সারা খান",
    postedDate: "2024-01-14",
    views: 32,
    isFeatured: false,
    isActive: true,
    photos: ["/placeholder.svg?height=300&width=200"],
  },
  {
    id: "3",
    title: "রসায়ন ২য় পত্র (Chemistry 2nd Paper)",
    author: "ড. মোহাম্মদ আলী",
    image: "/placeholder.svg?height=300&width=200",
    price: 120,
    originalPrice: 250,
    condition: "Good",
    edition: "2022 Edition",
    subject: "Chemistry",
    class: "HSC",
    institution: "All Boards",
    district: "Sylhet",
    division: "Sylhet",
    description: "HSC রসায়ন ২য় পত্র বই। কিছু হাইলাইট আছে। সব পেজ আছে।",
    contactPhone: "01912345678",
    contactEmail: "chem_lover@email.com",
    sellerName: "তানিয়া রহমান",
    postedDate: "2024-01-13",
    views: 28,
    isFeatured: false,
    isActive: true,
    photos: ["/placeholder.svg?height=300&width=200"],
  },

  // University Books - DU
  {
    id: "4",
    title: "Principles of Economics",
    author: "N. Gregory Mankiw",
    image: "/placeholder.svg?height=300&width=200",
    price: 800,
    originalPrice: 1500,
    condition: "Good",
    edition: "8th Edition",
    subject: "Economics",
    class: "Honours",
    institution: "Dhaka University",
    department: "Economics",
    semester: "1st Year",
    district: "Dhaka",
    division: "Dhaka",
    description: "DU Economics department এর জন্য। ভালো অবস্থায় আছে। কিছু নোট লেখা আছে।",
    contactPhone: "01612345678",
    contactEmail: "du_economics@email.com",
    sellerName: "মাহবুব হাসান",
    postedDate: "2024-01-12",
    views: 67,
    isFeatured: true,
    isActive: true,
    photos: ["/placeholder.svg?height=300&width=200"],
  },
  {
    id: "5",
    title: "Fundamentals of Computer Science",
    author: "Behrouz A. Forouzan",
    image: "/placeholder.svg?height=300&width=200",
    price: 600,
    originalPrice: 1200,
    condition: "Like New",
    edition: "5th Edition",
    subject: "Computer Science",
    class: "Honours",
    institution: "BUET",
    department: "CSE",
    semester: "1st Year",
    district: "Dhaka",
    division: "Dhaka",
    description: "BUET CSE department এর জন্য প্রয়োজনীয় বই। প্রায় নতুনের মতো অবস্থা।",
    contactPhone: "01512345678",
    contactEmail: "buet_cse@email.com",
    sellerName: "রাফি করিম",
    postedDate: "2024-01-11",
    views: 89,
    isFeatured: true,
    isActive: true,
    photos: ["/placeholder.svg?height=300&width=200"],
  },

  // SSC Books
  {
    id: "6",
    title: "গণিত (Mathematics) - ৯ম-১০ম শ্রেণি",
    author: "ড. মুনীর হাসান",
    image: "/placeholder.svg?height=300&width=200",
    price: 100,
    originalPrice: 200,
    condition: "Good",
    edition: "2023 Edition",
    subject: "Mathematics",
    class: "SSC",
    institution: "All Boards",
    district: "Rajshahi",
    division: "Rajshahi",
    description: "SSC গণিত বই। ৯ম-১০ম শ্রেণির জন্য। ভালো অবস্থায় আছে।",
    contactPhone: "01412345678",
    contactEmail: "ssc_math@email.com",
    sellerName: "নাদিয়া আক্তার",
    postedDate: "2024-01-10",
    views: 23,
    isFeatured: false,
    isActive: true,
    photos: ["/placeholder.svg?height=300&width=200"],
  },
  {
    id: "7",
    title: "বাংলা সাহিত্য - ৯ম-১০ম শ্রেণি",
    author: "বোর্ড কর্তৃক নির্ধারিত",
    image: "/placeholder.svg?height=300&width=200",
    price: 80,
    originalPrice: 150,
    condition: "Fair",
    edition: "2022 Edition",
    subject: "Bangla",
    class: "SSC",
    institution: "All Boards",
    district: "Khulna",
    division: "Khulna",
    description: "SSC বাংলা সাহিত্য বই। কিছু পুরানো কিন্তু সব পেজ আছে।",
    contactPhone: "01312345678",
    contactEmail: "bangla_book@email.com",
    sellerName: "ফারহানা বেগম",
    postedDate: "2024-01-09",
    views: 19,
    isFeatured: false,
    isActive: true,
    photos: ["/placeholder.svg?height=300&width=200"],
  },

  // Medical Books
  {
    id: "8",
    title: "Gray's Anatomy",
    author: "Henry Gray",
    image: "/placeholder.svg?height=300&width=200",
    price: 2500,
    originalPrice: 4500,
    condition: "Good",
    edition: "42nd Edition",
    subject: "Anatomy",
    class: "MBBS",
    institution: "Dhaka Medical College",
    department: "Medicine",
    semester: "1st Year",
    district: "Dhaka",
    division: "Dhaka",
    description: "Medical students এর জন্য অত্যাবশ্যক বই। ভালো অবস্থায় আছে।",
    contactPhone: "01212345678",
    contactEmail: "medical_student@email.com",
    sellerName: "ডা. সাকিব আহমেদ",
    postedDate: "2024-01-08",
    views: 156,
    isFeatured: true,
    isActive: true,
    photos: ["/placeholder.svg?height=300&width=200"],
  },

  // Engineering Books
  {
    id: "9",
    title: "Engineering Mechanics",
    author: "R.C. Hibbeler",
    image: "/placeholder.svg?height=300&width=200",
    price: 700,
    originalPrice: 1300,
    condition: "Good",
    edition: "14th Edition",
    subject: "Mechanics",
    class: "Engineering",
    institution: "RUET",
    department: "Civil Engineering",
    semester: "2nd Year",
    district: "Rajshahi",
    division: "Rajshahi",
    description: "Civil Engineering students এর জন্য। ভালো অবস্থায় আছে।",
    contactPhone: "01112345678",
    contactEmail: "civil_eng@email.com",
    sellerName: "ইঞ্জি. রাকিব",
    postedDate: "2024-01-07",
    views: 43,
    isFeatured: false,
    isActive: true,
    photos: ["/placeholder.svg?height=300&width=200"],
  },

  // More books...
  {
    id: "10",
    title: "Accounting Principles",
    author: "Jerry J. Weygandt",
    image: "/placeholder.svg?height=300&width=200",
    price: 500,
    originalPrice: 900,
    condition: "Like New",
    edition: "13th Edition",
    subject: "Accounting",
    class: "BBA",
    institution: "IBA, DU",
    department: "Business Administration",
    semester: "1st Year",
    district: "Dhaka",
    division: "Dhaka",
    description: "IBA DU তে পড়ানো হয়। প্রায় নতুনের মতো।",
    contactPhone: "01012345678",
    contactEmail: "iba_student@email.com",
    sellerName: "তাসনিম আহমেদ",
    postedDate: "2024-01-06",
    views: 34,
    isFeatured: false,
    isActive: true,
    photos: ["/placeholder.svg?height=300&width=200"],
  },
]

export const useBookStore = create<BookStore>((set, get) => ({
  books: bangladeshiBooks,
  featuredBooks: bangladeshiBooks.filter((book) => book.isFeatured),
  filteredBooks: bangladeshiBooks,
  filters: {
    search: "",
    class: "all",
    subject: "all",
    institution: "all",
    district: "all",
    condition: "all",
    priceRange: [0, 5000],
    sortBy: "newest",
  },
  setFilters: (newFilters) => {
    const filters = { ...get().filters, ...newFilters }
    let filtered = get().books.filter((book) => book.isActive)

    if (filters.search) {
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(filters.search.toLowerCase()) ||
          book.author.toLowerCase().includes(filters.search.toLowerCase()) ||
          book.subject.toLowerCase().includes(filters.search.toLowerCase()) ||
          book.institution.toLowerCase().includes(filters.search.toLowerCase()),
      )
    }

    if (filters.class !== "all") {
      filtered = filtered.filter((book) => book.class === filters.class)
    }

    if (filters.subject !== "all") {
      filtered = filtered.filter((book) => book.subject === filters.subject)
    }

    if (filters.institution !== "all") {
      filtered = filtered.filter((book) => book.institution === filters.institution)
    }

    if (filters.district !== "all") {
      filtered = filtered.filter((book) => book.district === filters.district)
    }

    if (filters.condition !== "all") {
      filtered = filtered.filter((book) => book.condition === filters.condition)
    }

    filtered = filtered.filter((book) => book.price >= filters.priceRange[0] && book.price <= filters.priceRange[1])

    switch (filters.sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "popular":
        filtered.sort((a, b) => b.views - a.views)
        break
      default:
        filtered.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime())
        break
    }

    set({ filters, filteredBooks: filtered })
  },
}))
