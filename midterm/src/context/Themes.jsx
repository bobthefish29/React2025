import { createContext, useState, useEffect } from 'react'

// this is just the items of thems
export const themes = {
    light: {
        text: 'black',
        background: 'white',
        button: 'gray',
        box: 'gray'
    },
    dark: {
        text: 'white',
        background: 'black',
        button: '#fffdd0'
    },
    neit: {
        text: 'yellow',
        background: 'blue'
        
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
                return setTheme(themes.light);
            case 'dark':
                return setTheme(themes.dark);
            case 'neit':
                return setTheme(themes.neit);
            default:
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
