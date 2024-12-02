import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { GLOBAL_STYLES } from '../../constants/styles';

const CustomDateTimePicker = ({ mode, onConfirm, buttonText, style }) => {
  const [isPickerVisible, setPickerVisible] = useState(false);

  const showPicker = () => setPickerVisible(true);
  const hidePicker = () => setPickerVisible(false);

  const handleConfirm = (date) => {
    onConfirm(date);
    hidePicker();
  };

  return (
    <View>
      <TouchableOpacity style={[styles.button, style]} onPress={showPicker}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isPickerVisible}
        mode={mode} // Puede ser "date", "time" o "datetime"
        onConfirm={handleConfirm}
        onCancel={hidePicker}
        headerTextIOS={`Select ${mode === 'date' ? 'a date' : 'a time'}`}
        confirmTextIOS="Confirm"
        cancelTextIOS="Cancel"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: GLOBAL_STYLES.colors.colorblanco,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
});

export default CustomDateTimePicker;
