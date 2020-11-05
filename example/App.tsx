import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import RNMonthly from "./lib/RNMonthly";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, width: "100%", alignItems: "center" }}>
        <RNMonthly numberOfDays={30} />
      </SafeAreaView>
    </>
  );
};

export default App;
