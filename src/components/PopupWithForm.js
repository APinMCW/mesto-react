function PopupWithForm({title, name, textButton, formContent, isOpen, onClose}) {

return(
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`} >
      <div className={`popup__container popup__container_type_${name}`}>
        <h2 className="popup__title">{title}</h2>
        <button
          className="popup__close"
          type="button"
          aria-label="закрыть окно"
          onClick={onClose}
        ></button>
        <form name={name} className="popup__form" noValidate>
            {formContent}        
          <button
            className="popup__button popup__button_disabled"
            type="submit"
            aria-label={textButton}
            disabled
          >
            {textButton}
          </button>
        </form>
      </div>
    </div>
)
}

export default PopupWithForm;