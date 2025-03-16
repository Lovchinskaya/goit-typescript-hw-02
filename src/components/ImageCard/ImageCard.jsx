import css from './ImageCard.module.css';

export default function ImageCard({
  data: {
    urls: { small, regular },
    slug,
    likes,
    user,
    description,
  },
  onImageClick,
}) {
  return (
      <div className={css.container}>
      <a src={small} className={css.galleryLink}>
    <div className={css.card}>
    <img src={small} alt={description} width={'360px'} className={css.img} onClick={() => onImageClick(regular)}/>
    <div className={css.cardInfo}>
      <p className={css.cardInfoItem}>Likes<span>{likes}</span></p>
      <p className={css.cardInfoItem}>Description<span>{slug}</span></p>
    </div>
    </div>
    </a>
</div>
  );
}