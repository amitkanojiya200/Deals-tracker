import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { products } from "../productList/Product";
import { useNavigation } from "@react-navigation/native";
import Header from "../Navigation/Header";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createStackNavigator } from "@react-navigation/stack";

const HomeScreen1 = () => {
  useEffect(() => {
    // Whenever products.js changes, setProductList will trigger a re-render
    setProductList(products);
  }, [products]); // dependency array listens to changes in the products module

  const [productList, setProductList] = useState(products);
  const navigation = useNavigation();
  const [like, setLike] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const updatedProducts = productList.filter(product => product.endTime > now);
  //     setProductList(updatedProducts);
  //   }, 1000);
  // return () => clearInterval(interval); // Clean up interval on unmount
  // }, [productList]);

  const renderItem = ({ item }) => (
    <ScrollView>
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.description}</Text>
        <Text>Discount: {item.discount}%</Text>
        <View
          style={{
            flex: 1,
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "row",
            color: "#fff",
          }}
        >
          <TouchableOpacity>
            <FontAwesome5 name="share-square" size={25} color="black" />
            <Text>Share</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setLike(!like)}>
            {!like ? (
              <AntDesign name="hearto" size={25} color="black" />
            ) : (
              <AntDesign name="heart" size={25} color="red" />
            )}
            <Text>Like</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <MaterialIcons
              name="store-mall-directory"
              size={24}
              color="black"
            />
            <Text>Buy</Text>
          </TouchableOpacity>
        </View>
        <Button
          title="View Details"
          onPress={() =>
            navigation.navigate("BottomTabNavigation", { product: item })
          }
        />
      </View>
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={productList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};
const HomeScreen2 = () => {
  return (
    <View>
      <Text>Hello world 2</Text>
    </View>
  );
};

const HomeScreen = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="HomeScreen1">
      <Stack.Screen
        name="HomeScreen1"
        component={HomeScreen1}
        options={{
          headerShown:false,
        }}
      />
      <Stack.Screen name="HomeScreen2" component={HomeScreen2} />
    </Stack.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
