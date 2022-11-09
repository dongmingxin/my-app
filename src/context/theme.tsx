import * as React from "react";
import { createContext, useContext, useState, useEffect } from "react";

interface ThemeProps {
    backgroundColor: string;
    textColor: string;
    textHighlightColor: string;
}

interface ThemeProviderProps {
	children?: React.ReactNode;
}


export interface ThemeContextInterface {
	theme: string;
    changeTheme: (theme: 'dark'|'light')=>void;
    themeProps: ThemeProps
}

export const ThemeContext = createContext<ThemeContextInterface | null>(null);
const { Provider } = ThemeContext;
const themeLocalStorageKey = 'theme'
const defaultTheme = 'light'
const darkTheme = {
    backgroundColor: '#23272f',
    textColor: '#fff',
    textHighlightColor: '#149eca'
}
const lightTheme = {
    backgroundColor: '#f5f5f5',
    textColor: '#1c1e21',
    textHighlightColor: '#2eca7f'
}


export const ThemeProvider = ({
	children,
}: ThemeProviderProps) => {
	const [theme, setTheme] = useState(()=>{
        let currentTheme;
        if(typeof window !== "undefined") {
            currentTheme = localStorage.getItem(themeLocalStorageKey)
        }
        if(currentTheme) return currentTheme;
        return defaultTheme;
    })

    useEffect(()=>{
        localStorage.setItem(themeLocalStorageKey , theme)
    },[theme]);

    const changeTheme = (theme: 'dark'|'light') => {
        setTheme(theme);
    }

    const themeProps = theme === 'dark' ? darkTheme : lightTheme

	return (
		<Provider
			value={{
				theme,
                changeTheme,
                themeProps
			}}
		>
			{children}
		</Provider>
	);
};

export function useThemeContext() {
    return useContext(ThemeContext);
}
