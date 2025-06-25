export interface Book {
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