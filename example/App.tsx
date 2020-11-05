import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import RNMonthly from "./lib/RNMonthly";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, width: "100%", alignItems: "center" }}>
        <RNMonthly numberOfDays={31} activeDays={[1, 5, 6, 31, 11, 21]} />
      </SafeAreaView>
    </>
  );
};

export default App;
