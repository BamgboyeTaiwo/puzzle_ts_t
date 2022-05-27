import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SizeW from "./sizeConfig";
import SizeH from "./sizeConfig";
// import "../assets/Group237.svg";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import tw from "twrnc";
import { SvgUri } from "react-native-svg";
import BackButton from "../assets/BackButton";
import NotifIcon from "../assets/NotifIcon";
import RightArrow from "../assets/RightArrow";
import SettingsIcon from "../assets/settingsIcon";
// const Backbutton = require("../assets/BackButton.svg") as string;
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";


import { navNavigationType, NotificationsProp } from "./types";

export default function NotificationPage() {

  const Stack = createNativeStackNavigator<navNavigationType>();
  const navigation = useNavigation<NotificationsProp>();

  return (
    <>
      <View style={styles.container}>
        <View style={[tw`pt-1 flex-row justify-between `]}>
          <View style={styles.flexbox1}>
            {/* <View style={tw`mr-[${SizeW(15)}]`}>
              <BackButton/> 
            </View> */}

            <AntDesign name="back" size={24} color="black" style={tw`mr-[${SizeW(15)}]`} />
            <View style={tw`mt-1`}>
              <Text style={tw` text-[#7E8FC0] text-[25px] text-center leading-[25px] tracking-[1.2px] `}>Notifications</Text>
            </View>
          </View>
          <View>
            <SettingsIcon />
          </View>
        </View>
        <View style={[tw` flex`, { color: "red" }]}>
          <Text style={tw` text-[#7E8FC0] mt-[${SizeH(35)}] text-[22px] leading-[20px] tracking-[0.96px] `}>Reports</Text>

          <View style={tw`mt-[${SizeH(15)}] border-2 border-[#7E8FC0]  rounded-[20px] p-[${SizeH(25)}]`}>
            <View style={tw` flex flex-row justify-between`}>
              <Text style={tw` text-[1rem] text-[#14328C] mb-[${SizeH(22)}]  font-bold `}>Weekly Report</Text>
              <NotifIcon />
            </View>
            <Text style={tw` text-[1.06rem] text-[#14328C] text-left  leading-[${SizeH(25)}px]`}>
              Your weekly Transaction Report for <Text style={tw`font-bold`}>1st -7th march, 2022</Text> Is ready
            </Text>
            <View style={tw`flex items-end `}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("NotificationSettings");
                  }}
                >
                  <Text style={tw` text-[#14328C] font-bold text-right text-[1.125rem] mt-[${SizeH(19)}] `}>
                    VIEW REPORT <RightArrow />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={tw`mt-[${SizeH(15)}] border-2 border-[#7E8FC0]  rounded-[20px] p-[${SizeH(25)}]`}>
            <View style={tw` flex flex-row justify-between`}>
              <Text style={tw` text-[1rem] text-[#14328C] mb-[${SizeH(22)}]  font-bold `}>Monthly Report</Text>
              <NotifIcon />
            </View>
            <Text style={tw` text-[1.1rem] text-[#14328C] text-left tracking-[0.85px] leading-[${SizeH(20)}px]`}>
              Your Monthly Transaction Report for <Text style={tw`font-bold`}>March, 2022</Text> Is ready
            </Text>
            <View style={tw`flex items-end `}>
              <View>
                <TouchableOpacity>
                  <Text style={tw` mt-[${SizeH(19)}]  text-[#14328C] font-bold text-right text-[1.125rem]`}>
                    VIEW REPORT <RightArrow />
                  </Text>
                </TouchableOpacity>
              </View>

              {/* <SvgUri  
                width="100%"
                height="100%"
                uri={"/"} ${Math.round( SizeH(123))}
              /> */}
            </View>
          </View>
        </View>
        <Text>{/* {SizeW(400)} {stat} , {windowWidth} , {SizeW(386)} */}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    backgroundColor: "#F0FCFD",
  },
  statbar: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    // backgroundColor: "red",
    width: SizeW(386),
  },
  flexbox1: {
    flexDirection: "row",
  },
  box: {
    color: "red",
  },
});
function NotificationSettings(NotificationSettings: any) {
  throw new Error("Function not implemented.");
}
