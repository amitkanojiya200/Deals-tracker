import {
  Image,
  SafeAreaView,
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Header = () => {
  return (
    
    <View
      style={{
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        // backgroundColor: '#000',
      }}
    >
      <TextInput
        placeholder="Search"
        style={{
          flex: 1,
          paddingHorizontal: 10,
          backgroundColor: "#fff",
          fontSize: 15,
          paddingVertical: 5,
          borderRadius: 50,
        }}
      />
      <View
        style={{
          position: "absolute",
          right: 18,
          margin: "auto",
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("../../assets/Images/logos/mic2.png")}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// const Header = () => {
//   return (
//     <SafeAreaView>
//       <View style={styles.container}>
//         <View style={styles.topSection}>
//           <Image source={require('../../assets/Images/logos/logobg.png')} style={{ width:50,height:50 }} />
//           <View style={{ flex:1,flexDirection: 'row' }}>
//           <TextInput style={{ borderWidth: 1, borderColor: 'gray', padding: 5, backgroundColor: '#fff' }} />
//           <TouchableOpacity style={{ width:30,height:30 }} >
//           <Image source={myMic} style={{ width:30,height:30 }} />
//           </TouchableOpacity>
//           </View>
//         </View>
//         <AntDesign name="search1" size={24} color="black" />
//       </View>
//     </SafeAreaView>
//   );
// };

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDE9FF",
    padding: 10,
    marginTop: 18,
    // borderTopEndRadius:15
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
