import { StyleSheet,  Text, View, Image,FlatList, TouchableOpacity,SafeAreaView,} from 'react-native';
import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {optionsData} from '../data/optionProfile';
import TitleScreen from '../components/TitleScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { GLOBAL_STYLES } from '../constants/styles';
import { useUser } from '../data/context/UserContext';

const MyProfileScreen = () => {
  const navigation = useNavigation();
  const {user} =useUser();
  const handlerLogin = () => navigation.navigate('Login');


  const renderOption = ({item}) => (
    <TouchableOpacity style={styles.optionContainer}>
      <View style={styles.optionContent}>
        <Icon name={item.icon} size={24} color="black" style={styles.icon} />
        <Text style={styles.optionLabel}>{item.label}</Text>
      </View>
      <Icon name="chevron-forward-outline" size={24} color="black" />
    </TouchableOpacity>
  );

  const renderCard = (label, iconName) => (
    <View style={styles.card}>
      <Icon name={iconName} size={40} color="GLOBAL_STYLES.colors.colorverdeprincipal" />
      <Text style={styles.cardLabel}>{label}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <TitleScreen>My Profile</TitleScreen>
      </View>
        <Icon name="person-circle-outline" size={100} color="#007AFF" style={styles.profileIcon} />
        <Text style={styles.text}>{user?.name || "Guest"}</Text>
        <View style={styles.fullButtonContainer}>
        <PrimaryButton>Edit Profile</PrimaryButton>
      </View>
      
        <View style={styles.cardsContainer}>
          {renderCard("License", "card-outline")}
          {renderCard("Passport", "document-outline")}
          {renderCard("Contract", "clipboard-outline")}
        </View>
    
        <FlatList style={styles.list} 
          data={optionsData}
          keyExtractor={(item) => item.id}
          renderItem={renderOption}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />

        <PrimaryButton onPressButton={handlerLogin}>Logout</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#fff',
    paddingBottom:40
  },
  
  container2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  fullButtonContainer: {
    width: '100%',
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: '30%',
    height: '20%',
    borderRadius: 20,
  },

  profileIcon: {
    alignSelf: 'center',
    marginBottom: 20,
  },

  //cards
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 25,
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: '25%',
    marginHorizontal: 15,
  },
  cardLabel: {
    marginTop: 10,
    fontSize: 14,
    color: '#333',
  },
  icon: {
    borderColor: 'grey',
    borderRadius: 15,
    borderWidth: 0.3,
    padding: 10,
  },
  //flatlist
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 16,
    width: '100%',
    
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionLabel: {
    marginLeft: 15,
    fontSize: 16,
    color: 'black',
  },
  list:{
    marginBottom:2,
  },
});

export default MyProfileScreen;
