function InfoToolTip({ isOpen, onClose, info }) {

  return (
    <section className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <div>
          <img
            className="popup__infoToolTip-image"
            src={info.image}
            alt={info.text}
          />
          <p className="popup__infoToolTip-text">{info.text}</p>
        </div>
        <button
          className={"popup__close-button"}
          type="button"
          onClick={onClose}
        />
      </div>
    </section>
  );
}

export default InfoToolTip;
