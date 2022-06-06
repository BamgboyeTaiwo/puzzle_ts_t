import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import tw from "twrnc";
import BackButton from "../assets/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";
import NetflixIcon from "../assets/Netflix";
import ProvidusIcon from "../assets/ProvidusIcon";
import LockerIcon from "../assets/Locker";
import LockerTry from "../assets/Lockertry";
import LockerImage from "../assets/LockerImage";
import PigImage from "../assets/PigImage";

export default function Providus() {
  return (
    <SafeAreaView style={tw`h-full bg-[#F0FCFD]`}>
      <View style={[styles.container, tw`h-100`]}>
        <View style={tw`pt-1 px-[2.5%]`}>
          <View style={tw`flex-row `}>
            <View style={tw`mr-[0.875rem]`}>
              <BackButton />
            </View>
            <Text style={tw`text-[#7E8FC0] text-[1.45rem] tracking-[1.2px]`}>Providus Bank</Text>
          </View>
        </View>

        <View style={tw` w-[90%] ml-[5%] mt-[1.5rem] px-[1.3rem] py-[1.5rem] bg-white border-[#14328C] rounded-md`}>
          <View style={tw` flex-row`}>
            <View style={tw` mr-3`}>
              <ProvidusIcon />
            </View>
            <View style={tw`my-auto`}>
              <Text style={tw`pt-2 text-[#14328C] font-bold text-[1.3rem]`}> Providus `Bank </Text>
              {/* <Text style={tw`mt-[0.3rem] text-[#7E8FC0] text-left  text-[0.93rem]`}>Dollar investments that help you grow</Text> */}
              <Text style={tw``}></Text>
            </View>
          </View>
          <View style={tw`mt-[1.25rem]`}>
            <Text style={tw`text-[#14328C] font-bold text-[1.1rem]`}> The future forward banking </Text>
            <Text style={tw` pt-2 text-[#14328C] text-[1rem] `}>
              We believe that the New World of Fast, Smart, Personal and Borderless banking is here and we are inspired by our
              Future Forward Banking ethos.
            </Text>
          </View>
        </View>

        <View style={tw` w-90 mx-auto mt-[2rem]`}>
          <View style={tw``}>
            <Text style={tw`text-[#7E8FC0] pl-[0.25rem] font-bold text-[1.3rem]`}> Sign Up For An Account</Text>
          </View>

          <View style={tw`mt-[1rem] px-[1rem] pt-[0.5rem] rounded-[1rem] flex-row justify-between bg-[#5EDFEB]`}>
            <Text style={tw`text-[#14328C] text-[1.2rem] my-auto font-bold`}>Checking Account</Text>
            <View style={tw``}>
              <LockerImage />
            </View>
          </View>

          <View style={tw`mt-[1rem] px-[1rem] pt-[0.75rem] rounded-[1rem] flex-row justify-between bg-[#5EDFEB]`}>
            <Text style={tw`text-[#14328C] text-[1.2rem] my-auto font-bold`}>Savings Account</Text>
            <View style={tw``}>
              <PigImage/>
            </View>
          </View>
        </View>

        <View style={tw``}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    paddingTop: "3%",
    paddingBottom: 90,
    backgroundColor: "#F0FCFD",
  },
});
