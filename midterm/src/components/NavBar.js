import {  useNavigate } from 'react-router-dom';

const NavBar = (e) => { 

    const navigate = useNavigate();


    const changeToHomePage = () => {
        navigate("/");
    };
    const changeToProductPage = () => {
        navigate("product");
    };
    
    
    return(
        <nav>
            <button onClick={()=>{changeToHomePage()}}> Home</button>
            <button onClick={()=>{changeToProductPage()}}> Product page</button>
        </nav>
    );
}


export default NavBar;