import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles, { _monthlyCalendarContainer } from "./RNMonthly.style";
import MonthlyItem, { IMonthlyItemProps } from "./components/MonthlyItem";

const includes = (value: number, array: Array<number>) =>
  array.indexOf(value) > -1;

export type CustomStyleProp =
  | StyleProp<ViewStyle>
  | Array<StyleProp<ViewStyle>>;

export interface IRNMonthlyProps extends IMonthlyItemProps {
  style?: CustomStyleProp;
  today?: number;
  numberOfDays?: number;
  activeDays?: Array<number>;
}

const RNMonthly: React.FC<IRNMonthlyProps> = ({
  style,
  today,
  numberOfDays = 31,
  activeDays,
  ...rest
}) => {
  if (numberOfDays < 28 || numberOfDays > 31)
    throw new Error("numberOfDays cannot be less than 28 and more than 31");

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
        index={index}
        isToday={index === today}
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
