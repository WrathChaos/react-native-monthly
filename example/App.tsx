import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import moment from "moment";
import RNMonthly from "./lib/RNMonthly";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, width: "100%", alignItems: "center" }}>
        <RNMonthly
          numberOfDays={31}
          activeDays={[1, 5, 6, 11, 21, 31]}
          today={parseInt(moment().format("D"))}
          todayTextStyle={{ color: "#146C6D" }}
          itemContainerStyle={{ borderColor: "#146C6D" }}
        />
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
          activeDays={[1, 2, 3, 4, 5, 11, 21, 31]}
          today={parseInt(moment().format("D"))}
          todayTextStyle={{ color: "#9c1817" }}
          itemContainerStyle={{ borderColor: "#9c1817" }}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
