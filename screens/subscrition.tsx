import { View, Text, StyleSheet } from "react-native";
import React from "react";
import tw from "twrnc";
import SettingsIcon from "../assets/settingsIcon";
import { AntDesign } from "@expo/vector-icons";
import SizeW from "./sizeConfig";
import SizeH from "./sizeConfig";
import Bloomberg from "../assets/Bloomberg";
import MTNIcon from "../assets/mtnIcon";
import DSTVicon from "../assets/DSTVicon";
import NetflixIcon from "../assets/Netflix";

export default function Subscrition() {
  return (
    <View style={styles.container}>
      <View style={[tw`pt-1 justify-between w-full`, { flexDirection: "row" }]}>
        <View style={tw`flex-row justify-between`}>
          <AntDesign name="back" size={26} color="#14328C" style={tw`mr-[${SizeW(15)}]`} />
        </View>
        <View style={tw`mt-1`}>
            <Text style={tw` text-[#14328C] font-bold text-[25px] text-center leading-[25px] tracking-[1.2px] `}>March 2022</Text>
        </View>
        <View>
          <SettingsIcon />
        </View>
      </View>
      {/* <View style={[tw`flex-row `,  ] }>
        <View style={[tw`flex-row justify-space `, {justifyContent: "space-between"}]}>
          <SettingsIcon />
          <Text style={tw`text-[25px]`}>hello world</Text>
        </View>

        <SettingsIcon />
      </View> */}
      <View style={[tw`mt-[1.8rem] pt-[2rem] pb-[1.2rem] rounded-[1.25rem] border-2 items-center border-[#5EDFEB]`]}>
        <View style={[tw``]}>
          <Text style={[tw` text-[#14328C] text-[0.9rem]`]}>Subscriptions Total:</Text>
        </View>
        <View style={[tw`mt-1 `]}>
          <Text style={[tw`text-[#14328C] text-[2.5rem] font-bold tracking-[0.12rem]`]}>N30,000</Text>
        </View>
        <View style={[tw`mt-[1rem]`]}>
          <Text style={[tw`text-[#7E8FC0] font-bold tracking-[1px] text-[1.2rem]`]}>20%</Text>
        </View>
      </View>
      <View style={[tw`mt-[1.5rem] `]}>
        <View style={[tw``]}>
          <Text style={[tw` font-bold text-[1.1rem] tracking-[1px] text-[#14328C]`]}>Subscriptions</Text>
      </View>

        <View style={[tw` mt-[1rem]`]}>
          <Text style={[tw` text-[1.1rem] tracking-[0.84pt] text-[#7E8FC0]`]}> 15th March </Text>

          <View style={[tw`w-full mt-[1rem] flex-row  justify-between`]}>
            <View style={[tw ` flex-row `]}>
              <View style={[tw`h-[50px] w-[50px] mr-[0.9rem] rounded-[0.8rem] bg-black`]}> 
              <NetflixIcon/>
              </View>
              <View style={[tw`pt-1`]}>
                <Text style={[tw`font-bold text-[1rem] tracking-[0.72pt] text-[#14328C]`]}> NETFLIX </Text>
                <Text style={[tw`text-[0.8rem] tracking-[0.72pt] text-[#7E8FC0]`]}> June Subscription </Text>
              </View>
            </View>
            <Text style={[tw`mt-1 font-bold text-[0.9rem] py-auto tracking-[0.72pt] text-[#14328C]`, {}]}>
              N10,000
              </Text>
          </View>

          <View style={[tw`w-full mt-[1rem] flex-row  justify-between`]}>
            <View style={[tw ` flex-row `]}>
              <View style={[tw`  mr-[0.9rem] rounded-[0.8rem] bg-black`]}> 
              {/* <Bloomberg/> */}
              <MTNIcon/>
              </View>
              <View style={[tw`pt-1`]}>
                <Text style={[tw`font-bold text-[1rem] tracking-[0.72pt] text-[#14328C]`]}> MTN </Text>
                <Text style={[tw`text-[0.8rem] tracking-[0.72pt] text-[#7E8FC0]`]}> Data Subscription </Text>
              </View>
            </View>
            <Text style={[tw`mt-1 font-bold text-[0.9rem] py-auto tracking-[0.72pt] text-[#14328C]`, {}]}>
              N10,000
              </Text>
          </View>
        </View>

        <View style={[tw` mt-[1rem]`]}>
          <Text style={[tw` text-[1.1rem] tracking-[0.84px] text-[#7E8FC0]`]}> 5th March </Text>

          <View style={[tw`w-full mt-[1rem] flex-row  justify-between`]}>
            <View style={[tw ` flex-row `]}>
              <View style={[tw`h-[50px] w-[50px] mr-[0.9rem] rounded-[0.8rem] bg-black`]}> 
              <DSTVicon/>
              </View>
              <View style={[tw`pt-1`]}>
                <Text style={[tw`font-bold text-[1rem] tracking-[0.72pt] text-[#14328C]`]}> DSTV </Text>
                <Text style={[tw`text-[0.8rem] tracking-[0.72pt] text-[#7E8FC0]`]}> March Subscription </Text>
              </View>
            </View>
            <Text style={[tw`mt-1 font-bold text-[0.9rem] py-auto tracking-[0.72pt] text-[#14328C]`, {}]}>
              N5,000
              </Text>
          </View>

          <View style={[tw`w-full mt-[1rem] flex-row  justify-between`]}>
            <View style={[tw ` flex-row `]}>
              <View style={[tw`h-[50px] w-[50px] mr-[0.9rem] rounded-[0.8rem] bg-black`]}> 
              <Bloomberg/>

              </View>
              <View style={[tw`pt-1`]}>
                <Text style={[tw`font-bold text-[1rem] tracking-[0.72pt] text-[#14328C]`]}> BOOMPLAY </Text>
                <Text style={[tw`text-[0.8rem] tracking-[0.72pt] text-[#7E8FC0]`]}> March Subscription </Text>
              </View>
            </View>
            <Text style={[tw`mt-1 font-bold text-[0.9rem] py-auto tracking-[0.72pt] text-[#14328C]`, {}]}>
              N5,000
              </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 22,
    backgroundColor: "#F0FCFD",
   
  },
});
