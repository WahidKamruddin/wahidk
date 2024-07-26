import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['100','200','300','400','500','600'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Wahid's Code Cafe",
  description: "Wahid Kamruddin's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
