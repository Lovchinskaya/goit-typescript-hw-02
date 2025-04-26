import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

interface Image {
  id: number;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
  slug: string,
  likes: number,
}

type Props = {
  isOpen: boolean, 
  onClose: () => void, 
  imageUrl: Image, 
  alt: string,
}

export default function ImageModal({ isOpen, onClose, imageUrl, alt }: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose} 
      className={css.modal}
      overlayClassName={css.overlayContainer}
    >
      {imageUrl &&<div className={css.content}>
        <img src={imageUrl.urls.small} alt={alt} className={css.image} />
        <button className={css.btnClose} onClick={onClose}>
          ✖
        </button>
      </div>}
    </Modal>
  );
}