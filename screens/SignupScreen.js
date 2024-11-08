import { StyleSheet, ScrollView, Image, Text, TouchableOpacity, View, Alert } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import SocialButton from "../components/SocialButton";
import { app } from "../firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import FirebaseSignUpForm from "../components/Firebase/FirebaseSignUpForm";
import SubText from "../components/SubText";

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
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} resizeMode="contain" />
      <Title>Welcome Back 👋</Title>
      <SubText>
      <Text style={styles.subtext}>to </Text>
      <Text style={styles.carz}>CARZ</Text>
      </SubText>
      <Text style={styles.gristext}>
        Log in to your account using email or social networks
      </Text>
      <FirebaseSignUpForm
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onNameChange={setName}
        onConfirmPasswordChange={setConfirmPassword}
      />
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <PrimaryButton onPressButton={handleSignUp}>SignUp</PrimaryButton>
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
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
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
  gristext: {
    color: "#d3d3d3",
    fontSize: 15,
    width: "85%",
    textAlign: "center",
    marginBottom: 10,
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
    marginBottom: 20, // Aumentado el margen
  },
  text: {
    color: "#9acd32",
  },
});
