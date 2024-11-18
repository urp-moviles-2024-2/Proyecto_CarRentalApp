import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import CardCars from '../components/Onboarding/CardCars';
import PrimaryButtons from '../components/Onboarding/PrimaryButtons';
import Txt2 from '../components/Onboarding/Txt2';
import Description from '../components/Onboarding/Description';
import Button3 from '../components/Onboarding/Button3';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const ChooseInterestScreen = () => {
  const navigation = useNavigation();
  const handleHome = () => {
    navigation.navigate('HomeScreen');
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Button3 onPress={handleHome}>Skip</Button3>
          <Txt2>Which brand of car do you prefer?</Txt2>
          <Description>
            Login to your account using email or social networks
          </Description>
          <View style={styles.container2}>
            <CardCars />
          </View>
          <PrimaryButtons onPress={handleHome}>Finish</PrimaryButtons>
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
});

export default ChooseInterestScreen;
