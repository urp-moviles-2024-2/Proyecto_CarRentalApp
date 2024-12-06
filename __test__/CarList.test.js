import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import CarItem from '../components/Cars/CarItem';

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');

const car = {
  id: 1,
  name: 'Tesla Model S',
  image: 'https://www.kia.com/content/dam/kwcms/gt/en/images/discover-kia/voice-search/parts-80-1.jpg',
  starts: 4.5,
  hpower: 670,
  type: 'Electric',
  price: '$80,000',
  char: 'airConditioning',
  brand: 'mercedes',
  description: 'carro rojo',
};

describe('CarItem', () => {
  it('should render the car details correctly', () => {
    const { getByText, getByTestId } = render(
      <NavigationContainer>
        <CarItem cars={car} />
      </NavigationContainer>
    );

    expect(getByText('Tesla Model S')).toBeTruthy();

    expect(getByText('670 hp')).toBeTruthy();

    expect(getByText('Electric')).toBeTruthy();

    expect(getByText('$80,000')).toBeTruthy();

    const image = getByTestId('car-image');
    expect(image.props.source.uri).toBe('https://www.kia.com/content/dam/kwcms/gt/en/images/discover-kia/voice-search/parts-80-1.jpg');
  });
});
