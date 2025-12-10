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
      { href: "#about", text: isPt ? "Sobre" : "About" },
      {
        href: "#professional-projects",
        text: isPt ? "Projetos profissionais" : "Professional projects",
      },
      {
        href: "#personal-projects",
        text: isPt ? "Projetos pessoais" : "Personal projects",
      },
      { href: "#contact", text: isPt ? "Contato" : "Contact" },
    ],
  };
};
