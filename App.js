import { Text, View } from "react-native";
import { fonts } from "./assets/styles/fonts";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import Route from "./src/navigations/Route";

export default function App() {
  const [fontLoaded] = useFonts(fonts);

  if (!fontLoaded) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  } else {
    return <Route />;
  }
}
