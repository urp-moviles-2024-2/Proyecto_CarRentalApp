import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const EditCard = ({route, navigation}) => {
  const {card, savedCards, setSavedCards} = route.params;
  const [updatedCard, setUpdatedCard] = useState({...card});

  const handleSave = () => {
    const updatedCards = savedCards.map(c =>
      c.id === card.id ? updatedCard : c,
    );
    setSavedCards(updatedCards);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Card</Text>
      <TextInput
        placeholder="Card Number"
        style={styles.input}
        value={updatedCard.number}
        onChangeText={text => setUpdatedCard({...updatedCard, number: text})}
      />
      <TextInput
        placeholder="Card Holder Name"
        style={styles.input}
        value={updatedCard.holder}
        onChangeText={text => setUpdatedCard({...updatedCard, holder: text})}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: '#f5f5f5'},
  title: {fontSize: 20, fontWeight: 'bold', marginBottom: 20},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  saveButton: {backgroundColor: '#4caf50', padding: 15, borderRadius: 8},
  saveText: {textAlign: 'center', color: '#fff', fontWeight: 'bold'},
});

export default EditCard;
