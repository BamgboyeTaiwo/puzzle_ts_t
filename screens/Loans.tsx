import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import tw from "twrnc";
import Constants from "expo-constants";
import RightArrow from "../assets/RightArrow";
import BackButton from "../assets/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";
import RenMoney from "../assets/RenMoney";

const stat = Constants.statusBarHeight;

export default function Loans() {
  return (
    <SafeAreaView style={tw`h-full`}>
      <View style={styles.container}>
        <View style={tw`pt-1 px-[2.5%]`}>
          <View style={tw`flex-row `}>
            <View style={tw`mr-[0.875rem]`}>
              <BackButton />
            </View>
            <Text style={tw`text-[#7E8FC0] text-[1.25rem] tracking-[1.2px]`}>LOANS</Text>
          </View>
        </View>

        <View style={tw` px-[5%] mt-[2.2rem]`}>
          <ScrollView horizontal={true}>
            <View style={tw` bg-[#EB6A5E] py-4 w-35 rounded-[25px]`}>
              <Text style={tw`text-white text-center font-bold text-[1rem] `}>Student Loan</Text>
            </View>
            <View style={tw` ml-[1rem] bg-[#7E8FC0] py-4 w-35 rounded-[25px]`}>
              <Text style={tw`text-white text-center font-bold text-[1rem] `}>Student Loan</Text>
            </View>
            <View style={tw` ml-[1rem] bg-[#7E8FC0] py-4 w-35 rounded-[25px]`}>
              <Text style={tw`text-white text-center font-bold text-[1rem] `}>Student Loan</Text>
            </View>
          </ScrollView>
        </View>

        <View style={tw` w-[90%] ml-[5%] mt-[1.5rem] px-[1rem] py-[1rem] flex-row bg-white border-[#14328C] border-red rounded-md`}>
          <View style={tw` mr-3`}>
            <RenMoney />
          </View>
          <View style={tw``}>
            <Text style={tw`text-[#14328C] font-bold text-[1.3rem]`}>RenMoney</Text>
            <Text style={tw`mt-[0.3rem] text-[#7E8FC0] text-left  text-[1.1rem]`}>Student Loan, Business Loan, {"\n"}Personal Loan</Text>
            <Text style={tw``}></Text>
          </View>
        </View>

        <View style={tw` w-[90%] ml-[5%] mt-[0.875rem] px-[1rem] py-[1rem] flex-row bg-white border-[#14328C] border-red rounded-md`}>
          <View style={tw` mr-3`}>
            <RenMoney />
          </View>
          <View style={tw``}>
            <Text style={tw`text-[#14328C] font-bold text-[1.3rem]`}>Fairmoney</Text>
            <Text style={tw`mt-[0.3rem] text-[#7E8FC0] text-left  text-[1.1rem]`}>Student Loan, Business Loan, {"\n"}Personal Loan</Text>
            <Text style={tw``}></Text>
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
    // paddingHorizontal: 22,
    paddingBottom: 90,
    backgroundColor: "#F0FCFD",
  },
});
