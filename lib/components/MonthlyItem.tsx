import * as React from "react";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import { _container } from "./MonthlyItem.style";

export interface IMonthlyItemProps {
  isActive?: boolean;
  activeBackgroundColor?: string;
  inactiveBackgroundColor?: string;
  onPress?: () => void;
}

const MonthlyItem: React.FC<IMonthlyItemProps> = ({
  onPress,
  isActive = false,
  activeBackgroundColor = "#49c1c2",
  inactiveBackgroundColor = "#f0f0f0",
}) => {
  return (
    <RNBounceable
      style={_container(
        isActive ? activeBackgroundColor : inactiveBackgroundColor,
      )}
      onPress={onPress}
    />
  );
};

export default MonthlyItem;
