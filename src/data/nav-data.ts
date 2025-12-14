import { NavModel } from "@/models/nav-model";
import { useLanguageStore } from "@/stores/language.store";

export const useNavData = (): NavModel => {
  const { isPt } = useLanguageStore();
  return {
    logo: {
      href: "#about",
      text: "Estêvão Ferreira",
    },
    links: [
      { href: "#about", text: isPt ? "Sobre" : "About", id: "about" },
      {
        href: "#content",
        text: isPt ? "Meus projetos" : "My projects",
        id: "projects",
      },
      {
        href: "#content",
        text: isPt ? "Minha história" : "My story",
        id: "story",
      },
      { href: "#contact", text: isPt ? "Contato" : "Contact", id: "contact" },
    ],
  };
};
