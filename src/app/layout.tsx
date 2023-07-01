import "./globals.css";
import { Inter } from "next/font/google";
import MyHeader from "@/components/layout/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChaseCart",
  description: "A place where you can find anything you need.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyHeader />
        <main className="px-20">{children}</main>
      </body>
    </html>
  );
}
