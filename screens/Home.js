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
  <ScrollView style={styles.scrollView}>
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
                src="https://cdn.shopify.com/s/files/1/1674/3893/products/Simidress_Prom_Dress_SP531_1_800x.jpg?v=1618309616"
              />
           }
          >   
           <Meta title="Classic dress for a classic princess" description="Classic dress for a classic princess" />
         </Card.Grid>
          <Card.Grid style={gridStyle}
            cover={
              <img
                src="https://i.ebayimg.com/images/g/65AAAOSwH49efEhU/s-l400.jpg"
              />
           }
          >   
           <Meta title="Classic dress for a classic princess" description="Classic dress for a classic princess" />
         </Card.Grid>
           <Card.Grid style={gridStyle}
            cover={
              <img
                src="https://i.insider.com/5c92668bdd08610536068504?width=1000&format=jpeg&auto=webp"
              />
           }
          >   
           <Meta title="Classic dress for a classic princess" description="Classic dress for a classic princess" />
         </Card.Grid>
           <Card.Grid style={gridStyle}
            cover={
              <img
                src="https://images.squarespace-cdn.com/content/v1/5c55d7e3fd67934e24b4c062/1571165449944-Y87DKXHJQNFIEASWBWY7/48266303_1979666328776909_3429015590348521472_n.jpg"
              />
           }
          >   
           <Meta title="Classic dress for a classic princess" description="Classic dress for a classic princess" />
         </Card.Grid>
          <Card.Grid style={gridStyle}
            cover={
              <img
                src="https://dy9ihb9itgy3g.cloudfront.net/products/3211/54303/54303__lilac__49176.740.jpg"
              />
           }
          >   
           <Meta title="Classic dress for a classic princess" description="Classic dress for a classic princess" />
         </Card.Grid>
          <Card.Grid style={gridStyle}
            cover={
              <img
                src="https://images.squarespace-cdn.com/content/v1/58dd2e8cd482e901dc909117/1573595354696-LUZMLM58Y86VCC0SPEZT/26944-B-13.jpg"
              />
           }
          >   
           <Meta title="Classic dress for a classic princess" description="Classic dress for a classic princess" />
         </Card.Grid>
          <Card.Grid style={gridStyle}
            cover={
              <img
                src="https://cdn.shopify.com/s/files/1/0144/7018/5017/products/sherri-hill-52489-floral-single-shoulder-a-line-high-low-dress-homecoming-dresses-00-lilac-print-28901969592403.jpg?v=1631109672"
              />
           }
          >   
           <Meta title="Classic dress for a classic princess" description="Classic dress for a classic princess" />
         </Card.Grid>
          <Card.Grid style={gridStyle}
            cover={
              <img
                src="https://www.lulus.com/images/content/w_750/content___prom2021jumpsuits2.jpg"
              />
           }
          >   
           <Meta title="Classic dress for a classic princess" description="Classic dress for a classic princess" />
         </Card.Grid>
        </Card>
      
      </View>
    </View>
  </ScrollView>
  );
}
