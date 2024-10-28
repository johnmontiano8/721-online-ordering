"use client"; // Ensure this is a client component

import { usePathname } from "next/navigation"; // Import usePathname
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isDashboard = pathname === "/admin/dashboard"; // Check if the path is the dashboard

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Show only logo in Header if on the dashboard */}
        <Header showLogoOnly={isDashboard} />

        <div className="flex-1 flex flex-col h-full">{children}</div>

        {/* Hide Footer if on the dashboard */}
        {!isDashboard && <Footer />}
      </body>
    </html>
  );
}
