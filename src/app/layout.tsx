import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

export const metadata = {
  title: 'Santhosh | Freelance Portfolio',
  description: 'Freelance-ready developer profile',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <header className="bg-gray-900 text-white py-6 text-center">
          <h1 className="text-3xl font-bold">Santhosh Kumar</h1>
          <p className="text-lg mt-2">Senior Software Engineer | Freelance Ready</p>
          <nav className="mt-4 space-x-6">
            <a href="/about" className="hover:underline text-blue-400">About</a>
            <a href="/projects" className="hover:underline text-blue-400">Projects</a>
            <a href="/contact" className="hover:underline text-blue-400">Contact</a>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto px-6 py-12">{children}</main>
        <footer className="text-center py-4 bg-gray-200 text-sm">
          &copy; 2025 Santhosh Kumar. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
