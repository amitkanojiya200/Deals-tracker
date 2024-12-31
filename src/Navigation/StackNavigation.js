import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../AuthScreen/Login";
import BottomTabNavigation from "./BottomTabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import OnBoardingScreens from "../onBoardingScreen/OnBoardingScreens";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const Loading = () => {
//   return (
//     <View>
//       <ActivityIndicator size="large" />
//     </View>
//   );
// };

const StackNavigation = () => {
  const Stack = createStackNavigator();
  // const [loading, setLoading] = useState(true);
  // const [viewedOnboarding, setViewedOnboarding] = useState(false);

  // const checkOnboarding = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@viewedOnboarding');

  //     if (value !== null){
  //       setViewedOnboarding(true);
  //     }
  //   } catch (error) {
  //     console.log("Error @viewedOnboading : ",error)
  //   }finally{
  //     setLoading(false);
  //   }
  // }

  // useEffect(()=>{
  //   checkOnboarding();
  // },[])

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="BottomTabNavigation">
        {/* <Stack.Screen name="LoginScreen" component={Login} options={{ headerShown: false }} /> */}

        <Stack.Screen
          name="OnBoardingScreen"
          component={OnBoardingScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
