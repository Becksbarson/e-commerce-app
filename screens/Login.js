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
      <Image
        style={{
          transform: [{ rotate: "180deg" }],
          borderRadius: 100,
          marginBottom: -90,
          width: 120,
          height: 200,
        }}
        source={{
          uri: "https://images.unsplash.com/photo-1633114127188-99b4dd741180?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        }}
      />
      <Image
        style={{
          transform: [{ rotate: "180deg" }],
          borderRadius: 100,
          marginBottom: 100,
          width: 120,
          height: 200,
        }}
        source={{
          uri: "https://images.unsplash.com/photo-1633114127188-99b4dd741180?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        }}
      />
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Glits and Glamour</Text>
      {<View style={{}}>
        <TextInput
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Enter your username or email"
        />
      </View>}
      {<View style={{ marginTop: 10,}}>
        <TextInput
          secureTextEntry={true}
          onChangeText={(
            e
          )=> {
            console.log(e)
          }}
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Enter your password"
        />
      </View> }
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        
        <AntDesign name="apple1" size={20} color="black" />
        <Text style={{ paddingLeft: 10, color: "black" }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
