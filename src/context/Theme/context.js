import { createContext,useContext } from "react";

export const ThemeContext = createContext('dark');


export const useThemeContext = () => { 
    const theme = useContext(ThemeContext);

    if (theme === undefined) { 
        throw new Error('use it with theme context')
    }

    return theme;
}