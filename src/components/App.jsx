import { useState, useEffect } from 'react';
import fetchImg from '../services/fetchAPI';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchImages = () => {
      const options = {
        query,
        currentPage,
      };

      setIsLoading(true);

      fetchImg(options)
        .then(images => setImages(prevState => [...prevState, ...images]))
        .catch(err => setError(err))
        .finally(() => setIsLoading(false));
    };
    if (query) {
      fetchImages();
    }
  }, [query, currentPage]);

  const loadMore = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, []);

  const handleSubmitSearchbar = query => {
    setQuery(query);
    setImages([]);
    setCurrentPage(1);
    setError(null);
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmitSearchbar} />
      <ImageGallery
        query={query}
        images={images}
        currentPage={currentPage}
        error={error}
        isLoading={isLoading}
        loadMore={loadMore}
      />
    </>
  );
};

export default App;
