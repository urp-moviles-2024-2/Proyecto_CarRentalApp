import React from 'react';
import { FlatList } from 'react-native';
import CarItem from './CarItem';

const CarList = ({ cars }) => {
  const renderCarItem = ({ item }) => {
    return <CarItem cars={item} />;
  };

  return (
    <FlatList
      data={cars}
      renderItem={renderCarItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default CarList;
