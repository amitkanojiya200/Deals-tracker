import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import UserProfile from '../Screen/UserProfile';
import UserProfileEdit from '../Screen/UserProfileEdit';

const Profile = () => {
    const Stack = createStackNavigator();

    return (
      <Stack.Navigator initialRouteName='UserProfile'>
          <Stack.Screen name="UserProfile" component={UserProfile} options={{ headerShown: false }} />
          <Stack.Screen name="UserProfileEdit" component={UserProfileEdit} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
}

export default Profile

const styles = StyleSheet.create({})