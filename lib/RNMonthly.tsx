import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles, { _monthlyCalendarContainer } from "./RNMonthly.style";
import MonthlyItem from "./components/MonthlyItem";

const includes = (value: number, array: Array<number>) =>
  array.indexOf(value) > -1;

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
  ...rest
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

  const renderMonthlyItem = (index: number, flexBasisPercentage: string) => (
    <View
      key={index}
      style={_monthlyCalendarContainer(
        index,
        numberOfDays,
        flexBasisPercentage,
      )}
    >
      <MonthlyItem
        {...rest}
        isActive={activeDays && includes(index, activeDays)}
      />
    </View>
  );

  const renderMonthlyCalendar = (): React.ReactElement => {
    const days: any = Array<JSX.Element>();
    const flexBasisPercentage = calculateFlexBasisPercentage();
    for (let index = 1; index <= numberOfDays; index++) {
      days.push(renderMonthlyItem(index, flexBasisPercentage));
    }
    return days;
  };

  return (
    <View style={[styles.container, style]}>{renderMonthlyCalendar()}</View>
  );
};

export default RNMonthly;
