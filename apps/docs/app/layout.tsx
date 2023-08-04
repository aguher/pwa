import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "shadcn";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar isDocsApp />
        {children}
      </body>
    </html>
  );
}
