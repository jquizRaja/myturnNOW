import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import ClientOnly from "@/components/ClientOnly";
// import Modal from "@/components/modals/Modal";
import RegisterModal from "@/components/modals/RegisterModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "myturnNOW",
  description: "myturnNOW",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ClientOnly> */}
        <RegisterModal/>
        <Navbar />
        {/* </ClientOnly> */}
        {children}
      </body>
    </html>
  );
}
