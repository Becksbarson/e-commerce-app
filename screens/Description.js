import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Login(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
     
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Glits and Glamour</Text>
      <Text style={{ fontSize: 16, fontWeight: "italic" }}>Product Description</Text>
      
      
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Checkout");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "#ADD8E6",
        }}
      >
        <Text style={{ paddingLeft: 10, color: "#fff" }}>CheckOut</Text>
      </TouchableOpacity>
    </View>
  );
}
