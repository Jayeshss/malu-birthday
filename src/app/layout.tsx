import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Happy Birthday, Maluti",
  description: "A little birthday surprise made with memories, love and moments.",
  authors: [{ name: "Koche" }],
  openGraph: {
    title: "Happy Birthday, Maluti",
    description: "A little birthday surprise made with memories, love and moments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ backgroundColor: "#faf8f4" }}>{children}</body>
    </html>
  );
}
