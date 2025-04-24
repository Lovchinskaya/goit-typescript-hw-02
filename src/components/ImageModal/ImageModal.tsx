import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onClose, imageUrl, alt }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose} 
      className={css.modal}
      overlayClassName={css.overlayContainer}
    >
      <div className={css.content}>
        <img src={imageUrl} alt={alt} className={css.image} />
        <button className={css.btnClose} onClick={onClose}>
          ✖
        </button>
      </div>
    </Modal>
  );
}