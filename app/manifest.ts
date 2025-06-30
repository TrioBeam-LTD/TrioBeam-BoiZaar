import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "বইজার.কম - বাংলাদেশের সবচেয়ে বড় একাডেমিক বই মার্কেটপ্লেস",
    short_name: "বইজার.কম",
    description: "পুরানো বই কিনুন ও বিক্রি করুন সহজেই",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    orientation: "portrait",
    scope: "/",
    lang: "bn",
    dir: "ltr",
    categories: ["books", "education", "marketplace", "shopping"],
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
