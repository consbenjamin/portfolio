import { Inter } from "next/font/google"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Constantino Abba Portfolio",
  description: "Showcase of my skills and projects as a Full-stack developer",
  icons: "/favicon.svg",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}