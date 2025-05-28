import type { ImagePath} from '../types/Image';

const Image = (prop : ImagePath) => {
    return(
        <img src={prop.imageUrl} alt={"Photo was not found"} className={prop.Name}  />
    );
}


export default Image;