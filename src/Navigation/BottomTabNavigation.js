import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import WishList from "../Screen/WishList";
import ProductPic from "../Screen/ProductPic";
import EComm from "../Screen/EComm";
import UserProfile from "../Screen/UserProfile";
import HomeScreen from "../Screen/HomeScreen";
import Profile from "./Profile";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";

// import AsyncStorage from "@react-native-async-storage/async-storage";

const BottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();
  // const translateY = useRef(new Animated.Value(0)).current;

  // const clearOnBoarding = async () => {
  //   try {
  //     await AsyncStorage.removeItem("@viewedOnboarding", "true");
  //   } catch (error) {
  //     console.log("Error @viewedOnboarding : ", error);
  //   }
  // };

  // const handlePress = () => {
  //   // Start the animation
  //   Animated.spring(translateY, {
  //     toValue: -10, // Move the button up by 10 units
  //     useNativeDriver: true, // Use native driver for better performance
  //   }).start(() => {
  //     // Bring the button back to its original position
  //     Animated.spring(translateY, {
  //       toValue: 0,
  //       useNativeDriver: true,
  //     }).start();
  //   });
  // };

  return (
    <Tab.Navigator
      initialRouteName="ProductScreen"
      screenOptions={{
        tabBarShowLabel: false,
        // tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: { ...styles.fly },
      }}
    >
      {/* //! HOME SCREEN */}
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.buttons}>
              {!focused ? (
                <AntDesign name="shoppingcart" size={25} color={color} />
              ) : (
                <Image
                  source={require("../../assets/Images/cartNew.png")}
                  style={styles.imgIcon}
                />
              )}
              <Text style={{ fontSize: focused ? 12 : 10 }}>Home</Text>
            </View>
          ),
        }}
      />
      {/*//! WishList Button */}
      <Tab.Screen
        name="WishList"
        component={WishList}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.buttons}>
              {!focused ? (
                <AntDesign name="hearto" size={25} color={color} />
              ) : (
                <Image
                  source={require("../../assets/Images/give-love2.png")}
                  style={styles.imgIcon}
                />
              )}
              <Text style={{ fontSize: focused ? 12 : 10 }}>Wish List</Text>
            </View>
          ),
        }}
      />
      {/* //!Product Pic Button */}
      <Tab.Screen
        name="ProductPic"
        component={ProductPic}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.buttons, styles.buttonCenter]}>
              {!focused ? (
                <Entypo name="camera" size={25} color={color} />
              ) : (
                <Image
                  source={require("../../assets/Images/cameraNew.png")}
                  style={styles.imgIcon}
                />
              )}
              <Text style={{ fontSize: focused ? 12 : 10 }}>Search</Text>
            </View>
          ),
        }}
      />
      {/* //!EComm Button */}
      <Tab.Screen
        name="EComm"
        component={EComm}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.buttons}>
              {!focused ? (
                <Entypo name="magnifying-glass" size={25} color={color} />
              ) : (
                <Image
                  source={require("../../assets/Images/magnifier.png")}
                  style={styles.imgIcon}
                />
              )}
              <Text style={{ fontSize: focused ? 12 : 10 }}>E-Comm</Text>
            </View>
          ),
        }}
      />
      {/* //!Profile Button  */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.buttons}>
              {!focused ? (
                // <Entypo name="magnifying-glass" size={25} color={color} />
                <Image
                  source={require("../../assets/Images/user2.png")}
                  style={styles.imgIcon}
                />
              ) : (
                <Image
                  source={require("../../assets/Images/boy.png")}
                  style={styles.imgIcon}
                />
              )}
              <Text style={{ fontSize: focused ? 12 : 10 }}>Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({
  tabHolder: {
    padding: 10,
  },
  buttons: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonCenter: {
    backgroundColor: "rgba(255,255,255,1)",
    padding: 10,
    borderRadius: 50,
    bottom: 20,
    textAlign: "center",
    width: 70,
    height: 70,
  },
  imgIcon: {
    width: 25,
    height: 25,
  },
  imgIcon2: {
    width: 30,
    height: 30,
    color: "#000",
  },
  fly: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "rgba(255,255,255,0.5)",
    padding: 10,
    bottom: 0,
    marginHorizontal: 10,
    // width: "100%",
    height: 70,
    shadowColor: "#404040",
    elevation: 5,
    textAlign: "center",
  },
});
