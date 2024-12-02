import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { useNavigation } from '@react-navigation/native';
import TitleScreen from '../components/TitleScreen';
import { GLOBAL_STYLES } from '../constants/styles';


const FavoriteScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <TitleScreen>My Profile</TitleScreen>
      </View>
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
});

export default FavoriteScreen;