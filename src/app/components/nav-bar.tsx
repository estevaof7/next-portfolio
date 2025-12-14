import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useNavData } from "@/data/nav-data";
import { LinkModel } from "@/models/link-model";
import { useTabStore } from "@/stores/tab.store";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  const navData = useNavData();
  const { setActiveTab } = useTabStore();

  const handleClick = (id: string) => {
    if (id === "projects") {
      setActiveTab("projects");
    }
    if (id === "story") {
      setActiveTab("story");
    }
  };

  return (
    <nav className="fixed z-20 w-full border-b bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href={navData.logo.href} className="text-xl font-bold">
          {navData.logo.text}
        </Link>

        {/* Menu para Desktop */}
        <div className="hidden space-x-6 md:flex">
          {navData.links.map((link: LinkModel & { id: string }) => (
            <Link
              key={link.id}
              href={link.href}
              className="text-gray-600 transition-colors hover:text-gray-900"
              onClick={() => handleClick(link.id)}
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
              <nav className="mt-8 flex flex-col gap-4">
                {navData.links.map((link: LinkModel & { id: string }) => (
                  <SheetClose key={link.id} asChild>
                    <Link
                      href={link.href}
                      className="rounded-md px-2 py-1 text-lg transition-colors hover:bg-gray-100"
                      onClick={() => handleClick(link.id)}
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
