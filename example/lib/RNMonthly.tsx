import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles, { _monthlyCalendarContainer } from "./RNMonthly.style";
import MonthlyItem from "./components/MonthlyItem";

export type CustomStyleProp =
  | StyleProp<ViewStyle>
  | Array<StyleProp<ViewStyle>>;

export interface IRNMonthlyProps {
  style?: CustomStyleProp;
  numberOfDays?: number;
  activeDays?: Array<number>;
}

const RNMonthly: React.FC<IRNMonthlyProps> = ({
  style,
  numberOfDays = 31,
  activeDays,
}) => {
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

  const renderMonthlyCalendar = () => {
    const days = [];
    const flexBasisPercentage = calculateFlexBasisPercentage();
    for (let index = 1; index <= numberOfDays; index++) {
      days.push(
        <View
          style={_monthlyCalendarContainer(
            index,
            numberOfDays,
            flexBasisPercentage,
          )}
        >
          <MonthlyItem isActive={activeDays?.includes(index)} />
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
