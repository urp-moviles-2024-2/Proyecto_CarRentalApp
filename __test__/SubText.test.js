import React from 'react';
import { render } from '@testing-library/react-native';
import SubText from '../components/SubText'; 

describe('SubText Component', () => {
  it('should render correctly with children', () => {
    const { getByText } = render(<SubText>Este es un texto de prueba</SubText>);

    // Verifica que el texto se renderiza correctamente
    const renderedText = getByText('Este es un texto de prueba');
    expect(renderedText).toBeTruthy();
  });

  it('should have the correct style', () => {
    const { getByTestId } = render(<SubText>Texto</SubText>);

    // Verifica que el componente tiene el testID correcto
    const subTextContainer = getByTestId('subtext-container');

    // Verifica que el componente tiene el estilo correcto
    expect(subTextContainer).toHaveStyle({
      justifyContent: 'center',
      flexDirection: 'row',
    });
  });
});
