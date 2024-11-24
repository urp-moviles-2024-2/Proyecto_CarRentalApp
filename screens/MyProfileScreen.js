import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { useNavigation } from '@react-navigation/native';
import { optionsData } from '../data/optionProfile';
import Icon from 'react-native-vector-icons/Ionicons';

const MyProfileScreen = () => {
  const navigation = useNavigation();

  const renderOption = ({ item }) => (
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
      <Icon name={iconName} size={40} color="#9FDE55" />
      <Text style={styles.cardLabel}>{label}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
        <Text>My Profile</Text>
        <Icon name="person-circle-outline" size={100} color="#007AFF" style={styles.profileIcon} />
        <Text style={styles.text}>Wade Warren</Text>
        <PrimaryButton>Edit Profile</PrimaryButton>
      
        <View style={styles.cardsContainer}>
          {renderCard("License", "card-outline")}
          {renderCard("Passport", "document-outline")}
          {renderCard("Contract", "clipboard-outline")}
        </View>
    
        <FlatList
          data={optionsData}
          keyExtractor={(item) => item.id}
          renderItem={renderOption}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
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
    marginVertical: 25
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
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
    paddingVertical: 25,
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
});

export default MyProfileScreen;