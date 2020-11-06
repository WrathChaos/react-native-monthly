import { ViewStyle, TextStyle, Dimensions, StyleSheet } from "react-native";
const { width: ScreenWidth } = Dimensions.get("screen");

interface Style {
  todayTextStyle: TextStyle;
}
export const _container = (
  backgroundColor: string,
  isToday: boolean,
): ViewStyle => ({
  backgroundColor,
  borderRadius: 12,
  width: ScreenWidth * 0.1,
  height: ScreenWidth * 0.1,
  alignItems: "center",
  justifyContent: "center",
  borderWidth: isToday ? 2 : 0,
  borderColor: isToday ? "#f27493" : "transparent",
});

export default StyleSheet.create<Style>({
  todayTextStyle: {
    color: "red",
    fontSize: 14,
    fontWeight: "500",
  },
});
