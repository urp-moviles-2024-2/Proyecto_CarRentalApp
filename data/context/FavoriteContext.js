import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState } from "react";

export const FavoriteContext = createContext({
  favoriteIds: [],
  addFavorite: (carId) => {},
  deleteFavorite: (carId) => {},
  isFavorite: (carId) => false,
});

export const FavoriteContextProvider = ({ children }) => {
  const [favoriteCarIds, setFavoriteCarIds] = useState([]);

  const addFavorite = (carId) => {
    setFavoriteCarIds((current) => [...current, carId]);
  };

  const deleteFavorite = (carId) => {
    setFavoriteCarIds((current) => current.filter((id) => id !== carId));
  };

  const isFavorite = (carId) => favoriteCarIds.includes(carId);

  const value = {
    favoriteIds: favoriteCarIds,
    addFavorite,
    deleteFavorite,
    isFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};



