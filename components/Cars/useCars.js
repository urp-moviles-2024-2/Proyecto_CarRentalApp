//ES UN HOOK PARA GESTIONAR LOS COCHES Y LOS FILTROS
import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../../firebase-config';

const useCars = () => {
  const [cars, setCars] = useState([]);
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
    const carsRef = ref(database, 'cars');
    const unsubscribe = onValue(carsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const carsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setCars(carsArray);
      }
    });

    return () => unsubscribe();
  }, []);

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

  const handleClearFilters = () => {
    setFilters({
      priceRange: [500, 2000],
      vehicleTypes: [
        { id: 'automatic', name: 'Automatic', selected: false },
        { id: 'manual', name: 'Manual', selected: false },
      ],
      characteristics: [
        { id: 'airConditioning', name: 'Air Conditioning', selected: false },
        { id: 'sunroof', name: 'Sunroof', selected: false },
      ],
    });
  };

  const filteredCars = cars.filter((car) => {
    const matchesSearchQuery = car.name.toLowerCase().includes(searchQuery.toLowerCase());

    if (
      !filters.vehicleTypes.some((type) => type.selected) &&
      !filters.characteristics.some((char) => char.selected)
    ) {
      return matchesSearchQuery; 
    }

    const matchesVehicleType = filters.vehicleTypes.some(
      (type) => type.selected && car.type === type.id
    );

    const matchesCharacteristics = filters.characteristics.some(
      (char) => char.selected && car.char === char.id
    );

    return matchesSearchQuery && (matchesVehicleType || matchesCharacteristics);
  });

  return {
    cars: filteredCars,
    filters,
    searchQuery,
    setSearchQuery,
    handleFilterChange,
    handleClearFilters,
  };
};

export default useCars;
