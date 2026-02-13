import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Modern Next.js Dashboard",
  description: "A professional dashboard layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-[#F8FAFC] [--header-h:64px]`}
      >
        <Sidebar />
        <Header />

        <main
          className="
            ml-20
            pt-[var(--header-h)]
            min-h-screen
            transition-all duration-300
          "
        >
          {children}
        </main>
      </body>
    </html>
  );
}
