import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { navData } from '@/data/nav-data';
import { LinkModel } from '@/models/link-model';
import { Menu } from 'lucide-react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="w-full bg-white border-b fixed z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href={navData.logo.href} className="text-xl font-bold">
          {navData.logo.text}
        </Link>

        {/* Menu para Desktop */}
        <div className="hidden md:flex space-x-6">
          {navData.links.map((link: LinkModel) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Menu Hambúrguer para Mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <SheetTitle></SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                {navData.links.map((link: LinkModel) => (
                  <SheetClose key={link.href} asChild>
                    <Link
                      href={link.href}
                      className="text-lg px-2 py-1 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      {link.text}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
