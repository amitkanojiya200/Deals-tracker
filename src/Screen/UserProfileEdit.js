import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import firestore from "@react-native-firebase/firestore";

const UserProfileEdit = () => {
  // const { uid } = route.params;
  // const [name, setName] = useState("");
  // const [gender, setGender] = useState("");
  // const [mobileNumber, setMobileNumber] = useState("");

  // const saveDetails = async () => {
  //   try {
  //     await firestore().collection("users").doc(uid).set({
  //       name,
  //       gender,
  //       mobileNumber,
  //     });

  //     //*After saving the information navigate to User Profile
  //     navigation.navigate("UserProfile");
  //   } catch (error) {
  //     console.log("error saving details: ", error);
  //   }
  // };
  return (
    <View style={{flex:1}}>
      <Text style={{ color:'#000',fontSize:25 }}>User Profile Edit</Text>
    </View>
    // <View style={{ flex: 1 }}>
    //   <Text
    //     style={{
    //       fontSize: 30,
    //       fontWeight: "bold",
    //       marginVertical: 20,
    //       textAlign: "center",
    //     }}
    //   >
    //     Register Profile
    //   </Text>
    //   <TextInput
    //     style={styles.input}
    //     placeholder="Enter Name"
    //     value={name}
    //     onChangeText={(text) => setName(text)}
    //   />
    //   <TextInput
    //     style={styles.input}
    //     placeholder="Enter Name"
    //     value={gender}
    //     onChangeText={(text) => setGender(gender)}
    //   />
    //   <TextInput
    //     style={styles.input}
    //     placeholder="Enter Name"
    //     value={mobileNumber}
    //     onChangeText={(text) => setMobileNumber(text)}
    //   />

    //   <TouchableOpacity onPress={saveDetails} style={styles.button}>
    //     <Text style={{ color: "#fff", fontSize: 25, fontWeight: "bold" }}>
    //       Save Details
    //     </Text>
    //   </TouchableOpacity>
    // </View>
  );
};

export default UserProfileEdit;

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: "100%",
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#fea",
    padding: 5,
    marginBottom: 20,
    borderRadius: 5,
    alignItems: "center",
  },
});
