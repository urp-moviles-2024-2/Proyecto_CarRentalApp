module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Transforma archivos .js y .jsx
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'], // Ignorar las carpetas que no necesitas probar
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx', 'node'], // Extensiones de archivo
  setupFilesAfterEnv: ['./jest.setup.js'], // Asegúrate de incluir tu archivo de configuración
};
