'use client';

import { footerData } from '@/data/footer-data';
import { FooterItemModel } from '@/models/footer-model';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Footer() {
  const footer = useRef(null);
  const [textColor, setTextColor] = useState('');

  useEffect(() => {
    if (footer.current) {
      // Obtém todos os estilos computados do elemento
      const computed = window.getComputedStyle(footer.current);

      // Agora você tem acesso a todas as propriedades CSS do elemento
      setTextColor(computed.getPropertyValue('color'));

      // console.log('Background color:', backgroundColor);
      // console.log('textColor:', textColor);
    }
  }, []);

  return (
    <footer id="contact" className="bg-white text-gray-300" ref={footer}>
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
      <div>COR DO TEXTO: {textColor}</div>
    </footer>
  );
}
