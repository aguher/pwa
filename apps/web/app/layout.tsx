import Navbar from "ui/components/Navbar";
import "ui/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar />
      <body>{children}</body>
    </html>
  );
}
