import React from 'react';
import {render} from '@testing-library/react-native';
import {Text} from 'react-native';
import SubText from '../components/SubText';

describe('Subtext Component', () => {
  test('debe renderizar los hijos que pasan por aca', () => {
    const {getByText} = render(
      <SubText>
        <Text>Hola mundirijillo</Text>
      </SubText>,
    );
    expect(getByText('Hola mundirijillo')).toBeTruthy();
  });

  it('aplica los estilos correspondientes al container', () => {
    const { getByTestId } = render(
      <SubText>
        <Text>Probando texto</Text>
      </SubText>
    );
    const container = getByTestId('subtext-container');
    expect(container).toHaveStyle({ justifyContent: 'center' });
  });
});