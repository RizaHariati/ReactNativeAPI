import React from "react";
import { Button, Text, View } from "react-native";
import { globalstyles } from "../../../assets/styles/globalstyles";
const Home = (props) => {
  return (
    <View style={globalstyles.container}>
      <Text style={globalstyles.titleText}>Home</Text>
      <Button
        title="Users"
        onPress={() => {
          props.navigation.navigate("Users");
        }}
      />
    </View>
  );
};

export default Home;
