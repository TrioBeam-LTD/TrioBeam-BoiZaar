import type { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "product";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  price?: number;
  currency?: string;
  availability?: "in_stock" | "out_of_stock";
}

export function generateSEO({
  title = "বইজার.কম - বাংলাদেশের সবচেয়ে বড় একাডেমিক বই মার্কেটপ্লেস",
  description = "পুরানো বই কিনুন ও বিক্রি করুন সহজেই। HSC, SSC, অনার্স, মাস্টার্স, মেডিকেল ও ইঞ্জিনিয়ারিং বই পাবেন সাশ্রয়ী দামে। বিনামূল্যে বই পোস্ট করুন।",
  keywords = [
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
    "ঢাকা",
    "চট্টগ্রাম",
    "সিলেট",
    "বই মার্কেটপ্লেস",
    "সেকেন্ড হ্যান্ড বই",
    "বই এক্সচেঞ্জ",
  ],
  image = "/og-image.png",
  url = "https://boibikroy.com",
  type = "website",
  author,
  price,
  currency = "BDT",
  availability = "in_stock",
}: SEOProps = {}): Metadata {
  const siteName = "বইজার.কম";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: author ? [{ name: author }] : undefined,
    creator: siteName,
    publisher: siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(url),
    alternates: {
      canonical: url,
      languages: {
        "bn-BD": url,
        "en-US": url,
      },
    },
    // openGraph: {
    //   title: fullTitle,
    //   description,
    //   url,
    //   siteName,
    //   images: [
    //     {
    //       url: image,
    //       width: 1200,
    //       height: 630,
    //       alt: title,
    //     },
    //   ],
    //   locale: "bn_BD",
    //   type,
    //   publishedTime,
    //   modifiedTime,
    // },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@boibikroy",
      site: "@boibikroy",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
      yahoo: "your-yahoo-verification-code",
    },
  };

  // Add product-specific metadata for book pages
  if (type === "product" && price) {
    metadata.other = {
      "product:price:amount": price.toString(),
      "product:price:currency": currency,
      "product:availability": availability,
      "product:condition": "used",
      "product:category": "Books",
    };
  }

  return metadata;
}

// Structured data generators
export function generateBookStructuredData(book: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    author: {
      "@type": "Person",
      name: book.author,
    },
    bookEdition: book.edition,
    genre: book.subject,
    inLanguage: "bn",
    offers: {
      "@type": "Offer",
      price: book.price,
      priceCurrency: "BDT",
      availability: "https://schema.org/InStock",
      condition: `https://schema.org/${book.condition.replace(
        " ",
        ""
      )}Condition`,
      seller: {
        "@type": "Person",
        name: book.sellerName,
      },
    },
    image: book.image,
    description: book.description,
    isbn: book.isbn || undefined,
    numberOfPages: book.pages || undefined,
    publisher: book.publisher || undefined,
    datePublished: book.publishDate || undefined,
  };
}

export function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "বইজার.কম",
    alternateName: "BoiBikroy.com",
    url: "https://boibikroy.com",
    logo: "https://boibikroy.com/logo.png",
    description: "বাংলাদেশের সবচেয়ে বড় একাডেমিক বই মার্কেটপ্লেস",
    foundingDate: "2024",
    founders: [
      {
        "@type": "Person",
        name: "BoiBikroy Team",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "BD",
      addressRegion: "Dhaka",
      addressLocality: "Dhaka",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+880-1712345678",
      contactType: "customer service",
      availableLanguage: ["Bengali", "English"],
    },
    sameAs: [
      "https://facebook.com/boibikroy",
      "https://twitter.com/boibikroy",
      "https://instagram.com/boibikroy",
    ],
  };
}

export function generateWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "বইজার.কম",
    url: "https://boibikroy.com",
    description: "বাংলাদেশের সবচেয়ে বড় একাডেমিক বই মার্কেটপ্লেস",
    inLanguage: "bn",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://boibikroy.com/books?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbStructuredData(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
