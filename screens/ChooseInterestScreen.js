import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import CardCars from '../components/CardCars';
import Description from '../components/Description';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import { GLOBAL_STYLES } from '../constants/styles';

const ChooseInterestScreen = () => {
  const navigation = useNavigation();
  const handleHome = () => {
    navigation.navigate('HomeScreen');
  };
  return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={handleHome}>
            <Text style={styles.text}>Skip</Text>
          </TouchableOpacity>
          <Title style={styles.title}>Which brand of car do you prefer?</Title>
          <Description>Login to your account using email or social networks</Description>
          <View style={styles.container2}>
            <CardCars />
          </View>
          <PrimaryButton onPressButton={handleHome} >Finish</PrimaryButton>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GLOBAL_STYLES.colors.colorblanco,
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingTop: 50,
    paddingBottom:40
  },
  container2: {
    flex: 1,
    backgroundColor: GLOBAL_STYLES.colors.colorblanco,
  },
  title:{
    textAlign:'left',
  },
  text:{
    color: GLOBAL_STYLES.colors.colornegro,
    textAlign: 'center'
  },
  button:{
    backgroundColor: GLOBAL_STYLES.colors.colorverdeprincipal,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width:'20%',
    marginLeft:'80%',
  }
});

export default ChooseInterestScreen;
