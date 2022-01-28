import React from "react";
import { TouchableOpacity, View } from "react-native";
import { globalstyles } from "../../assets/styles/globalstyles";
import { Ionicons } from "@expo/vector-icons";

const IconButton = (props) => {
  return (
    <TouchableOpacity onPress={props.clicked}>
      <View style={[globalstyles.button, { backgroundColor: props.color }]}>
        <Ionicons name={props.name} size={20} color="white" />
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;
