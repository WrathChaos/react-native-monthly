import * as React from "react";
import { StyleProp, TextStyle, Text, ViewStyle } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles, { _container } from "./MonthlyItem.style";

export type CustomStyleProp =
  | StyleProp<ViewStyle>
  | Array<StyleProp<ViewStyle>>;

export type CustomTextStyleProp =
  | StyleProp<TextStyle>
  | Array<StyleProp<TextStyle>>;

export interface IMonthlyItemProps {
  index?: number;
  isToday?: boolean;
  isActive?: boolean;
  activeBackgroundColor?: string;
  inactiveBackgroundColor?: string;
  todayTextStyle?: CustomTextStyleProp;
  itemContainerStyle?: CustomStyleProp;
  onPress?: () => void;
}

const MonthlyItem: React.FC<IMonthlyItemProps> = ({
  onPress,
  index,
  todayTextStyle,
  itemContainerStyle,
  isActive = false,
  isToday = false,
  activeBackgroundColor = "#49c1c2",
  inactiveBackgroundColor = "#f0f0f0",
}) => {
  return (
    <RNBounceable
      style={[
        _container(
          isActive ? activeBackgroundColor : inactiveBackgroundColor,
          isToday,
        ),
        itemContainerStyle,
      ]}
      onPress={onPress}
    >
      {isToday && (
        <Text style={[styles.todayTextStyle, todayTextStyle]}>{index}</Text>
      )}
    </RNBounceable>
  );
};

export default MonthlyItem;
