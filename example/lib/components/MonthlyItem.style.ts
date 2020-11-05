import { ScreenWidth } from "@freakycoder/react-native-helpers";
import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
}
export const _container = (backgroundColor: string): ViewStyle => ({
  backgroundColor,
  borderRadius: 12,
  width: ScreenWidth * 0.1,
  height: ScreenWidth * 0.1,
});

export default StyleSheet.create<Style>({
  container: {},
});
