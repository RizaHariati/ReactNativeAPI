import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import {
  clrBorder,
  clrSecondaryLight,
  globalstyles,
} from "../../assets/styles/globalstyles";

const InputField = (props) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={globalstyles.regularText}>{props.command}</Text>
      <TextInput
        style={styles.inputField}
        placeholder={props.placeholder}
        onChangeText={props.onChange}
        value={props.thevalue}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "90%",
    marginVertical: 10,
  },
  inputField: {
    borderWidth: 1,
    borderColor: clrBorder,
    padding: 8,
    width: "100%",
    borderRadius: 5,
    fontFamily: "fontRegular",
    backgroundColor: clrSecondaryLight,
  },
});
