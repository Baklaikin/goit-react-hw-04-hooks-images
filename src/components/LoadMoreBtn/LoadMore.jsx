import { LoadMoreBtn } from "components/LoadMoreBtn/LoadMore.styled";
import PropTypes from "prop-types";

export const LoadMore = ({ onAction }) => {
  return (
    <LoadMoreBtn type="button" onClick={() => onAction()}>
      Load more
    </LoadMoreBtn>
  );
};

LoadMore.propTypes = {
  onAction: PropTypes.func.isRequired,
};
