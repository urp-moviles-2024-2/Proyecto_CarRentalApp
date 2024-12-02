import { StyleSheet, ScrollView, Image, Text, TouchableOpacity, View, Alert } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import SocialButton from "../components/Buttons/SocialButton";
import { app } from "../firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import FirebaseSignUpForm from "../components/Firebase/FirebaseSignUpForm";
import SubText from "../components/SubText";
import Description from "../components/Description";
import { GLOBAL_STYLES } from "../constants/styles";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const auth = getAuth(app);

  const handleSignUp = () => {
    if (email === "" || password === "" || confirmPassword === "" || name === "") {
      Alert.alert("Completar campos faltantes!!");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Las contraseñas no coinciden!!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Alert.alert("Felicidades, te registraste con éxito!!");
        navigation.navigate("Login");
      })
      .catch((error) => {
        Alert.alert("Error en el registro.", error.message);
      });
  };

  const handleGoogleSignIn = () => {
  };

  const handleFacebookSignIn = () => {
  };

  const handleLoginNavigation = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} resizeMode="contain" />
      <Title>Welcome Back 👋</Title>
      <SubText>
      <Text style={styles.subtext}>to </Text>
      <Text style={styles.carz}>CARZ</Text>
      </SubText>
      <Description>
        Log in to your account using email or social networks
      </Description>
      <FirebaseSignUpForm
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onNameChange={setName}
        onConfirmPasswordChange={setConfirmPassword}
      />
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.fullButtonContainer}>
        <PrimaryButton onPressButton={handleSignUp}>SignUp</PrimaryButton>
      </View>

      <Text style={styles.gristext}>Or continue with social account</Text>
      <View style={styles.socialButtonsContainer}>
        <SocialButton onPressButton={handleGoogleSignIn} backgroundColor="#fff" logo={require("../assets/google-logo.png")}>
          Google
        </SocialButton>
        <SocialButton onPressButton={handleFacebookSignIn} backgroundColor="#fff" logo={require("../assets/facebook-logo.png")}>
          Facebook
        </SocialButton>
      </View>
      <SubText>
        Already have an account?{" "}
        <TouchableOpacity onPress={handleLoginNavigation}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </SubText>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: GLOBAL_STYLES.colors.colorblanco,
    paddingHorizontal: 15
  },
  fullButtonContainer: {
    width: '100%',
  },
  subtext: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
  },
  carz: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#9acd32",
  },
  logo: {
    marginTop: 20,
    width: 150,
    height: 110,
  },
  forgot: {
    color: "#9acd32",
    alignSelf: "flex-end",
    marginLeft: "65%",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 10,
    marginBottom: 20,
  },
  text: {
    color: "#9acd32",
  },
});
