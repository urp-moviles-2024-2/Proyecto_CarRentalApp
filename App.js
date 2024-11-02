import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

// Importa todas las pantallas
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ChooseInterestScreen from './screens/ChooseInterestScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import SearchAllScreen from './screens/SearchAllScreen';
import AllCarsScreen from './screens/AllCarsScreen';
import CarDetailsScreen from './screens/CarDetailsScreen';
import SelectAdressScreen from './screens/SelectAdressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import MessageScreen from './screens/MessageScreen';
import MyProfileScreen from './screens/MyProfileScreen';
import FavoriteScreen from './screens/FavoriteScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name == 'Favorite'){
            iconName= focused? 'heart': 'heart-outline';
          }else if (route.name === 'Message') {
            iconName = focused ? 'chatbox' : 'chatbox-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } 
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen}/>
      <Tab.Screen name="Message" component={MessageScreen} />
      <Tab.Screen name="Profile" component={MyProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ChooseInterestScreen" component={ChooseInterestScreen} />
        <Stack.Screen name="HomeScreen" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="SearchAllScreen" component={SearchAllScreen} />
        <Stack.Screen name="AllCarsScreen" component={AllCarsScreen} />
        <Stack.Screen name="CarDetailsScreen" component={CarDetailsScreen} />
        <Stack.Screen name="SelectAdressScreen" component={SelectAdressScreen} />
        <Stack.Screen name="PaymentMethodScreen" component={PaymentMethodScreen} />
        <Stack.Screen name="MessageScreen" component={MessageScreen} />
        <Stack.Screen name="MyProfileScreen" component={MyProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
