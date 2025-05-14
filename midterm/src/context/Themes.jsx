import { createContext, useState, useEffect } from 'react'

// this is just the items of thems
export const themes = {

    light: {
        themeID: 'Light',
        mainBackground: '#EAEAEA',
        text: '#121212',
        secBackground: 'gray',
        buttonBackground: '#CC5500',
        box: '#E8DCC9',
    },
    dark: {
        mainBackground: '#1A1A1A',
        text: '#3D787E',
        secBackground: '#2A2A2A',
        buttonBackground: '#2A2A2A',
        box: "#2A2A2A",
    },
    neit: {
        mainBackground: '#0000FF',    
        text: '#FFFF00',               
        secBackground: '#001F3F',
        buttonBackground: '#003366',
        box: '#0055A5',
    },
    ocean: {
        mainBackground: '#0E4D64',
        text: '#F0F8FF',
        secBackground: '#137177',
        buttonBackground: '#188977',
        box: '#1C6E8C',
    },
    forest: {
        mainBackground: '#2E4600',
        text: '#ECE5CE',
        secBackground: '#486B00',
        buttonBackground: '#A2C523',
        box: '#88A825',
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

    const changeColor = (prop) => {
        switch (prop) {
            case 'light':
                localStorage.setItem('theme', "light");
                return setTheme(themes.light);
            case 'dark':
                localStorage.setItem('theme', "dark");
                return setTheme(themes.dark);
            case 'neit':
                localStorage.setItem('theme', "neit");
                return setTheme(themes.neit);
            case 'ocean':
                localStorage.setItem('theme', "ocean");
                return setTheme(themes.ocean);
            case 'forest':
                localStorage.setItem('theme', "forest");
                return setTheme(themes.forest);
            default:
                localStorage.setItem('theme', "light");
                return setTheme(themes.light);
        }
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
