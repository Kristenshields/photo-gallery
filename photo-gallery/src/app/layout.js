import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900 min-h-screen`}
      >
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="bg-secondary-200 shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold">Photo Gallery</h1>
              <nav>
                <ul className="flex space-x-4">
                  <li>
                    <a href="/" className="text-gray-600 hover:text-gray-900">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-gray-600 hover:text-gray-900">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-gray-600 hover:text-gray-900">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 container mx-auto px-4 py-8">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-secondary-200 py-4 mt-auto">
            <div className="container mx-auto text-center text-gray-600 text-sm">
              © {new Date().getFullYear()} Create Next App. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
