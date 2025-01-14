import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";

const OnBoardingItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "center" }]}
      />
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnBoardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image:{
    flex: 0.7,
    justifyContent: 'center',
  },
  title:{
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    color: "#493d8a",
    textAlign: 'center'
  },
  description:{
    fontWeight: '300',
    color: '#493d8a',
    textAlign: 'center',
    paddingHorizontal: 64,
  },
});
