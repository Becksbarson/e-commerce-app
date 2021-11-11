import React from "react";
import { View } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { Card } from 'antd';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

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

        <Card title="Card Title">
          <Card.Grid style={gridStyle}
            cover={
              <img
                src="https://uk.millybridal.org/desktop/cache/details/fresh/D020103201.jpg"
              />
           }
          >   
           <Meta title="Classic dress for a classic princess" description="Classic dress for a classic princess" />
         </Card.Grid>
           <Card.Grid style={gridStyle}
            cover={
              <img
                src="https://uk.millybridal.org/desktop/cache/details/fresh/D020103201.jpg"
              />
           }
          >   
           <Meta title="Classic dress for a classic princess" description="Classic dress for a classic princess" />
         </Card.Grid>
          <Card.Grid style={gridStyle}
            cover={
              <img
                src="https://uk.millybridal.org/desktop/cache/details/fresh/D020103201.jpg"
              />
           }
          >   
           <Meta title="Classic dress for a classic princess" description="Classic dress for a classic princess" />
         </Card.Grid>
           <Card.Grid style={gridStyle}
            cover={
              <img
                src="https://uk.millybridal.org/desktop/cache/details/fresh/D020103201.jpg"
              />
           }
          >   
           <Meta title="Classic dress for a classic princess" description="Classic dress for a classic princess" />
         </Card.Grid>
           <Card.Grid style={gridStyle}
            cover={
              <img
                src="https://uk.millybridal.org/desktop/cache/details/fresh/D020103201.jpg"
              />
           }
          >   
           <Meta title="Classic dress for a classic princess" description="Classic dress for a classic princess" />
         </Card.Grid>
          <Card.Grid style={gridStyle}
            cover={
              <img
                src="https://uk.millybridal.org/desktop/cache/details/fresh/D020103201.jpg"
              />
           }
          >   
           <Meta title="Classic dress for a classic princess" description="Classic dress for a classic princess" />
         </Card.Grid>
          <Card.Grid style={gridStyle}
            cover={
              <img
                src="https://uk.millybridal.org/desktop/cache/details/fresh/D020103201.jpg"
              />
           }
          >   
           <Meta title="Classic dress for a classic princess" description="Classic dress for a classic princess" />
         </Card.Grid>
          <Card.Grid style={gridStyle}
            cover={
              <img
                src="https://uk.millybridal.org/desktop/cache/details/fresh/D020103201.jpg"
              />
           }
          >   
           <Meta title="Classic dress for a classic princess" description="Classic dress for a classic princess" />
         </Card.Grid>
          <Card.Grid style={gridStyle}
            cover={
              <img
                src="https://uk.millybridal.org/desktop/cache/details/fresh/D020103201.jpg"
              />
           }
          >   
           <Meta title="Classic dress for a classic princess" description="Classic dress for a classic princess" />
         </Card.Grid>
        </Card>
      
      </View>
    </View>
  );
}
