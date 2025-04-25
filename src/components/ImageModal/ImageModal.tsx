import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

type Props = {
  isOpen: boolean, 
  onClose: () => void, 
  imageUrl: string | null, 
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
        <img src={imageUrl} alt={alt} className={css.image} />
        <button className={css.btnClose} onClick={onClose}>
          ✖
        </button>
      </div>}
    </Modal>
  );
}