// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BottomTabNavigation from './src/Navigation/BottomTabNavigation';
// import { SafeAreaView } from '@react-navigation/native';
import StackNavigation from './src/Navigation/StackNavigation';

export default function App() {
  return (
    <SafeAreaView style={{ flex:1,backgroundColor: "#000" }}>
      <StackNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
