import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState([]);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard([]);
  }

  return (
    <>
      <Header />
      <Main
        onEditProfile={() => setEditProfilePopupOpen(true)}
        onAddPlace={() => setAddPlacePopupOpen(true)}
        onEditAvatar={() => setEditAvatarPopupOpen(true)}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        textButton="Сохранить"
        formContent={
          <>
            <input
              type="text"
              name="name"
              className="popup__input popup__input_data_name"
              placeholder="Имя"
              required
              minLength="2"
              maxLength="40"
              id="name-input"
            />
            <span className="popup__error name-input-error"></span>
            <input
              type="text"
              name="job"
              className="popup__input popup__input_data_job"
              placeholder="О себе"
              required
              minLength="2"
              maxLength="200"
              id="job-input"
            />
            <span className="popup__error job-input-error"></span>
          </>
        }
        isOpen={isEditProfilePopupOpen}
        onClose={() => closeAllPopups}
      />
      <PopupWithForm
        title="Новое место"
        name="add-card"
        textButton="Создать"
        formContent={
          <>
            <input
              type="text"
              name="name"
              className="popup__input popup__input_data_name"
              placeholder="Название"
              required
              minLength="2"
              maxLength="30"
              id="cardName-input"
            />
            <span className="popup__error cardName-input-error"></span>
            <input
              type="url"
              name="link"
              className="popup__input popup__input_data_link"
              placeholder="Ссылка на картинку"
              required
              id="link-input"
            />
            <span className="popup__error link-input-error"></span>
          </>
        }
        isOpen={isAddPlacePopupOpen}
        onClose={() => closeAllPopups}
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm title="Вы уверены?" name="confirmation" textButton="Да" />
      <PopupWithForm
        title="Обновить аватар"
        name="set-avatar"
        textButton="Сохранить"
        formContent={
          <>
            <input
              type="url"
              name="avatar"
              className="popup__input popup__input_data_link"
              placeholder="Ссылка на аватар"
              required
              id="avatar-input"
            />
            <span className="popup__error avatar-input-error"></span>
          </>
        }
        isOpen={isEditAvatarPopupOpen}
        onClose={() => closeAllPopups}
      />
    </>
  );
}

export default App;
