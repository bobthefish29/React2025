import { createContext, useState, useEffect } from 'react'

// this is just the items of thems
export const themes = {
    light: {
        mainBackground: '#F5F5F5',
        text: '#121212',
        secBackground: '#DADADA',
        buttonBackground: '#3B82F6',
        box: '#FFFFFF'
    },
    dark: {
        mainBackground: '#1E1E1E',
        text: '#F5F5F5',
        secBackground: '#2C2C2C',
        buttonBackground: '#4B5563',
        box: '#2A2A2A'
    }
};


// this is what is conserdered context
export const ThemeContext = createContext({
    theme: {},
    changeColor: () => { }
});

// this is what whole things og the theme
export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light);
    const changeColor = () => {
        setTheme((preValue) => {
            const newTheme = preValue === themes.dark ? themes.light : themes.dark
            return newTheme
        });
    }

    useEffect(() => {
        document.body.style.background = theme.background;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme: theme, changeColor: changeColor }}>
            {props.children}
        </ThemeContext.Provider>
    );
};
