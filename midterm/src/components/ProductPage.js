import useFetchData from '../hooks/fetchData';
import { useNavigate, useParams, Outlet } from 'react-router-dom';
import '../css/productPage.css';
import Image from '../elements/Image';
import Text from '../elements/Text';
// error message, could add loading buttt
import Error from '../components/Error';


const ProductPage = () => {
    const { data, error, loading } = useFetchData('products');
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
        <div className="productPage">
            {/* checks to see if an id is in the url, if there is it displays the product */}
            {id ? (
                <>
                    <button className="backButton" onClick={()=>{backButton()}}>Back</button>
                    <Outlet />
                </>
            ) : (
                <>
                {data?.map((product) =>
                    <button key={product.id} id={product.id} onClick={(e) => { changeProduct(e) }} className="productPageButton">
                        <div className="productPageImageHolder"><Image image={product.image} name="productPageImage"/></div>
                        <Text Id={product.id} Name="productPageText">{product.title}</Text>
                    </button>
                )}
                </>
            )}
        </div>
    );
}


export default ProductPage;