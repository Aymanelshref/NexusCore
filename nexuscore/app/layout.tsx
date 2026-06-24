import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexusCore | Ecosystem Platform",
  description: "One operating system for all your business",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Tajawal', 'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}