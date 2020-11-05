import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import RNMonthly from "./build/dist/RNMonthly";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, width: "100%", alignItems: "center" }}>
        <RNMonthly numberOfDays={31} activeDays={[1, 5, 6, 11, 21, 31]} />
        <RNMonthly
          numberOfDays={30}
          activeBackgroundColor="green"
          inactiveBackgroundColor="#E6FFDE"
          activeDays={[1, 5, 6, 11, 21, 31]}
        />
        <RNMonthly
          numberOfDays={28}
          activeBackgroundColor="#9C1818"
          inactiveBackgroundColor="#FFDEDE"
          activeDays={[1, 5, 6, 11, 21, 31]}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
