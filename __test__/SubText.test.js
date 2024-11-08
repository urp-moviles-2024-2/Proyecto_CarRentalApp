import React from 'react';
import { render } from '@testing-library/react-native';
import SubText from '../components/SubText'; 

describe('SubText Component', () => {
  it('should render correctly with children', () => {
    const { getByText } = render(<SubText>Este es un texto de prueba</SubText>);
    const renderedText = getByText('Este es un texto de prueba');
    expect(renderedText).toBeTruthy();
  });
  it('should have the correct style', () => {
    const { getByTestId } = render(<SubText>Texto</SubText>);
    const subTextContainer = getByTestId('subtext-container');
    expect(subTextContainer).toHaveStyle({
      justifyContent: 'center',
      flexDirection: 'row',
    });
  });
});
