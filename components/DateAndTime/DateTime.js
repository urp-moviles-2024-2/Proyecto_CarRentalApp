import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, FlatList } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { GLOBAL_STYLES } from '../../constants/styles';

const DateTime = ({ visible, onClose, onConfirm, car }) => {
  const navigation = useNavigation();
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('07:00 AM');

  const times = ['07:00 AM', '09:00 AM', '11:00 AM', '12:00 PM', '14:00 PM'];

  const handleDateChange = (event, date) => {
    if (date) {
      setSelectedDate(date);
    }
    setShowCalendar(false);
  };

  const handleSelectAdressScreen = () => {
    if (car) {
      navigation.navigate('SelectAdressScreen', { car }); // Pasar `car` a la siguiente pantalla
    } else {
      console.error('El objeto car no está definido');
    }
  };

  const handleConfirm = () => {
    onConfirm({ date: selectedDate, time: selectedTime });
    handleSelectAdressScreen(); // Navegar a la pantalla de selección de dirección
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Select Date</Text>
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShowCalendar(true)}>
            <View style={styles.dateContent}>
              <Icon name="calendar-outline" size={20} color="#000" style={styles.icon} />
              <Text style={styles.dateText}>
                {selectedDate.toDateString()}
              </Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.modalTitle}>Select Time</Text>
          <FlatList
            data={times}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.timeButton,
                  item === selectedTime && styles.selectedTimeButton,
                ]}
                onPress={() => setSelectedTime(item)}>
                <Text
                  style={[
                    styles.timeButtonText,
                    item === selectedTime && styles.selectedTimeButtonText,
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {showCalendar && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    shadowColor: GLOBAL_STYLES.colors.colornegro,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dateButton: {
    backgroundColor: GLOBAL_STYLES.colors.colorgristransparente,
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  dateContent: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  icon: {
    marginRight: 8,
    marginRight: '15%',
  },
  dateText: {
    fontSize: 16,
    textAlign: 'center',
    marginLeft: '30%',
  },
  timeButton: {
    backgroundColor: GLOBAL_STYLES.colors.colorgristransparente,
    padding: 12,
    marginHorizontal: 5,
    borderRadius: 8,
  },
  selectedTimeButton: {
    backgroundColor: GLOBAL_STYLES.colors.colorverdeprincipal,
  },
  timeButtonText: {
    fontSize: 16,
  },
  selectedTimeButtonText: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: GLOBAL_STYLES.colors.colorgristransparente,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 8,
  },
  cancelButtonText: {
    fontSize: 16,
    color: 'black',
  },
  confirmButton: {
    flex: 1,
    backgroundColor: GLOBAL_STYLES.colors.colorverdeprincipal,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default DateTime;
