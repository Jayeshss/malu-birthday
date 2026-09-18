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
      <body style={{ backgroundColor: "#faf8f4" }}>{children}</body>
    </html>
  );
}
