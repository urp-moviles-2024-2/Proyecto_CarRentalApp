import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { cardsData } from '../data/cardsData';
import ReturnButton from '../components/Buttons/ReturnButton';
import TitleScreen from '../components/TitleScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { GLOBAL_STYLES } from '../constants/styles';

const SearchAllScreen = () => {
  const navigation = useNavigation();
  const handlerHome = () => {
    navigation.navigate('HomeScreen');
  };

  const renderItem = ({item, index}) => (
    <View>
      <TouchableOpacity style={styles.brandItem}>
        <Image source={item.image} style={styles.logo}/>
        <Text style={styles.brandName}>
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
        <ReturnButton onPressButton={handlerHome} />
        <TitleScreen>All Brands</TitleScreen>
      </View>

      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
          />
        </View>
      </View>

      <View>
          <Text style={styles.listTitle}>All Brands</Text>

          <FlatList
            data={cardsData}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 50
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    marginTop: 40
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    borderRadius: 25,
    width: '100%',
    height: 50,
  },
  searchIcon: {
    position: 'absolute',
    marginLeft: 15,
  },
  searchInput: {
    backgroundColor: 'transparent',
    color: '#333',
    paddingLeft: 45,
    fontSize: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left'
  },
  brandItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  brandInfo: {
    flex: 1,
  },
  brandName: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default SearchAllScreen;
