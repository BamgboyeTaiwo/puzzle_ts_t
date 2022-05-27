import { View, Text, Switch, StyleSheet } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import SettingsIcon from "../assets/settingsIcon";
import { AntDesign } from "@expo/vector-icons";
import SizeW from "./sizeConfig";
import SizeH from "./sizeConfig";
import ToggleSwitch from "toggle-switch-react-native";

export default function TestPage() {
    const [MonthlyisEnabled, setMonthlyIsEnabled] = useState(true);
    const [WeeklyisEnabled, setWeeklyisEnabled] = useState(false)
    const [BillisEnabled, setBillisEnabled] = useState(true)
    const [SubscriptionisEnabled, setSubscriptionisEnabled] = useState(false)
    const [HSalertsisEnabled, setHSalertsisEnabled] = useState(true)
  return (
    <View>
        <View style={styles.container}>
        <View style={[tw`pt-1 justify-between w-full]`, { flexDirection: "row" }]}>
          <View style={tw`flex-row justify-between`}>
            <AntDesign name="back" size={26} color="#14328C" style={tw`mr-[${SizeW(15)}]`} />
            <View style={tw`mt-1`}>
              <Text style={tw` text-[#7E8FC0] text-[25px] text-center leading-[25px] tracking-[1.2px] `}>
                Notification Settings
              </Text>
            </View>
          </View>
        </View>
        <View style={[tw`mt-[2rem] `]}>
          <Text style={[tw`text-[#7E8FC0] text-[1.1rem] tracking-[0.96px] `]}>Reports</Text>
        </View>

        <View style={[tw`mt-[1.25rem] `]}>
          <View style={[tw`flex-row justify-between`]}>
            <Text style={[tw`text-[#14328C] font-bold text-[1.2rem] tracking-[0.96px] `]}>Monthly Reports</Text>
            <ToggleSwitch
            isOn={MonthlyisEnabled}
            onColor="#5eddea"
            offColor="#6a74ad"
            thumbOnStyle={ { backgroundColor: "#14328c"}}
            thumbOffStyle={ { backgroundColor: "#7e8fc1"}}
            trackOnStyle={ { backgroundColor: "#5eddea"}}
            trackOffStyle={ { backgroundColor: "#6a74ad"}}
            // label="Example label"
            labelStyle={{ color: "black", fontWeight: "900" }}
            size="medium"
            onToggle={()=>{ setMonthlyIsEnabled((previousState) => !previousState)}}
          />
          </View>
          <View style={[tw` mt-[2rem] flex-row justify-between`]}>
            <Text style={[tw`text-[#14328C] font-bold text-[1.2rem] tracking-[0.96px] `]}>Weekly Reports</Text>
            <ToggleSwitch
            isOn={WeeklyisEnabled}
            onColor="#5eddea"
            offColor="#6a74ad"
            thumbOnStyle={ { backgroundColor: "#14328c"}}
            thumbOffStyle={ { backgroundColor: "#7e8fc1"}}
            trackOnStyle={ { backgroundColor: "#5eddea"}}
            trackOffStyle={ { backgroundColor: "#6a74ad"}}
            // label="Example label"
            labelStyle={{ color: "black", fontWeight: "900" }}
            size="medium"
            onToggle={()=>{ setWeeklyisEnabled((previousState) => !previousState)}}
          />
          </View>
        </View>

        <View style={[tw`mt-[2rem] `]}>
          <Text style={[tw`text-[#7E8FC0] text-[1.1rem] tracking-[0.96px] `]}>Push Notifications</Text>
        </View>

        <View style={[tw`mt-[1.25rem] `]}>
          <View style={[tw`flex-row justify-between`]}>
            <Text style={[tw`text-[#14328C] font-bold text-[1.2rem] tracking-[0.96px] `]}>Bill Reminder</Text>
            <ToggleSwitch   
            isOn={BillisEnabled}
            onColor="#5eddea"
            offColor="#6a74ad"
            thumbOnStyle={ { backgroundColor: "#14328c"}}
            thumbOffStyle={ { backgroundColor: "#7e8fc1"}}
            trackOnStyle={ { backgroundColor: "#5eddea"}}
            trackOffStyle={ { backgroundColor: "#6a74ad"}}
            // label="Example label"
            labelStyle={{ color: "black", fontWeight: "900" }}
            size="medium"
            onToggle={()=>{ setBillisEnabled((previousState) => !previousState)}}
          />
          </View>
          <View style={[tw` mt-[2rem] flex-row justify-between`]}>
            <Text style={[tw`text-[#14328C] font-bold text-[1.2rem] tracking-[0.96px] `]}>Subscription Renewal</Text>
            <ToggleSwitch
            isOn={SubscriptionisEnabled}
            onColor="#5eddea"
            offColor="#6a74ad"
            thumbOnStyle={ { backgroundColor: "#14328c"}}
            thumbOffStyle={ { backgroundColor: "#7e8fc1"}}
            trackOnStyle={ { backgroundColor: "#5eddea"}}
            trackOffStyle={ { backgroundColor: "#6a74ad"}}
            // label="Example label"
            labelStyle={{ color: "black", fontWeight: "900" }}
            size="medium"
            onToggle={()=>{ setSubscriptionisEnabled((previousState) => !previousState)}}
          />
          </View>
        </View>

        <View style={[tw`mt-[2rem] `]}>
          <Text style={[tw`text-[#7E8FC0] text-[1.1rem] tracking-[0.96px] `]}>Alerts</Text>
        </View>

        <View style={[tw`mt-[1.25rem] `]}>
          <View style={[tw`flex-row justify-between `]}>
            <Text style={[tw`text-[#14328C] font-bold text-[1.2rem] tracking-[0.96px] `]}>High Spending Alerts</Text>
            <ToggleSwitch
            isOn={HSalertsisEnabled}
            onColor="#5eddea"
            offColor="#6a74ad"
            thumbOnStyle={ { backgroundColor: "#14328c"}}
            thumbOffStyle={ { backgroundColor: "#7e8fc1"}}
            trackOnStyle={ { backgroundColor: "#5eddea"}}
            trackOffStyle={ { backgroundColor: "#6a74ad"}}
            // label="Example label"
            labelStyle={{ color: "black", fontWeight: "900" }}
            size="medium"
            onToggle={()=>{ setHSalertsisEnabled((previousState) => !previousState)}}
          />
          </View>
        </View>

        {/* <View style={styles.container}>
          <Switch
            trackColor={{ false: "black", true: "#5eddea" }}
            thumbColor={isEnabled ? "#14328c" : "#7e8fc1"}
            ios_backgroundColor={isEnabled ? "#5eddea" : "#6a74ad"}
            // onValueChange={toggleSwitch}
            onChange={() => toggleSwitchh()}
            value={isEnabled}
          />

          <ToggleSwitch
            isOn={isEnabled}
            onColor="#5eddea"
            offColor="#6a74ad"
            thumbOnStyle={ { backgroundColor: "#14328c"}}
            thumbOffStyle={ { backgroundColor: "#7e8fc1"}}
            trackOnStyle={ { backgroundColor: "#5eddea"}}
            trackOffStyle={ { backgroundColor: "#6a74ad"}}
            // label="Example label"
            labelStyle={{ color: "black", fontWeight: "900" }}
            size="medium"
            onToggle={toggleSwitchh}
          />
        </View> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      width:"100%",
      height:"100%",
      paddingHorizontal: 22,
      backgroundColor: "#F0FCFD",
    },
  });