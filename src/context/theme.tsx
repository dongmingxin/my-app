import * as React from "react";
import { createContext, useContext, useState } from "react";
import Cookies from 'js-cookie';

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
    initialTheme: string;
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
    cardBackgroundColor: '#232323',
    cardHeaderBorderColor: '#414243',
    cardBoxShadow: '1px 1px 3px 1px #1b1b1b'
}
const lightTheme = {
    backgroundColor: '#f5f5f5',
    mobileNavBgColor: '#f2f6fc',
    primaryColor: '#2eca7f',
    textColorPrimary: '#49515D',
    textColorSecondary: '#2eca7f',
    textColorInBackGround: '#E7E6DD',
    cardBackgroundColor: '#fff',
    cardHeaderBorderColor: '#ebeef5',
    cardBoxShadow: '0 0px 10px -5px #949494'
}

export const ThemeContext = createContext<ThemeContextInterface>({
    theme: 'light',
    changeTheme: (theme: 'dark'|'light')=>{},
    themeProps: lightTheme 
});
const { Provider } = ThemeContext;


export const ThemeContextProvider = ({
    children,
    initialTheme
}:ThemeProviderProps) => {
	const [theme, setTheme] = useState(()=>{
        if(initialTheme) return initialTheme;
        return defaultTheme
    })

    const changeTheme = (theme: 'dark'|'light') => {
        Cookies.set(themeLocalStorageKey, theme, { expires: 1 })
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
