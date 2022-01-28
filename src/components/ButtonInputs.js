import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  globalstyles,
  clrPrimaryDark,
  clrBorder,
} from "../../assets/styles/globalstyles";
const ButtonInputs = (props) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={globalstyles.regularText}>{props.title}</Text>
      <View style={styles.col}>
        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <TouchableOpacity onPress={props.onPress0}>
              {props.selectValue == 0 ? (
                <Ionicons name="ellipse" color={clrPrimaryDark} size={20} />
              ) : (
                <Ionicons
                  name="ellipse-outline"
                  color={clrPrimaryDark}
                  size={20}
                />
              )}
            </TouchableOpacity>
            <Text style={globalstyles.regularText}>{props.option0}</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={props.onPress1}>
              {props.selectValue == 1 ? (
                <Ionicons name="ellipse" color={clrPrimaryDark} size={20} />
              ) : (
                <Ionicons
                  name="ellipse-outline"
                  color={clrPrimaryDark}
                  size={20}
                />
              )}
            </TouchableOpacity>
            <Text style={globalstyles.regularText}>{props.option1}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ButtonInputs;
const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "90%",
    marginVertical: 10,
  },
  col: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: clrBorder,
    borderRadius: 5,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rowContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
