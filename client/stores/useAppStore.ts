import create from "zustand";

interface AppStore {}

const useAppStore = create<AppStore>((set) => ({}));