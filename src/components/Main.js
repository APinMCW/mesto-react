import { useState, useEffect } from "react";
import api from "../utils/Api";

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  const [userName, setUserName] = useState([]);
  const [userDescription, setUserDescription] = useState([]);
  const [userAvatar, setUserAvatar] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo().then((userData) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
    });
  }, []);

  useEffect(() => {
    api.getCards().then((cardsData) => setCards(cardsData));
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__container">
          <img className="profile__avatar" src={userAvatar} alt="Аватарка" />
          <button
            type="button"
            className="profile__button profile__button_type_avatar"
            aria-label="Редактировать аватар"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__section">
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__job">{userDescription}</p>
          </div>
          <button
            type="button"
            className="profile__button profile__button_type_edit-data"
            aria-label="Редактировать профиль"
            onClick={onEditProfile}
          ></button>
        </div>
        <button
          type="button"
          className="profile__plus"
          aria-label="Добавить карточку"
          onClick={onAddPlace}
        ></button>
      </section>
      <section>
        <ul className="elements">
          {cards.map((card) => {
            return (
              <li className="elements__list" key={card._id}>
                <article className="elements__element">
                  <img
                    className="elements__img"
                    src={card.link}
                    alt={card.name}
                  />
                  <button
                    type="button"
                    className="elements__trash"
                    aria-label="Удалить карточку"
                  ></button>
                  <div className="elements__container">
                    <h2 className="elements__title">{card.name}</h2>
                    <div className="elements__like-container">
                      <button
                        type="button"
                        className="elements__like"
                        aria-label="Сердечко"
                      ></button>
                      <span className="elements__like-count">
                        {card.likes.length}
                      </span>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
export default Main;
