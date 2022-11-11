import * as React from "react";
import { createContext, useContext, useState, useEffect } from "react";

interface ThemeProps {
    backgroundColor: string,
    mobileNavBgColor: string,
    primaryColor: string,
    textColorPrimary: string,
    textColorSecondary: string,
    textColorInBackGround: string
}

interface ThemeProviderProps {
	children?: React.ReactNode;
}


export interface ThemeContextInterface {
	theme: string;
    changeTheme: (theme: 'dark'|'light')=>void;
    themeProps: ThemeProps
}

const themeLocalStorageKey = 'theme'
const defaultTheme = 'light'
const darkTheme = {
    backgroundColor: '#23272f',
    mobileNavBgColor: '#303030',
    primaryColor: '#9999ff',
    textColorPrimary: '#999',
    textColorSecondary: '#9999ff',
    textColorInBackGround: '#E7E6DD',
}
const lightTheme = {
    backgroundColor: '#f5f5f5',
    mobileNavBgColor: '#f2f6fc',
    primaryColor: '#2eca7f',
    textColorPrimary: '#49515D',
    textColorSecondary: '#2eca7f',
    textColorInBackGround: '#E7E6DD',
}

export const ThemeContext = createContext<ThemeContextInterface>({
    theme: 'light',
    changeTheme: (theme: 'dark'|'light')=>{},
    themeProps: lightTheme 
});
const { Provider } = ThemeContext;


export const ThemeContextProvider = ({
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
