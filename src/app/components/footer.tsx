'use client';

import { footerData } from '@/data/footer-data';
import Image from 'next/image';

//ARRUMAR!!!
//RESPONSIVIDADE!!!

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-gray-300">
      <div className="max-w-6xl mx-auto flex justify-between pt-20 pb-10 px-4 md:px-6 lg:px-8">
        {footerData.map((item, index) => (
          <div key={index} className="flex items-center">
            <a href={item.link.href} className="flex items-center">
              <Image src={item.logoPath} alt="Logo" width={24} height={24} />
              <span className="text-sm">{item.link.text}</span>
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
}
