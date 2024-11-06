import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { getServerSession } from "next-auth";
import Footer from "@/components/Footer";
import SessionProvider from "@/lib/utils/SessionProvider";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "721 Sportswear",
  description: "No. 1 sublimation printing service in the town.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <div className="flex-1 flex flex-col h-full">
            <Header />
            {children}
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
