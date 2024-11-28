import { createContext, useReducer } from "react";

export const CarContext = createContext({
  cars: [],
  setCar: (cars) => {},

  /*
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
  */
});

function carsReducer(state, action) {
  switch (action.type) {
    case "SET":
      const carsList = action.payload.reverse();
      return carsList;
    default:
      return state;
  }

  /*
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
  */
}

function CarsContextProvider({ children }) {
  const [carsState, dispatch] = useReducer(carsReducer, []);
/*
  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }
*/
  function setCars(cars) {
    dispatch({ type: "SET", payload: cars });
  }

  const value = {
    cars: carsState,
    setCars: setCars,
/*
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
*/
  };

  return (
    <CarsContext.Provider value={value}>
      {children}
    </CarsContext.Provider>
  );
}

export default CarContext;
