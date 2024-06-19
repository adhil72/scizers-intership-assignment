import { createContext } from "react";

export interface AppContextType {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

const initialContextData = {
    darkMode: false,
    setDarkMode: () => { }
}

export const AppContext = createContext<AppContextType>(initialContextData);