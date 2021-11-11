import React from "react";
import { View } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { Card } from 'antd';

const { Meta } = Card;

export default function Home(params) {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop: 55,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Ionicons name="ios-menu-outline" size={24} color="black" />
        <FontAwesome name="motorcycle" size={24} color="black" />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AntDesign name="search1" size={20} color="black" />
          <Ionicons name="notifications-outline" size={20} color="black" />
        </View>

        <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://uk.millybridal.org/desktop/cache/details/fresh/D020103201.jpg" />}
  >
    <Meta title="Lush prom dress for lovely evening" description="Pearl Green Dress" />
  </Card>
      
      </View>
    </View>
  );
}
