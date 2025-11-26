'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HomeHeader() {
  return (
    <div className="w-full pt-[24px] relative z-50">
      <div className="w-full py-[13px] relative rounded-2xl flex justify-between items-center overflow-visible">
        {/* Logo */}
        <Link href="/" className="flex justify-start items-center">
          <Image
            src="/ByeBailTypo.svg"
            alt="ByeBail"
            width={120}
            height={33}
            className="h-8 w-auto"
          />
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
            className="hidden lg:flex h-10 px-5 rounded-[105px] bg-[#FE8253] hover:bg-[#e67349] text-white font-semibold text-sm items-center justify-center cursor-pointer"
            style={{
              fontFamily: 'var(--font-crimson-pro), serif',
              fontSize: '14px',
              lineHeight: '1',
              boxShadow: '0 0 8.8px 0 #DEE3E7 inset, 0 -21px 20.8px 0 rgba(236, 72, 9, 0.37) inset, 0 0 80.5px 0 rgba(236, 72, 9, 0.28)',
            }}
          >
            Je dis Bye à mon Bail
          </Link>

          {/* Mobile Menu Icon */}
          <button className="lg:hidden w-6 h-6 relative flex items-center justify-center cursor-pointer">
            <Image
              src="/images/home/List.svg"
              alt="Menu"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
