import type { Metadata } from "next";
import "./globals.css";




export const metadata: Metadata = {
  title: "Mehataz Khandokar | Full-Stack Web Developer & Problem Solver",
  description: "Mehataz Khandokar is a full-stack web developer with expertise in React, Next.js, Node.js, and Express.js. A problem solver at heart, he specializes in creating innovative web applications and management platforms. Discover his projects today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
