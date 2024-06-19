"use client"

import { useMemo, useState } from "react";
import { AppContext, AppContextType } from "./AppContext";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function AppLayout(props: React.HTMLProps<HTMLDivElement>) {

    const [darkMode, setDarkMode] = useState(false)
    const contextData: AppContextType = useMemo(() => ({
        darkMode,
        setDarkMode,
    }), [darkMode, setDarkMode])

    return <AppContext.Provider value={contextData}>
        <body className={`${inter.className} ${darkMode ? "dark" : ""}`}>
            {props.children}
        </body>
    </AppContext.Provider>
}