import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import CardCars from '../components/CardCars';
import Description from '../components/Description';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';

const ChooseInterestScreen = () => {
  const navigation = useNavigation();
  const handleHome = () => {
    navigation.navigate('HomeScreen');
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={handleHome}>
            <Text style={styles.text}>Skip</Text>
          </TouchableOpacity>
          <Title>Which brand of car do you prefer?</Title>
          <Description>Login to your account using email or social networks</Description>
          <View style={styles.container2}>
            <CardCars />
          </View>
          <PrimaryButton onPress={handleHome} >Finish</PrimaryButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 50,
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  text:{
    color: '#000'
  },
  button:{
    backgroundColor: '#9acd32',
    padding: 12,
    paddingHorizontal: 15,
    borderRadius: 10
  }
});

export default ChooseInterestScreen;
