//esto jala la data de la bd a la app
import { createContext, useEffect, useReducer } from "react";
import { database } from "../firebase-config";
import { ref, onValue } from "firebase/database";

export const CarsContext = createContext({
  cars: [],
});

function carsReducer(state, action) {
  switch (action.type) {
    case "SET":
      return action.payload;
    default:
      return state;
  }
}

export const CarsProvider = ({ children }) => {
  const [cars, dispatch] = useReducer(carsReducer, []);

  useEffect(() => {
    const carsRef = ref(database, "cars"); // Nodo en Firebase
    const unsubscribe = onValue(carsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const carsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        dispatch({ type: "SET", payload: carsArray });
      }
    });

    return () => unsubscribe(); // Limpieza del listener
  }, []);

  const contextValue = {
    cars,
  };

  return <CarsContext.Provider value={contextValue}>{children}</CarsContext.Provider>;
};
