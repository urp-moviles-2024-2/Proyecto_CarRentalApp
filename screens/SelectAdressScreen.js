import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AddressCard from '../components/CardAddress';
import {useNavigation} from '@react-navigation/native';
import PrimaryButton from '../components/PrimaryButton';
import Icon from 'react-native-vector-icons/Ionicons';

const AddressSelector = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();
  const handleHome = () => {
    navigation.navigate('');
  };
  const addresses = [
    {
      id: '1',
      title: 'Home',
      address: '4140 Parker Rd. Allentown, New Mexico 31134',
    },
    {
      id: '2',
      title: 'Work',
      address: '8502 Preston Rd. Inglewood, Maine 98380',
    },
    {
      id: '3',
      title: 'Office',
      address: '6391 Elgin St. Celina, Delaware 10299',
    },
  ];

  const filteredAddresses = addresses.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  const handleSelect = id => setSelectedAddress(id);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Address</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={filteredAddresses}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <AddressCard
            title={item.title}
            address={item.address}
            selected={selectedAddress === item.id}
            onPress={() => handleSelect(item.id)}
          />
        )}
      />
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>retornar</Text>
      </TouchableOpacity>
      <PrimaryButton onPress={handleHome}>Confirm Address</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {fontSize: 24, fontWeight: 'bold', marginBottom: 10, marginTop: 50},
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  confirmButton: {
    backgroundColor: '##c3e54b',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default AddressSelector;
