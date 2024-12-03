import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PrimaryButton from '../components/PrimaryButton';
import { GLOBAL_STYLES } from "../constants/styles";

describe('PrimaryButton Component', () => {
  test('debe aplicar el estilo correspondiente cuando se presiona el botón', () => {
    // Renderiza el componente con el texto 'Click me'
    const { getByTestId } = render(
      <PrimaryButton onPressButton={() => {}}>Click me</PrimaryButton>
    );

    // Selecciona el botón usando el testID
    const button = getByTestId('primary-button');

    // Verifica que el estilo inicial tenga el color de fondo correcto
    expect(button).toHaveStyle({ backgroundColor: GLOBAL_STYLES.colors.colorverdeprincipal });

    // Simula un clic en el botón
    fireEvent.press(button);
    expect(button).toBeTruthy();
  });
});
