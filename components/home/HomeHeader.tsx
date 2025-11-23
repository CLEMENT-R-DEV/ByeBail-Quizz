'use client';

import Link from 'next/link';

export default function HomeHeader() {
  return (
    <div className="w-full h-24 relative z-50">
      <div className="w-full px-4 py-3 lg:py-[12px] relative top-[24px] rounded-2xl flex justify-between items-center overflow-hidden">
        {/* Logo */}
        <Link href="/" className="flex justify-start items-center gap-2">
          <div className="w-10 h-10 relative bg-blue-900 rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
            <div className="w-3 h-7 absolute left-[14.28px] top-[6px] justify-center text-white text-xl font-semibold font-['Crimson_Pro'] leading-7">
              B
            </div>
          </div>
          <div className="w-[81px] inline-flex flex-col justify-start items-start">
            <div className="self-stretch h-[18px] justify-center text-blue-900 lg:text-[#6A6A6A] text-lg font-semibold font-['Bricolage_Grotesque'] leading-[18px]">
              ByeBail
            </div>
            <div className="justify-center text-[#1E3A8A] text-xs font-normal font-['Optima'] leading-4 tracking-[-0.36px]">
              by Brauman & K
            </div>
          </div>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex absolute left-[312px] top-[13px] justify-start items-center">
          <Link
            href="#comment-ca-marche"
            className="px-4 py-2.5 rounded-lg flex justify-center items-center gap-2.5"
          >
            <div className="text-center justify-center text-gray-900 text-sm font-medium font-['Satoshi'] leading-5">
              Comment ça marche
            </div>
          </Link>
          <Link
            href="/quiz/1"
            className="px-4 py-2.5 rounded-lg flex justify-center items-center gap-2.5"
          >
            <div className="text-center justify-center text-gray-900 text-sm font-medium font-['Satoshi'] leading-5">
              Quiz
            </div>
          </Link>
          <Link
            href="#temoignages"
            className="px-4 py-2.5 rounded-lg flex justify-center items-center gap-2.5"
          >
            <div className="text-center justify-center text-gray-900 text-sm font-medium font-['Satoshi'] leading-5">
              Témoignages
            </div>
          </Link>
          <Link
            href="#pourquoi-le-neuf"
            className="px-4 py-2.5 rounded-lg flex justify-center items-center gap-2.5"
          >
            <div className="text-center justify-center text-gray-900 text-sm font-medium font-['Satoshi'] leading-5">
              Pourquoi le neuf
            </div>
          </Link>
          <Link
            href="#faq"
            className="px-4 py-2.5 rounded-lg flex justify-center items-center gap-2.5"
          >
            <div className="text-center justify-center text-gray-900 text-sm font-medium font-['Satoshi'] leading-5">
              FAQ
            </div>
          </Link>
        </nav>

        {/* CTA Button (Desktop) / Menu Icon (Mobile) */}
        <div className="flex items-center">
          {/* Desktop CTA */}
          <Link
            href="/quiz/1"
            className="hidden lg:flex px-4 py-2.5 rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] justify-center items-center gap-2.5"
            style={{
              background: 'linear-gradient(180deg, #F5923D 0%, #F7603A 324.04%), #6A6A6A'
            }}
          >
            <div className="text-center justify-center text-white text-sm font-normal font-['Optima'] leading-5">
              Je dis Bye à mon Bail
            </div>
          </Link>

          {/* Mobile Menu Icon */}
          <button className="lg:hidden w-6 h-6 relative overflow-hidden">
            <div className="w-5 h-3.5 absolute left-[2.62px] top-[4.88px] bg-blue-900" />
          </button>
        </div>
      </div>
    </div>
  );
}
