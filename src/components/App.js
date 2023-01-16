import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

  return (
    <>
      <Header />
      <Main
        onEditProfile={() => setEditProfilePopupOpen(true)}
        onAddPlace={() => setAddPlacePopupOpen(true)}
        onEditAvatar={() => setEditAvatarPopupOpen(true)}
      />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        textButton="Сохранить"
        contentForm={
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
        onClose={() => setEditProfilePopupOpen(false)}
      />
      <PopupWithForm
        title="Новое место"
        name="add-card"
        textButton="Создать"
        contentForm={
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
        onClose={() => setAddPlacePopupOpen(false)}
      />

      <div className="popup popup_type_preview">
        <div className="popup__container popup__container_type_preview">
          <figure className="popup__margin">
            <img className="popup__img" src="#" alt="" />
            <figcaption className="popup__caption"></figcaption>
          </figure>
          <button
            className="popup__close"
            type="button"
            aria-label="закрыть окно"
          ></button>
        </div>
      </div>
      <div className="popup popup_type_confirmation">
        <div className="popup__container popup__container_type_confirmation">
          <h2 className="popup__title">Вы уверены?</h2>
          <button
            className="popup__button popup__button_type_confirmation"
            type="submit"
            aria-label="да"
          >
            Да
          </button>
          <button
            className="popup__close"
            type="button"
            aria-label="закрыть окно"
          ></button>
        </div>
      </div>
      <PopupWithForm
        title="Обновить аватар"
        name="set-avatar"
        textButton="Сохранить"
        contentForm={
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
        onClose={() => setEditAvatarPopupOpen(false)}
      />
    </>
  );
}

export default App;
