import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const FilterOption = ({ option, onToggle }) => {
  return (
    <TouchableOpacity
      style={[styles.optionButton, option.selected && styles.selectedButton]}
      onPress={() => onToggle(option.id)}>
      <Text style={[styles.optionText, option.selected && styles.selectedButtonText]}>
        {option.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    margin: 4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#A3FF33',
  },
  selectedButton: {
    backgroundColor: '#A3FF33',
  },
  optionText: {
    fontSize: 14,
    color: '#000',
  },
  selectedButtonText: {
    color: 'white',
  },
});

export default FilterOption;
