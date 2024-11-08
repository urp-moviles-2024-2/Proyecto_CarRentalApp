import { StyleSheet, ScrollView, Image, Text, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Title from '../components/Title';
import SubText from '../components/SubText';
import PrimaryButton from '../components/PrimaryButton';
import SocialButton from '../components/SocialButton';
import { app } from '../firebase-config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import FirebaseLoginForm from '../components/Firebase/FirebaseLoginForm';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth(app);

  const handleSignUp = () => {
    navigation.navigate('Signup');
  };

  const handleSignIn = () => {
    if (email === '' || password === '') {
      Alert.alert('Completar todos los campos faltantes!!!! ');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate('ChooseInterestScreen', { email: user.email });
      })
      .catch((error) => {
        Alert.alert('Error al Iniciar la sesión', error.message);
      });
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
      <FirebaseLoginForm setEmail={setEmail} setPassword={setPassword} />
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <PrimaryButton onPressButton={handleSignIn}>
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
        <Text >Didn't have an account? </Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={[styles.text, { textDecorationLine: 'underline' }]}> SignUp</Text>
        </TouchableOpacity>
      </SubText>
    </ScrollView>
  );
};

export default LoginScreen;

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
