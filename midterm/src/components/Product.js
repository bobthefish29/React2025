import useFetchData from '../hooks/fetchData';
import { useParams } from 'react-router-dom';
// elements
import Box from '../elements/Box';
import Image from '../elements/Image';
import Text from '../elements/Text';
// styles
import '../css/productDescription.css';
// error message, i could also add the loading here
import Error from '../components/Error';


const Product = () => {

    // this gets the id from the url, 
    const { id } = useParams();
    console.log(id)
    const { data, error, loading } = useFetchData('products/' + id);

    console.log(data)

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
        <Box name="productDescriptionHolder">
            <Box name="imageHolder"><Image image={data.image} alt={data.title}></Image></Box>
            <Box name="descriptionHolder">
                <Text name="productText textMid">Name: <br />{data.title}</Text>
                <Text name="productText textSmall">Price: ${data.price}</Text>

                <Text name="productText">
                    {StarRating(data.rating.rate)}
                    Rating: {data.rating.rate} / 5 (Reply's: {data.rating.count} )

                </Text>
                <Text name="productText">Catagory: {data.category}</Text>
                <Text name="productTextDescription">Description:<br></br> {data.description}</Text>
            </Box>
        </Box>
    );
}


export default Product;