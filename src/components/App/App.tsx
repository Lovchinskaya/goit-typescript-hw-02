
import css from './App.module.css';
import { useEffect, useState } from 'react';
import { fetchImage } from '../ImageService/ImageService.jsx';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from '../SearchBar/SearchBar.js';
import ImageGallery from '../ImageGallery/ImageGallery.js';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.js';
import Loader from '../Loader/Loader.js';
import ImageModal from '../ImageModal/ImageModal.js';
import ErrorMessage from '../ErrorMessage/ErrorMessage.js';

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

export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<Image | null >(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSearch = (topic: string) => {
    setSearchTerm(topic);
    setPage(1);
    setImages([]);
    setHasMore(true);
  };

  useEffect(() => {
    if (searchTerm === '') {
      return;
    }
    async function getData() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchImage(searchTerm, page);
        if (data.length === 0 || data.length < 15) {
          setHasMore(false);
        }

        setImages(prevImages => {
          return [...prevImages, ...data];
        });
      } catch {
        setError(true);
        toast.error('Whoops there was an error plz reload...', {
          duration: 4000,
          position: 'top-right',
          className: `${css['toast-error']} ${css['error']}`,
        });
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [searchTerm, page]);

  const openModal = (imageUrl: Image) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={openModal} />
      )}

      {isLoading && <Loader loading={isLoading} />}
    
      {error && <ErrorMessage />}

      {images.length > 0 && !isLoading && hasMore && (
        <LoadMoreBtn page={page} onPage={setPage} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={selectedImage}
        alt="Selected"
      />
      <Toaster position="top-right" />
    </div>
  );
}

























