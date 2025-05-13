import useFetchData from '../hooks/fetchData';
import { useNavigate, useParams, Outlet } from 'react-router-dom';
import { ThemeContext } from '../context/Themes';
import { useContext } from 'react';
import '../css/productPage.css';
import Image from '../elements/Image';
import Text from '../elements/Text';
// error message, could add loading buttt
import Error from '../components/Error';
import Button from '../elements/Button';
import Content from '../elements/Content';


const ProductPage = () => {
    const { data, error, loading } = useFetchData('products');
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const changeProduct = (e) => {
        navigate(e.target.id);
    };
    // the -1 goes back a page, or it goes back one dom item
    const backButton = () =>{
        navigate(-1);
    }

    // if there was an error with getting the data it will be here
    if (error) {
        return (
            <Error/>
        );
    }
    if (loading) {
        return (
            <div>
                THE PAGE IS LOADING
            </div>
        )
    }

    // This is the whole page
    return (
        <Content BackGroundColor={theme.mainBackground} Name="productPage content">
            {/* checks to see if an id is in the url, if there is it displays the product */}
            {id ? (
                <>
                    <Button Name="backButton" Click={()=>{backButton()}} BackGround={theme.buttonBackground} FontColor={theme.text}>Back</Button>
                    <Outlet />
                </>
            ) : (
                <>
                {data?.map((product) =>
                    <Button key={product.id} id={product.id} Click={(e) => { changeProduct(e) }} Name="productPageButton" BackGround={theme.buttonBackground}>
                        <div className="productPageImageHolder"><Image image={product.image} name="productPageImage"/></div>
                        <Text Id={product.id} Name="productPageText" Color={theme.text}>{product.title}</Text>
                    </Button>
                )}
                </>
            )}
        </Content>
    );
}


export default ProductPage;