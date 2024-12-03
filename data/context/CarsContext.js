import React, { useState, useContext, createContext, useEffect, useReducer } from "react";
import { listCars } from "../../util/http";
export const CarsContext = createContext({
  cars: [],
  setCars: (cars) => {},
  searchQuery: "",
  setSearchQuery: (query) => {},
  filters: {
    vehicleTypes: [
      { id: 'automatic', name: 'Automatic', selected: false },
      { id: 'manual', name: 'Manual', selected: false },
    ],
    characteristics: [
      { id: 'airConditioning', name: 'Air Conditioning', selected: false },
      { id: 'sunroof', name: 'Sunroof', selected: false },
    ],
  },
  handleFilterChange: (type, value) => {},
  handleClearFilters: () => {},
});
// Reducer para actualizar el estado de los autos
function carsReducer(state, action) {
  switch (action.type) {
    case "SET":
      return action.payload;
    default:
      return state;
  }
}

function CarsContextProvider({ children }) {
  const [carsState, dispatch] = useReducer(carsReducer, []);
  const [filters, setFilters] = useState({
    vehicleTypes: [
      { id: 'automatic', name: 'Automatic', selected: false },
      { id: 'manual', name: 'Manual', selected: false },
    ],
    characteristics: [
      { id: 'airConditioning', name: 'Air Conditioning', selected: false },
      { id: 'sunroof', name: 'Sunroof', selected: false },
    ],
  });
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    async function fetchCars() {
      try {
        const cars = await listCars(); // Llama a la función listCars desde http.js
        dispatch({ type: "SET", payload: cars }); // Actualiza el estado de los coches
      } catch (error) {
        console.error("Error fetching cars", error);
      }
    }

    fetchCars();
  }, []);

  // Lógica de filtrado
  const filteredCars = carsState.filter((car) => {
    const matchesSearchQuery = car.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesVehicleType = filters.vehicleTypes.some(
      (type) => type.selected && car.type === type.id
    );
    const matchesCharacteristics = filters.characteristics.some(
      (char) => char.selected && car.char === char.id
    );
    return (
      matchesSearchQuery &&
      (matchesVehicleType || matchesCharacteristics || !filters.vehicleTypes.some((type) => type.selected) && !filters.characteristics.some((char) => char.selected))
    );
  });

  // Manejo de cambios en los filtros
  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => {
      if (type === 'vehicleTypes') {
        return {
          ...prevFilters,
          vehicleTypes: prevFilters.vehicleTypes.map((item) =>
            item.id === value ? { ...item, selected: !item.selected } : item
          ),
        };
      }
      if (type === 'characteristics') {
        return {
          ...prevFilters,
          characteristics: prevFilters.characteristics.map((item) =>
            item.id === value ? { ...item, selected: !item.selected } : item
          ),
        };
      }
      return prevFilters;
    });
  };

  // Limpiar filtros
  const handleClearFilters = () => {
    setFilters({
      vehicleTypes: [
        { id: 'automatic', name: 'Automatic', selected: false },
        { id: 'manual', name: 'Manual', selected: false },
      ],
      characteristics: [
        { id: 'airConditioning', name: 'Air Conditioning', selected: false },
        { id: 'sunroof', name: 'Sunroof', selected: false },
      ],
    });
    setSearchQuery('');
  };

  const value = {
    cars: filteredCars,
    setCars: (cars) => dispatch({ type: "SET", payload: cars }),
    searchQuery,
    setSearchQuery,
    filters,
    handleFilterChange,
    handleClearFilters,
  };

  return (
    <CarsContext.Provider value={value}>
      {children}
    </CarsContext.Provider>
  );
}

export default CarsContextProvider;
