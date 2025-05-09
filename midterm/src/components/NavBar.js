import {  useNavigate } from 'react-router-dom';

const NavBar = (e) => { 

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
        <nav>
            <button onClick={()=>{changeToHomePage()}}> Home</button>
            <button onClick={()=>{changeToProductPage()}}> Product page</button>
            <button onClick={()=>{changeToSettinsPage()}}> Settings page</button>
        </nav>
    );
}


export default NavBar;