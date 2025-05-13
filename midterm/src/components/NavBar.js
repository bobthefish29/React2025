import {  useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/Themes';
import Button from '../elements/Button';



const NavBar = (e) => { 

    const { theme } = useContext(ThemeContext);

    const navigate = useNavigate();
    const changeToHomePage = () => {
        navigate("/");
    };
    const changeToProductPage = () => {
        navigate("product");
    };
    const changeToSettinsPage = () => {
        navigate("settings");
    };
    
    
    return(
        <nav style={{backgroundColor: theme.secBackground} }>
            <Button BackGround={theme.buttonBackground} FontColor={theme.text} Click={()=>{changeToHomePage()}}> Home</Button>
            <Button BackGround={theme.buttonBackground} FontColor={theme.text} Click={()=>{changeToProductPage()}}> Product page</Button>
            <Button BackGround={theme.buttonBackground} FontColor={theme.text} Click={()=>{changeToSettinsPage()}}> Settings page</Button>
        </nav>
    );
}


export default NavBar;