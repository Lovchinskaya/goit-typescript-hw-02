import css from './ImageCard.module.css';

type Image  = {
  id: number;
    urls: { small: string, regular: string },
    slug: string,
    likes: number,
    description: string,
}

interface Props {
  data: Image[];
  onImageClick: (image: Image) => void;
}



export default function ImageCard ({data, onImageClick}: Props) {
  return (
      <div className={css.container}>
      <a src={small} className={css.galleryLink}>
    <div className={css.card}>
    <img src={small} alt={description} width={'360px'} className={css.img} onClick={() => onImageClick(data)}/>
    <div className={css.cardInfo}>
      <p className={css.cardInfoItem}>Likes<span>{likes}</span></p>
      <p className={css.cardInfoItem}>Description<span>{slug}</span></p>
    </div>
    </div>
    </a>
</div>
  );
}