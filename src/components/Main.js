import { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => console.log(`Ошибка при запросе данных профиля: ${err}`));
  }, []);

  useEffect(() => {
    api
      .getCards()
      .then((cardsData) => setCards(cardsData))
      .catch((err) => console.log(`Ошибка при запросе карточек: ${err}`));
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
          {cards.length ? (
            cards.map((card) => (
              <Card card={card} key={card._id} onCardClick={onCardClick} />
            ))
          ) : (
            <p style={{ color: "grey" }}>Увы, карточки не загрузились</p>
          )}
        </ul>
      </section>
    </main>
  );
}
export default Main;
