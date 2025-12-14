import { create } from "zustand";

interface TabStore {
  activeTab: "projects" | "story";
  setActiveTab: (tab: "projects" | "story") => void;
}

export const useTabStore = create<TabStore>((set) => ({
  activeTab: "projects",
  setActiveTab: (tab: "projects" | "story") => set({ activeTab: tab }),
}));
