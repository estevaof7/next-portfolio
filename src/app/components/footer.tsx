'use client';

import { footerData } from '@/data/footer-data';
import { FooterItemModel } from '@/models/footer-model';
import { useTailwind } from '@/providers/tailwind-compatibility';
import { tailwindCompatibility } from '@/utils/tailwind-compatibility';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const { isTailwindCompatible } = useTailwind();
  const textGray300 =
    'text-' + tailwindCompatibility(isTailwindCompatible, 'gray-300');

  return (
    <footer
      id="contact"
      // className={`bg-black text-${tailwindCompatibility(isTailwindCompatible, 'gray-300')}`}
      className={`bg-black ${textGray300}`}
    >
      <p className="text-white">
        teste: {tailwindCompatibility(isTailwindCompatible, 'gray-300')}
      </p>
      <div className="max-w-6xl mx-auto pt-10 md:pt-16 lg:pt-20 pb-8 md:pb-10 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 lg:gap-4">
          {footerData.map((item: FooterItemModel, index: number) => (
            <div key={index} className="flex items-center justify-center">
              {item.link.href ? (
                <Link
                  href={item.link.href}
                  className="flex items-center gap-2 sm:gap-3 hover:text-white transition-colors"
                  target="_blank"
                >
                  <Image
                    src={item.logoPath}
                    alt="Logo"
                    width={20}
                    height={20}
                    className="sm:w-6 sm:h-6"
                  />
                  <span className="text-sm sm:text-base">{item.link.text}</span>
                </Link>
              ) : (
                <div className="flex items-center gap-2 sm:gap-3">
                  <Image
                    src={item.logoPath}
                    alt="Logo"
                    width={20}
                    height={20}
                    className="sm:w-6 sm:h-6"
                  />
                  <span className="text-sm sm:text-base">{item.link.text}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
