import {
  ViewStyle,
  ImageStyle,
  TextStyle,
  Dimensions,
  StyleSheet,
} from "react-native";
const { width: ScreenWidth } = Dimensions.get("window");

interface Style {
  container: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    paddingLeft: 12,
    flexWrap: "wrap",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
