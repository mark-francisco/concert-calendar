import { createContext, useState } from "react";

// create "context" JS object that contains a built-in React component
const FavoritesContext = createContext({
  // define the keys and initial values
  favorites: [],
  totalFavorites: 0,
  // define the fn's and initial values
  addFavorite: (concertToAdd) => {},
  removeFavorite: (concertId) => {},
  itemIsFavorite: (concertId) => {},
});

// create React component
export function FavoritesContextProvider(props) {
  // initialize userFavorites state as an empty array
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(concertToAdd) {
    // Update userFavorites state by passing in a fn that will get executed by React, so that state updates will happen right away (new state value is dependent on previous version of state value)
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(concertToAdd);
    });
  }

  function removeFavoriteHandler(concertId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((concert) => concert.id !== concertId);
    });
  }

  function itemIsFavoriteHandler(concertId) {
    return userFavorites.some((concert) => concert.id === concertId);
  }

  // this is the object that will hold the current context values and will be passed forward to the other components
  const context = {
    // define the keys and updated values to pass forward and make accessible
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    // define the fn's to pass forward and make accessible
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  // built-in React component from createContext(). this Provider component will get wrapped around the components that are listening for this context
  return <FavoritesContext.Provider value={context}>{props.children}</FavoritesContext.Provider>;
}

export default FavoritesContext;
