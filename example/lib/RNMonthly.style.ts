import { ViewStyle, StyleSheet } from "react-native";

const NORMAL_DAYS_PERCENTAGE = "14.2857142857%";

export const _monthlyCalendarContainer = (
  index: number,
  numberOfDays: number,
  flexBasisPercentage: string,
): ViewStyle => ({
  marginTop: 8,
  flexBasis:
    index > numberOfDays - (numberOfDays === 28 ? 0 : 1)
      ? flexBasisPercentage
      : NORMAL_DAYS_PERCENTAGE,
});

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
