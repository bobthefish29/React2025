import { createContext, useState, useEffect } from 'react'

export const themes = {
    light: {
        foreground: '#242526',
        background: '#fff'
    },
    dark: {
        foreground: '#fff',
        background: '#242526'
    }
};

export const ThemeContext = createContext({
    theme: {},
    toggleTheme: () => { }
});

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme((preValue) => {
            const newTheme = preValue === themes.dark ? themes.light : themes.dark
            return newTheme
        });
    };

    
    useEffect(() => {
        document.body.style.background = theme.background;
    }, [theme]);
    return (
        <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
};