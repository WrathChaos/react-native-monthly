import { ViewStyle, Dimensions, StyleSheet } from "react-native";
const { width: ScreenWidth } = Dimensions.get("screen");

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
