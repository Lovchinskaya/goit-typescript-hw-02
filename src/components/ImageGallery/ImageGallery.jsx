import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ items, onImageClick }) {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li className={css.item} key={item.id}>
          <ImageCard data={item} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}







// export default function CardMockup (photoData) {
//     return (photoData
//       .map(
//         ({
//            profile_image = {small, medium},
//            name,
//            location,
//            updated_at




//         //   webformatURL,
//         //   largeImageURL,
//         //   tags,
//         //   likes,
//         //   views,
//         //   comments,
//         //   downloads,
//         }) =>
//           `<a href="${profile_image.small}" class="gallery-link">
//     <div class="card">
//     <img src="${profile_image.small}" alt="${name}" loading="lazy" width="360" />
//     <div class="card-info">
//       <p class="card-info-item">Likes<span>${name}</span></p>
//       <p class="card-info-item">Views<span>${location}</span></p>
//       <p class="card-info-item">Comments<span>${location}</span></p>
//       <p class="card-info-item">Downloads<span>${updated_at}</span></p>
//     </div>
//     </div>
//     </a>`
//       )
//       .join(''))
//   };