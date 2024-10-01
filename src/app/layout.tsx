import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import LiveChat from "@/components/live-chat/LiveChat";
import FBMessenger from "@/components/live-chat/FBMessenger";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Visa Bunny",
  description: "Designed & Developed By Techwoozy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <LiveChat />
          <Header />
          {children}
          <FBMessenger />
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
