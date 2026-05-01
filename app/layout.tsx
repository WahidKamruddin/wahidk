import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['100','200','300','400','500','600'],
  subsets: ['latin']
});

const siteUrl = "https://wahidkamruddin.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Wahid Kamruddin | Full-Stack Developer & Designer",
  description:
    "Portfolio of Wahid Kamruddin — Full-Stack Developer & Designer specializing in Next.js, TypeScript, and modern UI/UX. View projects, skills, and contact details.",
  keywords:
    "Wahid Kamruddin, Full Stack Developer, Next.js Developer, TypeScript, Web Developer Portfolio, UI UX Designer, Software Engineer",
  authors: [{ name: "Wahid Kamruddin" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Wahid Kamruddin | Full-Stack Developer & Designer",
    description:
      "Full-Stack Developer & Designer specializing in Next.js, TypeScript, and modern UI/UX.",
    url: siteUrl,
    siteName: "Wahid Kamruddin Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wahid Kamruddin | Full-Stack Developer & Designer",
    description:
      "Full-Stack Developer & Designer specializing in Next.js, TypeScript, and modern UI/UX.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Wahid Kamruddin",
  url: siteUrl,
  jobTitle: "Full-Stack Developer & Designer",
  description:
    "Full-Stack Developer & Designer specializing in Next.js, TypeScript, and modern UI/UX.",
  sameAs: [
    "https://www.linkedin.com/in/wahid-kamruddin/",
    "https://github.com/WahidKamruddin",
    "https://www.instagram.com/wahidkamruddin/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
