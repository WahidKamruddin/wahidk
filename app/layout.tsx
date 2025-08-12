import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['100','200','300','400','500','600'],
  subsets: ['latin']
});

export const metadata = {
  title: "Wahid Kamruddin | Full-Stack Developer & Designer",
  description:
    "Portfolio of Wahid Kamruddin — Full-Stack Developer & Designer specializing in Next.js, TypeScript, and modern UI/UX. View projects, skills, and contact details.",
  keywords:
    "Wahid Kamruddin, Full Stack Developer, Next.js Developer, TypeScript, Web Developer Portfolio, UI UX Designer, Software Engineer",
  authors: [{ name: "Wahid Kamruddin" }],
  openGraph: {
    title: "Wahid Kamruddin | Full-Stack Developer & Designer",
    description:
      "Full-Stack Developer & Designer specializing in Next.js, TypeScript, and modern UI/UX.",
    url: "https://wahidkamruddin.vercel.app",
    siteName: "Wahid Kamruddin Portfolio",
    images: [
      {
        url: "https://wahidkamruddin.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview of Wahid Kamruddin",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wahid Kamruddin | Full-Stack Developer & Designer",
    description:
      "Full-Stack Developer & Designer specializing in Next.js, TypeScript, and modern UI/UX.",
    images: ["https://wahidkamruddin.com/og-image.jpg"],
  },
  metadataBase: new URL("https://wahidkamruddin.vercel.app"),
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
