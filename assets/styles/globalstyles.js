import { StatusBar, StyleSheet } from "react-native";

const clrPrimaryDark = "dodgerblue";
const clrPrimaryLight = "white";
const clrSecondaryLight = "#f3f3f3";
const clrBorder = "lightgray";
export { clrPrimaryDark, clrPrimaryLight, clrSecondaryLight, clrBorder };
export const globalstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  safeViewContainer: {
    backgroundColor: clrPrimaryLight,
    padding: 20,
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  titleText: { fontFamily: "fontMedium", fontSize: 30 },
  mediumText: { fontFamily: "fontMedium", fontSize: 20 },
  regularText: { fontFamily: "fontRegular", fontSize: 16 },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 2,
    height: 30,
    width: 30,
    borderRadius: 3,
    backgroundColor: "dodgerblue",
  },
});
