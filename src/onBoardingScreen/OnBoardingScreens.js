import { StyleSheet, Text, View, FlatList, Animated } from "react-native";
import React, { useRef, useState } from "react";
import slides from "../../assets/screen/screens";
import OnBoardingItem from "./OnBoardingItem";
import Paginator from "./Paginator";
import NextButton from "./NextButton";
import { useNavigation } from "@react-navigation/native";

// import AsyncStorage from "@react-native-async-storage/async-storage";

const OnBoardingScreens = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const [btnText,setBtnText] = useState("Next");
  const navigation = useNavigation();

  const viewableItemChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = async()=>{
    if(currentIndex < slides.length - 1){
      slidesRef.current.scrollToIndex({index : currentIndex +1 });
      if(currentIndex !== slides.length - 2){
        setBtnText("Next");
      }else{
        setBtnText("Continue");
      }
    }else{
      navigation.navigate("BottomTabNavigation");
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnBoardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>

      <Paginator data={slides} scrollX={scrollX} />
      <NextButton scrollTo={scrollTo} btnText={btnText} />
    </View>
  );
};

export default OnBoardingScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
