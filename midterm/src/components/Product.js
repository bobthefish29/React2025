import useFetchData from '../hooks/fetchData';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../context/Themes';
import { useContext } from 'react';
// elements
import Box from '../elements/Box';
import Image from '../elements/Image';
import Text from '../elements/Text';
// styles
import '../css/productDescription.css';
// error message, i could also add the loading here
import Error from '../components/Error';
import Content from '../elements/Content';


const Product = () => {
    const { theme } = useContext(ThemeContext);

    // this gets the id from the url, 
    const { id } = useParams();
    const { data, error, loading } = useFetchData('products/' + id);
    if (error) {
        return (
            <Error />
        );
    }
    if (loading) {
        return (
            <div>
                THE PAGE IS LOADING
            </div>
        )
    }
    function StarRating(rating) {
        const totalStars = 5;
        const stars = [];

        for (let i = 1; i <= totalStars; i++) {
            stars.push(<span key={i} style={{ color: i <= rating ? 'yellow' : 'lightgray'}}>★</span>);
        }

        return <div>{stars}</div>;
    }

    return (
        <Content Name="content content-heightLarge">
            <Box Name="productDescriptionHolder" BackGroundColor={theme.box}>
                <Box Name="imageHolder"><Image image={data.image} alt={data.title}></Image></Box>
                <Box Name="descriptionHolder">
                    <Text Name="productText textMid" Color={theme.text}>Name: <br />{data.title}</Text>
                    <Text Name="productText textSmall" Color={theme.text}>Price: ${data.price}</Text>
                    <Text Name="productText" Color={theme.text}>
                        {StarRating(data.rating.rate)}
                        Rating: {data.rating.rate} / 5 (Reply's: {data.rating.count} )
                    </Text>
                    <Text Name="productText" Color={theme.text}>Catagory: {data.category}</Text>
                    <Text Name="productTextDescription" Color={theme.text}>Description:<br></br> {data.description}</Text>
                </Box>
            </Box>
        </Content>
    );
}


export default Product;