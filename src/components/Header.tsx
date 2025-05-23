"use client";
import Link from "next/link";
import { Icons } from "./icons";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="max-md:fixed max-md:top-0 max-md:left-0 max-md:right-0 z-50 bg-white py-4 px-4 sm:px-6 flex justify-between items-center 2xl:px-28">
      <div className="flex items-center">
        <Link href="/">
          <div className="relative h-8 sm:h-10 w-32 sm:w-40">
            <Icons.supreme className="w-full h-full" />
          </div>
        </Link>
      </div>
      
      {/* Mobile menu button */}
      <button 
        className="lg:hidden flex items-center p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      
      {/* Desktop navigation */}
      <div className="hidden lg:flex items-center space-x-8">
        <Link href="/contact" className="bg-sky-400 text-white px-6 py-2 rounded-full transition-colors">
          Contact Us
        </Link>
        <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <Icons.linkedin/>
        </Link>
        <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="flex flex-row gap-1 items-center">
          <Icons.translate/>
          <button className="flex text-sm items-center text-gray-800">
          <span>ENG</span>
        </button>
        </Link>
        
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 flex flex-col items-center space-y-4">
          <Link 
            href="/contact" 
            className="bg-sky-400 text-white px-6 py-2 rounded-full transition-colors w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
          <div className="flex items-center justify-center space-x-6 w-full">
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Icons.linkedin/>
            </Link>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="flex flex-row gap-1 items-center">
              <Icons.translate/>
              <button className="flex text-sm items-center text-gray-800">
              <span>ENG</span>
            </button>
            </Link>
            
          </div>
        </div>
      )}
    </header>
  );
}