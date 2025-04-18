import {StyleSheet,ScrollView,Image,Text, TouchableOpacity,View,Alert,} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Title from '../components/Title';
import SubText from '../components/SubText';
import FirebaseLoginForm from '../components/Firebase/FirebaseLoginForm';
import PrimaryButton from '../components/PrimaryButton';
import SocialButton from '../components/Buttons/SocialButton';
import { GLOBAL_STYLES } from '../constants/styles';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config';
import Description from '../components/Description';
import { useUser } from '../data/context/UserContext';
import { getUserById } from '../util/http';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const { setUser } = useUser();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please fill all fields');
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;
      const userName = await getUserById(userId);

      // Almacena el `userId` en AsyncStorage
      await AsyncStorage.setItem('userId', userId);

      // Actualiza el contexto
      setUser({ id: userId, name: userName });

      navigation.navigate('ChooseInterestScreen');
    } catch (error) {
      alert('Error during login: ' + error.message);
    }
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
          <Text style={styles.text}>SignUp</Text>
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
    alignSelf: 'center',
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
