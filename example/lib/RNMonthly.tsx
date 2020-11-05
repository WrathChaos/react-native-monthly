import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./RNMonthly.style";
import MonthlyItem from "./components/MonthlyItem";

export type CustomStyleProp =
  | StyleProp<ViewStyle>
  | Array<StyleProp<ViewStyle>>;

export interface IRNMonthlyProps {
  style?: CustomStyleProp;
  numberOfDays?: number;
}

const RNMonthly: React.FC<IRNMonthlyProps> = ({ style, numberOfDays = 31 }) => {
  const calculateFlexBasisPercentage = () => {
    switch (numberOfDays) {
      case 31:
        return "71%";
      case 30:
        return "85.5%";
      case 29:
        return "100%";
      default:
        return "100%";
    }
  };

  // ? 31 Days: "71%" : "14.2857142857%"
  // ? 30 Days: "85.5%" : "14.2857142857%"
  // ? 29 Days: "100%" : "14.2857142857%"
  const renderMonthlyCalendar = () => {
    const days = [];
    const flexBasisPercentage = calculateFlexBasisPercentage();
    for (let index = 0; index < numberOfDays; index++) {
      days.push(
        <View
          style={{
            marginTop: 8,
            flexBasis:
              index > numberOfDays - (numberOfDays === 28 ? 1 : 2)
                ? flexBasisPercentage
                : "14.2857142857%",
          }}
        >
          <MonthlyItem isActive={index % 5 === 0} />
        </View>,
      );
    }
    return days;
  };

  return (
    <View style={[styles.container, style]}>{renderMonthlyCalendar()}</View>
  );
};

export default RNMonthly;
