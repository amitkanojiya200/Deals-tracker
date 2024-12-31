import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import auth, { firebase } from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import Register from "./Register";
import BottomTabNavigation from "../Navigation/BottomTabNavigation";



const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [confirm, setConfirm] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const validatePhoneNumber = () => {
    const phoneRegex = /^\+[1-9]{1}[0-9]{3,14}$/;  // Simple regex for international phone numbers
    return phoneRegex.test(phoneNumber);
  };

  const signInWithPhoneNumber = async () => {
    if (!validatePhoneNumber()) {
      Alert.alert("Invalid Phone Number", "Please enter a valid phone number with country code.");
      return;
    }
    setLoading(true);
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      Alert.alert("Error", "Failed to send OTP. Please try again.");
      console.log("Error sending OTP: ", error);
    } finally {
      setLoading(false);
    }
  };

  const confirmCode = async () => {
    if (code.length === 0) {
      Alert.alert("Invalid Code", "Please enter the OTP sent to your mobile number.");
      return;
    }
    setLoading(true);
    try {
      const userCredential = await confirm.confirm(code);
      const user = userCredential.user;

      const userDocument = await firestore()
        .collection("users")
        .doc(user.uid)
        .get();

      if (userDocument.exists) {
        navigation.navigate("BottomTabNavigation");
      } else {
        navigation.navigate("BottomTabNavigation");
      }
    } catch (error) {
      Alert.alert("Error", "The OTP you entered is incorrect.");
      console.log("Error confirming OTP: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {!confirm ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Mobile number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            editable={!loading}
          />
          <TouchableOpacity
            onPress={signInWithPhoneNumber}
            style={[styles.button, loading && styles.buttonDisabled]}
            disabled={loading}
          >
            <Text style={styles.text}>Send OTP</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.text}>Enter OTP</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter code"
            value={code}
            onChangeText={setCode}
            keyboardType="phone-pad"
            editable={!loading}
          />
          <TouchableOpacity
            onPress={confirmCode}
            style={[styles.button, loading && styles.buttonDisabled]}
            disabled={loading}
          >
            <Text style={styles.text}>Confirm Code</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 40,
    marginTop: 100,
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#fe0",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    alignItems: "center",
  },
});
