import {
  StyleSheet,
  Text,
  View,
  Flatlist,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const Stories = () => {
  const storiesData = [
    {
      id: 1,
      image: require("../assets/images/image1.jpg"),
      name: "your story",
    },
    {
      id: 2,
      image: require("../assets/images/image2.jpg"),
      name: "your story",
    },
    {
      id: 3,
      image: require("../assets/images/image3.jpg"),
      name: "David",
    },
    {
      id: 4,
      image: require("../assets/images/image4.jpg"),
      name: "Dolapo",
    },
    {
      id: 5,
      image: require("../assets/images/image5.jpg"),
      name: "Damola",
    },
    {
      id: 6,
      image: require("../assets/images/image6.jpg"),
      name: "Damola",
    },
  ];
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {storiesData.map((data, index) => {
        return (
          <View style={{ marginVertical: 10 }}>
            <View key={index} style={styles.container}>
              <Image
                source={data.image}
                style={{ height: 55, width: 55, borderRadius: 100 }}
              />
              {data.id == 1 ? (
                <View style={styles.iconAddCtn}>
                  <Feather name="plus-circle" size={10} color="fff" />
                </View>
              ) : null}
            </View>
            <Text style={{ fontSize: 14, color: "#000", textAlign: "center" }}>
              {data.name}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    height: 65,
    width: 65,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "purple",
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  iconAddCtn: {
    height: 25,
    width: 25,
    bottom: 0,
    right: 0,
    backgroundColor: "blue",
    borderRadius: 100,
    borderColor: "fff",
    borderwidth: 2,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
});
