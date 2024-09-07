"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky z-50 h-14 md:h-16  inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <div className="h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="flex h-14 md:h-16 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span className="text-green-600 text-2xl md:text-3xl lg:text-4xl">
              Portfolio
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden z-50"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex h-full items-center space-x-4">
            <div className="flex space-x-4 lg:space-x-8">
              <Link href="#Home" className="font-medium">
                Home
              </Link>
              <Link href="#aboutMe" className="font-medium">
                About Me
              </Link>
              <Link
                href="#project"
                className="font-medium pr-6 md:pr-8 lg:pr-10"
              >
                Project
              </Link>
            </div>
            <Button variant="default">Let&apos;s Contact</Button>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-14 left-0 right-0 bg-white border-b border-gray-200 py-2">
              <div className="flex flex-col space-y-2 px-4">
                <Link
                  href="#Home"
                  className="font-medium py-2"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
                <Link
                  href="#aboutMe"
                  className="font-medium py-2"
                  onClick={toggleMobileMenu}
                >
                  About Me
                </Link>
                <Link
                  href="#project"
                  className="font-medium py-2"
                  onClick={toggleMobileMenu}
                >
                  Project
                </Link>
                <Button
                  variant="default"
                  className="mt-2"
                  onClick={toggleMobileMenu}
                >
                  Let&apos;s Contact
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
