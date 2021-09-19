import { useState, useEffect } from "react";
import { SearchBar } from "components/searchBar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { LoadMore } from "components/LoadMoreBtn/LoadMore";
import { Modal } from "components/Modal/Modal";
import { FetchCollection } from "./services/FetchApi";
import { ToastContainer } from "react-toastify";
import { Container } from "App.styled";
import { LoaderSpinner } from "components/Loader/Loader";
import PropTypes from "prop-types";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.styled";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [pictureName, setPictureName] = useState(null);
  const [pictures, setPictures] = useState([]);
  const [largeImage, setLargeImage] = useState(null);
  const [status, setStatus] = useState("idle");
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const handleInput = (searchWord) => {
    setPictureName(searchWord);
    setPictures([]);
    setPage(1);
  };

  const toggleModal = () => setOpenModal(!openModal);

  useEffect(() => {
    if (pictureName === null && page === 1) {
      return;
    }

    setStatus("pending");
    FetchCollection({ pictureName, page })
      .then((newPictures) => {
        if (page === 1) {
          setPictures(newPictures);
        } else {
          setPictures((prevState) => [...prevState, ...newPictures]);
        }
        setStatus("resolved");
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [pictureName, page]);

  const onLoadMoreClick = () => setPage((prevState) => prevState + 1);

  const bigPictureHandler = (image) => {
    setLargeImage(image);
    toggleModal();
  };

  const showLoadMoreButton = pictures.length > 0;
  const showModal = openModal;
  const showLoader = status === "pending";

  return (
    <Container>
      <SearchBar onSubmit={handleInput} />
      {showLoader && <LoaderSpinner />}
      <ImageGallery images={pictures} largePicture={bigPictureHandler} />
      {showLoadMoreButton && <LoadMore onAction={onLoadMoreClick} />}
      <ToastContainer
        position="top-right"
        autoClose={1200}
        hideProgressBar={true}
      />
      {showModal && <Modal picture={largeImage} onClick={toggleModal} />}
    </Container>
  );
}

App.propTypes = {
  pictureName: PropTypes.string,
  pictures: PropTypes.array,
  largeImage: PropTypes.string,
  status: PropTypes.string,
  page: PropTypes.number,
  openModal: PropTypes.bool,
};

export default App;
