import Footer from "@/components/Custom/Footer";
import Navber from "@/components/Custom/Navber";
import {
  generateOrganizationStructuredData,
  generateSEO,
  generateWebsiteStructuredData,
} from "@/lib/seo";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = generateSEO({
  title: "বইবিক্রয়.কম - বাংলাদেশের সবচেয়ে বড় একাডেমিক বই মার্কেটপ্লেস",
  description:
    "পুরানো বই কিনুন ও বিক্রি করুন সহজেই। HSC, SSC, অনার্স, মাস্টার্স, মেডিকেল ও ইঞ্জিনিয়ারিং বই পাবেন সাশ্রয়ী দামে। বিনামূল্যে বই পোস্ট করুন।",
  url: "https://boibikroy.com",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationData = generateOrganizationStructuredData();
  const websiteData = generateWebsiteStructuredData();

  return (
    <html lang="bn" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteData),
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
      </head>

      <body className={inter.className}>
        <Navber />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
