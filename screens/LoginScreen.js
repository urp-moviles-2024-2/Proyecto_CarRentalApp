import { StyleSheet, ScrollView, Image, Text, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import Title from '../components/Title';
import SubText from '../components/SubText';
import FirebaseLoginForm from '../components/Firebase/FirebaseLoginForm';
import PrimaryButton from '../components/PrimaryButton';
import SocialButton from '../components/SocialButton';
import { initializeAuth, inMemoryPersistence } from 'firebase/auth';


import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleLogin = () => {
    if (email === "" || password === "") {
      Alert.alert("Please fill all the fields");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("ChooseInterestScreen", { email: user.email });
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  const handleSignUp = () => {
    navigation.navigate('Signup');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode='contain'
      />
      <Title>Welcome Back 👋</Title>
      <SubText>
        <Text style={styles.subtext}>to </Text>
        <Text style={styles.carz}>CARZ</Text>
      </SubText>
      <Text style={styles.gristext}>Log in to your account using email or social networks</Text>
      
      <FirebaseLoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <PrimaryButton onPressButton={handleLogin}>
        Login
      </PrimaryButton>
      <Text style={styles.gristext}>Or continue with social account</Text>
      <View style={styles.socialButtonsContainer}>
        <SocialButton backgroundColor="#fff" logo={require('../assets/google-logo.png')}>
          Google
        </SocialButton>
        <SocialButton backgroundColor="#fff" logo={require('../assets/facebook-logo.png')}>
          Facebook
        </SocialButton>
      </View>
      <SubText>
      <Text>Didn't have an account? </Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.text}> SignUp</Text>
        </TouchableOpacity>
      </SubText>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  subtext: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  carz: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#9acd32',
  },
  logo: {
    marginTop: 20,
    width: 150,
    height: 110,
  },
  gristext: {
    color: '#d3d3d3',
    fontSize: 15,
    width: '85%',
    textAlign: 'center',
    marginBottom: 10,
  },
  forgot: {
    color: '#9acd32',
    alignSelf: 'flex-end',
    marginLeft: '50%',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    marginTop: 10,
  },
  text: {
    color: '#9acd32',
  },
});

export default LoginScreen;
