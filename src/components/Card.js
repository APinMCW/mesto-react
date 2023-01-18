function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="elements__list" key={card._id}>
      <article className="elements__element">
        <img
          className="elements__img"
          src={card.link}
          alt={card.name}
          onClick={handleClick}
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
            <span className="elements__like-count">{card.likes.length}</span>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;
