import {
  Item,
  Image,
} from "components/ImageGalleryItem/ImageGalleryItem.styled";
import PropTypes from "prop-types";

export const ImageGalleryItem = ({ images, getBigImage }) => {
  return images.map(({ webformatURL, tags, largeImageURL }) => {
    return (
      <Item key={largeImageURL}>
        <Image
          src={webformatURL}
          alt={tags}
          onClick={() => getBigImage(largeImageURL)}
        />
      </Item>
    );
  });
};

ImageGalleryItem.propTypes = {
  images: PropTypes.array,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
  getBigImage: PropTypes.func.isRequired,
};
