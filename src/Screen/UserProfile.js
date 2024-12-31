import { StyleSheet, Text, TouchableOpacity, View, Alert,Image } from "react-native";
import React, { useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import UserProfileEdit from './UserProfileEdit';

// const UserProfileEdit = ({ route, navigation }) => {
//   const { uid } = route.params;
//   const [name, setName] = useState("");
//   const [gender, setGender] = useState("");
//   const [mobileNumber, setMobileNumber] = useState("");

//   const saveDetails = async () => {
//     try {
//       await firestore().collection("users").doc(uid).set({
//         name,
//         gender,
//         mobileNumber,
//       });

//       //*After saving the information navigate to User Profile
//       navigation.navigate("UserProfile");
//       setProfile(true)
//     } catch (error) {
//       console.log("error saving details: ", error);
//     }
//   };
//   return (
//     <View style={{ flex: 1 }}>
//       <Text
//         style={{
//           fontSize: 30,
//           fontWeight: "bold",
//           marginVertical: 20,
//           textAlign: "center",
//         }}
//       >
//         Edit Profile
//       </Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Name"
//         value={name}
//         onChangeText={(text) => setName(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Name"
//         value={gender}
//         onChangeText={(text) => setGender(gender)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Name"
//         value={mobileNumber}
//         onChangeText={(text) => setMobileNumber(text)}
//       />

//       <TouchableOpacity onPress={saveDetails} style={styles.button}>
//         <Text style={{ color: "#fff", fontSize: 25, fontWeight: "bold" }}>
//           Save Details
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

const UserProfile = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleLogout = async () => {
    setLoading(true);
    try {
      await auth().signOut();

      // Reset the navigation to 'Login'
      navigation.reset({
        index: 0,
        routes: [{ name: "LoginScreen" }],
      });
    } catch (error) {
      Alert.alert("Error", "There was an issue during logout. Please try again.");
      console.log("Error during logout: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditProfile = () => {
    // Add your edit profile functionality here
    console.log('Edit profile clicked');
  };

  return (
    <View style={styles.container}>
      {/* User Image */}
      <Image
        source={require('../../assets/Images/kaunain1.png') } // Example image, replace with user image URL
        style={styles.profileImage}
      />

      {/* User Name */}
      <Text style={styles.userName}>Kaunain Shaikh</Text>

      {/* User Email */}
      <Text style={styles.userEmail}>kaunain@example.com</Text>
      
      {/* User Email */}
      <Text style={styles.userAge}>Age : 18</Text>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
  // return (
  //     {/* <TouchableOpacity
  //       onPress={handleLogout}
  //       style={[styles.button, loading && styles.buttonDisabled]}
  //       disabled={loading}
  //     >
  //       <Text style={styles.buttonText}>Logout</Text>
  //     </TouchableOpacity> */});
};

export default UserProfile;

const styles = StyleSheet.create({
  // text: {
  //   fontSize: 28,
  //   fontWeight: "bold",
  //   textAlign: "center",
  //   marginBottom: 30,
  // },
  // button: {
  //   backgroundColor: "#6200ea",
  //   paddingVertical: 15,
  //   borderRadius: 10,
  //   marginBottom: 20,
  //   alignItems: "center",
  // },
  // buttonDisabled: {
  //   backgroundColor: "#cccccc",
  // },
  // buttonText: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   color: "#fff",
  // },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4', // Light background color
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Makes the image circular
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userEmail: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 10,
  },
  userAge: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#d9534f', // Red color for logout button
  },
});
