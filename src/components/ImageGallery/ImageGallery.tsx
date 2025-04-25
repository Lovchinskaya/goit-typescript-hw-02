import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';


interface Image  {
  id: number;
    urls: {
      regular: string;
      small: string;
  }
  slug: any;
  likes: any;
  description: string;
}

interface ImagesProps  {
  items: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery = ( {items, onImageClick}: ImagesProps) => {
  return (
    <ul className={css.list}>
      {items.map((item: any) => (
        <li className={css.item} key={item.id}>
          <ImageCard data={item} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;