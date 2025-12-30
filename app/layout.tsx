import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iamxeshandev.github.io"),
  title: {
    default: "Zeshan Mehmood",
    template: "%s | Zeshan Mehmood",
  },
  description: "Personal portfolio of Zeshan Mehmood - Software Engineer & Web Developer",
  keywords: ["Zeshan Mehmood", "Portfolio", "Web Developer", "Software Engineer", "Full Stack Developer"],
  authors: [{ name: "Zeshan Mehmood", url: "https://iamxeshandev.github.io" }],
  creator: "Zeshan Mehmood",
  openGraph: {
    title: "Zeshan Mehmood",
    description: "Personal portfolio of Zeshan Mehmood",
    type: "website",
    locale: "en",
    siteName: "Zeshan Mehmood",
    url: "https://iamxeshandev.github.io",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zeshan Mehmood Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeshan Mehmood",
    description: "Personal portfolio of Zeshan Mehmood",
    creator: "@iamxeshandev",
    site: "@iamxeshandev",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="https://iamxeshandev.github.io/og-image.jpg" />
        <meta name="twitter:image" content="https://iamxeshandev.github.io/og-image.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
