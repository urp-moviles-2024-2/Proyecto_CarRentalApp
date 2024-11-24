import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const FiltersModal = ({ visible, onClose, filters, onFilterChange, clearAllFilters }) => {
  const [modalPosition] = useState(new Animated.Value(1000)); // Inicia el modal fuera de la pantalla (debajo)

  useEffect(() => {
    if (visible) {
      Animated.spring(modalPosition, {
        toValue: 0, // Mueve el modal a la posición deseada (0 porque sale de abajo)
        useNativeDriver: true,
      }).start();
    } else {
      // Animación de salida
      Animated.spring(modalPosition, {
        toValue: 1000, // Mover el modal fuera de la pantalla
        useNativeDriver: true,
      }).start();
    }
  }, [visible, modalPosition]);

  const handleFilterChange = (type, value) => {
    onFilterChange(type, value);
  };

  return (
    <Modal animationType="none" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <Animated.View
          style={[styles.modalContainer, { transform: [{ translateY: modalPosition }] }]} // aui se aplcia la animacion
        >
          <Text style={styles.filterTitle}>Filters</Text>
          <View style={styles.filterContainer}>
            <Text style={styles.filterCategory}>Vehicle Type</Text>
            {filters.vehicleTypes.map((type) => (
              <TouchableOpacity
                key={type.id}
                style={[styles.filterOption, type.selected && styles.selectedOption]}
                onPress={() => handleFilterChange('vehicleTypes', type.id)}
              >
                <Text>{type.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.filterContainer}>
            <Text style={styles.filterCategory}>Characteristics</Text>
            {filters.characteristics.map((char) => (
              <TouchableOpacity
                key={char.id}
                style={[styles.filterOption, char.selected && styles.selectedOption]}
                onPress={() => handleFilterChange('characteristics', char.id)}
              >
                <Text>{char.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={clearAllFilters}>
              <Text style={styles.buttonText}>Clear All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.applyButton]} onPress={onClose}>
              <Text style={styles.buttonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end', // Asegura que el modal se acomode en la parte inferior
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
  },
  filterTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  filterContainer: {
    marginBottom: 15,
  },
  filterCategory: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  filterOption: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    marginBottom: 5,
    borderRadius: 5,
  },
  selectedOption: {
    backgroundColor: '#4CAF50',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  clearButton: {
    backgroundColor: '#d3d3d3',
  },
  applyButton: {
    backgroundColor: '#9acd32',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default FiltersModal;
