import React from "react";
import Link from "next/link";
import { Gruppo } from "next/font/google";

const gruppo = Gruppo({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: "400",
});

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white overflow-hidden relative">
      {/* Animated gradient blur effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#fe9f8e] blur-[128px] animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#f47c66] blur-[128px] animate-pulse delay-700"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-5 h-5 bg-[#f47c66] font-semibold rounded-full"></div>
            <span
              className={`${gruppo.className} ml-2 text-3xl font-black relative -top-[2px]`}
            >
              BeautyPool
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button className="bg-[#f47c66] text-lg font-semibold text-white px-6 py-2 rounded-full hover:bg-[#e5715d] transition-colors">
              Sign up for free
            </button>
            <Link
              href="#"
              className="hover:text-gray-900 transition-colors text-lg text-black font-semibold"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="hover:text-gray-900 transition-colors text-lg text-black font-semibold"
            >
              Log In
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24 text-center">
        <h1
          className={`${gruppo.className} text-black text-4xl lg:text-7xl font-bold mb-8 animate-fade-in`}
        >
          The Leading Software for{" "}
          <span className="bg-gradient-to-r from-[#e27967] to-[#e5715d] bg-clip-text text-transparent">
            Salons and Spas.
          </span>
        </h1>
        <p className="text-black text-lg font-semibold max-w-2xl mx-auto mb-12 animate-fade-in-delay">
          Easy-to-use, flexible, and powerful booking software for your
          business—no subscription required!
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-[#f47c66] text-lg font-semibold text-white px-5 py-2 rounded-full hover:bg-[#e5715d] transition-all transform hover:scale-105">
            Get started for free
          </button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
