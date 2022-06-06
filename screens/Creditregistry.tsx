import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import tw from "twrnc";
import BackButton from "../assets/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";
import NetflixIcon from "../assets/Netflix";
import ProvidusIcon from "../assets/ProvidusIcon";
import CreditReportImage from "../assets/CreditPageImage1";
import CreditRegistryIcon from "../assets/CreditRegistryIcon";
import BellImage from "../assets/BellImage";
import HandshakeImage from "../assets/HandshakeImage";

export default function Creditregistry() {
  return (
    <SafeAreaView style={tw`h-full bg-[#F0FCFD]`}>
      <View style={styles.container}>
        <View style={tw`pt-1 px-[2.5%]`}>
          <View style={tw`flex-row `}>
            <View style={tw`mr-[0.875rem]`}>
              <BackButton />
            </View>
            <Text style={tw`text-[#7E8FC0] text-[1.45rem] tracking-[1.2px]`}>Creditregistry</Text>
          </View>
        </View>

        <View style={tw` w-[90%] ml-[5%] mt-[1.5rem] rounded-[1rem] px-[1.3rem] py-[1.5rem] bg-white border-[#14328C]`}>
          <View style={tw`flex-row`}>
            <View style={tw` mr-3`}>
              {/* <ProvidusIcon/> */}
              <CreditRegistryIcon/>
            </View>
            <View style={tw`my-auto`}>
              <Text style={tw`pt-2 text-[#14328C] font-bold text-[1.3rem]`}>Creditregistry</Text>
              {/* <Text style={tw`mt-[0.3rem] text-[#7E8FC0] text-left  text-[0.93rem]`}>Dollar investments that help you grow</Text> */}
              <Text style={tw``}></Text>
            </View>
          </View>
          <View style={tw`mt-3`}>
            <Text style={tw`text-[#14328C] font-bold text-[1.1rem]`}> CreditConnection Helps You Build Good Credit</Text>
            <Text style={tw` pt-2 text-[#14328C] text-[1rem] `}>
              CreditConnection is your trusted and safe resource to build and manage your credit so you can reach your financial
              goals.
            </Text>
          </View>
        </View>

        <View style={tw` w-90 mx-auto mt-[2rem]`}>
          <View style={tw``}>
            <Text style={tw`text-[#7E8FC0] text-[1.3rem]`}> The Right Connection Is Everything!</Text>
          </View>

          <View style={tw`mt-[1rem] px-[1rem] pl-[1.5rem] pt-[0.75rem] rounded-[1rem] flex-row justify-between bg-[#5EDFEB]`}>
            <Text style={tw`text-[#14328C] text-[1.2rem] my-auto font-bold`}>Annual {'\n'}Credit Report</Text>
            <View style={tw``}>
              <CreditReportImage/>
            </View>
          </View>

          <View style={tw`mt-[1rem] px-[1rem] pl-[1.5rem] pt-[0.75rem] rounded-[1rem] flex-row justify-between bg-[#5EDFEB]`}>
            <Text style={tw`text-[#14328C] text-[1.2rem] my-auto font-bold`}>Credit Alerts{'\n'}and Monitoring</Text>
            <View style={tw``}>
              <BellImage/>
            </View>
          </View>

          <View style={tw`mt-[1rem] px-[1rem] pl-[1.5rem] pt-[0.75rem] rounded-[1rem] flex-row justify-between bg-[#5EDFEB]`}>
            <Text style={tw`text-[#14328C] text-[1.2rem] my-auto font-bold`}>Dispute {'\n'}Services</Text>
            <View style={tw``}>
              <HandshakeImage/>
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
    // paddingHorizontal: 22,
    paddingBottom: 90,
    backgroundColor: "#F0FCFD",
  },
});
