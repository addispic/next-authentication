import type { Metadata } from "next";
// style
import "./globals.css";

// components
// header
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "custom authentication",
  description: "Developed by addispic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-screen h-screen overflow-hidden flex flex-col">
          {/* header */}
          <Header />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
