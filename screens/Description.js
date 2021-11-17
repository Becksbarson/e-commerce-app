import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Dimensions } from 'react-native';

export default function Description(params) {
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
      <Text> Product Description </Text>
      
      <Card
        style={{ 
               width: Dimensions.get('window').width,
               height: Dimensions.get('window').height 
        }}
        cover={
          <img
            src="uk.millybridal.org/desktop/cache/details/fresh/D020103201.jpg"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          title="GH₵ 250.00"
          description="Looks astonishing in this lovely dress and have all eyes on you"
        />
      </Card>,
    </View>
  );
}
