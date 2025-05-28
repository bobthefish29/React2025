import { Outlet, Link } from 'react-router-dom';
import '../css/layOut.css';
import { useContext } from 'react';
import { ThemeContext } from '../context/themes.jsx';

import Box from '../elements/Box.js';
import Text from '../elements/Text.js';

export const Layout = () => {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="app-container">
            <header className="nav">
                <nav style={{backgroundColor: theme.secBackground}}>
                    <Link className="navLink firstNavLink" style={{color:theme.text, backgroundColor:theme.buttonBackground}} to="/">Home</Link>
                    <Link className="navLink" style={{color:theme.text, backgroundColor:theme.buttonBackground}} to="search">Find A Friend</Link>
                    <Link className="navLink" style={{color:theme.text, backgroundColor:theme.buttonBackground}} to="settings">Settings</Link>
                </nav>
            </header>


            <main className="content">
                <Outlet />
            </main>
            {/* this is where i will put the info for the api */}


            <footer style={{backgroundColor: theme.secBackground}}>
                <Text textColor={theme.text}>Thank you <a href="https://www.adoptapet.com/">Adoptapet</a> for the api</Text>
                <Box Name="AdoptapetImage">
                    <img className="petLogo" src="../../images/petLogo.png"></img>                
                </Box>
            </footer>
        </div>
    );
};
