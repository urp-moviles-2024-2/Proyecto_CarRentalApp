import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Title from '../components/Title';
import SubText from '../components/SubText';
import FirebaseLoginForm from '../components/Firebase/FirebaseLoginForm';
import PrimaryButton from '../components/PrimaryButton';
import SocialButton from '../components/Buttons/SocialButton';
import { initializeAuth, inMemoryPersistence } from 'firebase/auth';


import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config";
import Description from '../components/Description';
import { GLOBAL_STYLES } from '../constants/styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Please fill all the fields');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('ChooseInterestScreen', {email: user.email});
      })
      .catch(error => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  const handleSignUp = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Title>Welcome Back 👋</Title>
      <SubText>
        <Text style={styles.subtext}>to </Text>
        <Text style={styles.carz}>CARZ</Text>
      </SubText>
      <Description>Log in to your account using email or social networks</Description>
      
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
      <View style={styles.fullButtonContainer}>
        <PrimaryButton onPressButton={handleLogin}>Login</PrimaryButton>
      </View>
      <Text style={styles.gristext}>Or continue with social account</Text>
      <View style={styles.socialButtonsContainer}>
        <SocialButton
          backgroundColor="#fff"
          logo={require('../assets/google-logo.png')}
        >
          Google
        </SocialButton>
        <SocialButton
          backgroundColor="#fff"
          logo={require('../assets/facebook-logo.png')}
        >
          Facebook
        </SocialButton>
      </View>
      <SubText>
        <Text>Didn't have an account? </Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.text}> SignUp</Text>
        </TouchableOpacity>
      </SubText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: GLOBAL_STYLES.colors.colorblanco,
    paddingHorizontal: 15,
  },
  fullButtonContainer: {
    width: '100%',
  },
  subtext: {
    fontSize: 30,
    fontWeight: 'bold',
    color: GLOBAL_STYLES.colors.colornegro,
  },
  carz: {
    fontSize: 30,
    fontWeight: 'bold',
    color: GLOBAL_STYLES.colors.colorverdeprincipal,
  },
  logo: {
    marginTop: 20,
    width: 150,
    height: 110,
  },
  forgot: {
    color: GLOBAL_STYLES.colors.colorverdeprincipal,
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
    color: GLOBAL_STYLES.colors.colorverdeprincipal,
  },
});

export default LoginScreen;
