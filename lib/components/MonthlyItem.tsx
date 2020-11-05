import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import { _container } from "./MonthlyItem.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IMonthlyItemProps {
  style?: CustomStyleProp;
  isActive?: boolean;
  backgroundColor?: string;
  onPress?: () => void;
}

const MonthlyItem: React.FC<IMonthlyItemProps> = ({
  style,
  onPress,
  isActive = false,
  backgroundColor = "#49c1c2",
  ...rest
}) => {
  return (
    <RNBounceable
      {...rest}
      style={[_container(isActive ? backgroundColor : "#F0F0F0"), style]}
      onPress={onPress}
    />
  );
};

export default MonthlyItem;
