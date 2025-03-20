import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import BgAnimation from "@/components/Bg-animation";

export const metadata: Metadata = {
  title: "Zuhair bin redha Smart Card",
  description: "Created By Hassan Zohaib",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <BgAnimation />
      </body>
    </html>
  );
}
