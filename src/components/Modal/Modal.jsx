import { useEffect } from "react";
import { Overlay, ModalWindow } from "components/Modal/Modal.styled";
import PropTypes from "prop-types";

export const Modal = ({ picture, onClick }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget || e.code === "Escape") {
      onClick();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleOverlayClick);
    return () => {
      window.removeEventListener("keydown", handleOverlayClick);
    };
  });

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalWindow>
        <img src={picture} alt="Big" />
      </ModalWindow>
    </Overlay>
  );
};

Modal.propTypes = {
  picture: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
