import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ChooseInterestScreen from './screens/ChooseInterestScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import SearchAllScreen from './screens/SearchAllScreen';
import AllCarsScreen from './screens/AllCarsScreen';
import CarDetails from './screens/CarDetailsScreen';
import SelectAdressScreen from './screens/SelectAdressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import MessageScreen from './screens/MessageScreen';
import MyProfileScreen from './screens/MyProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ChooseInterestScreen" component={ChooseInterestScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="SearchAllScreen" component={SearchAllScreen} />
        <Stack.Screen name="AllCarsScreen" component={AllCarsScreen} />
        <Stack.Screen name="CarDetailsScreen" component={CarDetails} />
        <Stack.Screen name="SelectAdressScreen" component={SelectAdressScreen} />
        <Stack.Screen name="PaymentMethodScreen" component={PaymentMethodScreen} />
        <Stack.Screen name="MessageScreen" component={MessageScreen} />
        <Stack.Screen name="MyProfileScreen" component={MyProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
