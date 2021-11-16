import React from "react";
import { View } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";


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
     <Form.Input
        fluid
        name="firstname" 
        label='First Name'
        placeholder='John'
    />
    <Form.Input 
        fluid 
        name='lastname' 
        label='Last name' 
        placeholder='Smith'
    />
    <Form.Input 
        fluid 
        name='email'
        label='Email' 
        placeholder='xyz@example.com'
        type='email'  
    />
      
    <Form.Group>
    <Form.Input 
        width={10} 
        name='street' 
        label='Address' 
        placeholder='122 Example St'   
    />
    <Form.Select
        width={6} 
        name='country' 
        label='Select Country' 
        options={countries}
    />
   </Form.Group>
  <Form.Group>
      <Form.Input 
          width={6} 
          name='town_city' 
          label='Town/City' 
          placeholder='Las Vegas' 
      />
      <Form.Select
          width={6} 
          label='County/State/Province/Territory' 
          placeholder='Search ...'
          name='county_state' 
          search 
          fluid
          options={getCountryInfoShipping()}
      />
      <Form.Input
          width={4} 
          type='number'
          name='postal_zip_code' 
          label='Zip/Postal' 
          placeholder='00000'
      />
      </Form.Group>

        <Form.Select
          width={6} 
          label='County/State/Province/Territory' 
          placeholder='Search ...'
          name='county_state' 
          search 
          fluid
          options={getCountryInfoShipping()}
        />
        <Form.Group className='payment-radio'>
        <input
            name='gateway' 
            type='radio'
            value='test_gateway'
        />
        <label htmlFor="test_gateway">Test Gateway</label>
        <input
            name='gateway' 
            type='radio'
            value='stripe'
        />
        <label htmlFor="stripe">Credit Card</label>
    </Form.Group>
    <Form.Group>
        <Form.Input
            name='number'
            type='number' 
            label='Credit Card Number' 
            placeholder='0000111100001111' 
        />
        <Form.Input
            name='postal_billing_zip_code' 
            type='number'
            max='99999'
            label='Billing Zip' 
            placeholder='Enter Billing Zip Code'
        />
    </Form.Group>
    <Form.Group>
        <Form.Select 
            width={3} 
            name='expiry_month' 
            fluid 
            options={monthOptions} 
            label='Month' 
        />
        <Form.Select 
            width={3} 
            name='expiry_year' 
            fluid 
            options={yearOptions} 
            label='Year' 
        />
        <Form.Input 
            width={3} 
            name='cvc'
            type='number'
            label='CVC' 
            placeholder='123'
        />
      </Form.Group>

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
        <Text style={{ paddingLeft: 10, color: "white" }}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}
