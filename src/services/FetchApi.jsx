import axios from "axios";
import PropTypes from "prop-types";

export const FetchCollection = ({ pictureName, page }) => {
  const key = "22628996-cf4023f9c883b96dd8e407c0b";
  const BASE_URL = "https://pixabay.com/api";
  const params = "image_type=photo&orientation=horizontal&per_page=12";

  const response = axios
    .get(`${BASE_URL}/?key=${key}&q=${pictureName}&page=${page}&${params}`)
    .then((response) => response.data.hits);
  return response;
};

FetchCollection.PropTypes = {
  pictureName: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
