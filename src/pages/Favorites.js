import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";

import ConcertList from "../components/concerts/ConcertList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You don't have any favorites yet.</p>;
  } else {
    content = <ConcertList concerts={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites:</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
