'use client';

import { footerData } from '@/data/footer-data';
import { FooterItemModel } from '@/models/footer-model';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-gray-300">
      <div className="max-w-6xl mx-auto pt-10 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-4">
          {footerData.map((item: FooterItemModel, index: number) => (
            <div
              key={index}
              className="flex items-center justify-center sm:justify-start"
            >
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
