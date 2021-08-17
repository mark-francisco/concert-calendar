import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function ConcertItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.concert.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.concert.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.concert.id,
        name: props.concert.name,
        url: props.concert.url,
        date: props.concert.date,
        time: props.concert.time,
        type: props.concert.type,
        city: props.concert.city,
        address: props.concert.address,
        genre: props.concert.genre,
        subgenre: props.concert.subgenre,
        venue: props.concert.venue,
        market: props.concert.market,
      });
    }
  }

  return (
    <li>
      <div>
        <p>ID: {props.concert.id}</p>
        <h3>Name: {props.concert.name}</h3>
        <p>URL: {props.concert.url}</p>
        <p>Date: {props.concert.date}</p>
        <p>Time: {props.concert.time}</p>
        <p>Type: {props.concert.type}</p>
        <p>City: {props.concert.city}</p>
        <p>Address: {props.concert.address}</p>
        <p>Genre: {props.concert.genre}</p>
        <p>Subgenre: {props.concert.subgenre}</p>
        <p>Venue: {props.concert.venue}</p>
        <p>Market: {props.concert.market}</p>
      </div>
      <div>
        <button>More Info</button>
        <button onClick={toggleFavoriteStatusHandler}>
          {itemIsFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </li>
  );
}

export default ConcertItem;
