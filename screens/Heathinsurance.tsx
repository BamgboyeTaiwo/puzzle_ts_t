import { View, Text, StyleSheet, Button, TouchableHighlight, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import SizeW from "./sizeConfig";
import SizeH from "./sizeConfig";
import Reliance from "../assets/Reliance";
import Heathline from "../assets/Heathline";
// import Healthcare from "../assets/HealthCare";
import Healthcare from "../assets/Healthcare";
import Healthgrades from "../assets/Healthgrades";

export default function Heathinsurance() {
  return (
    <View style={styles.container}>
      <View style={tw`w-full `}>
        <View style={[tw`pt-1 justify-between w-full`, { flexDirection: "row" }]}>
          <View style={tw`flex-row justify-between`}>
            <AntDesign name="back" size={26} color="#14328C" style={tw`mr-[${SizeW(15)}]`} />
            <Text style={tw` mt-1 text-[#7E8FC0] text-[25px] text-center leading-[25px] tracking-[1.2px] `}>
              Health Insurance
            </Text>
          </View>
        </View>

        <View style={tw``}>
          <Text style={tw`text-[#14328C] font-bold mt-[2rem] text-[1.2rem]`}>My Health Insurance Provider</Text>

          <View style={tw` mt-[1rem] rounded-[10px] `}>
            <Reliance style={tw``}/>
          </View>

          <View style={tw`mt-[2rem]`}>
            <Text style={tw`text-[#7E8FC0] mt-[2rem] text-[1.2rem] tracking-[0.84px]`}>More Providers</Text>

            {/* <View style={tw`flex-row justify-between `}>
              <View style={tw` mt-[1rem] h-[70px] w-45 mr-[2%] bg-white rounded-[10px] `}>
                <Heathline />
              </View>
              <View style={tw` mt-[1rem] h-[70px] w-45 bg-white rounded-[10px] `}>
                <Heathline />
              </View>
            </View> */}

            <View style={tw`flex-row justify-between mt-[1rem]`}>
              <View style={tw` mt-[1rem] w-1/2 mr-4 bg-white h-[70px] rounded-[10px] `}>
                <Heathline style={tw`mx-auto my-auto`} />
              </View>
              <View style={tw` mt-[1rem] w-1/2  h-[70px] bg-white rounded-[10px] `}>
                <Heathline style={tw`mx-auto my-auto`} />
              </View>
            </View>

            <View style={tw`flex-row justify-between mt-[1rem]`}>
              <View style={tw` mt-[1rem] w-1/2 mr-4 bg-white h-[70px] rounded-[10px] `}>
                <Healthcare style={tw`mx-auto my-auto`} />
              </View>
              <View style={tw` mt-[1rem] w-1/2  h-[70px] bg-white rounded-[10px] `}>
                <Healthgrades style={tw`mx-auto my-auto`} />
              </View>
            </View>



            <View style={tw`mt-[3rem] p-1`}>
              {/* <TouchableHighlight style={tw` bg-[#5EDFEB] text-[#14328C] rounded-md py-2`}>
                <Button title="COMPARE PROVIDERS" color='#5EDFEB'  />
              </TouchableHighlight> */}

              <TouchableOpacity style={tw`bg-[#5EDFEB]  rounded-md py-4`}>
                  <Text style={tw` text-[#14328C] text-center text-[1rem]`}>
                      COMPARE PROVIDERS
                  </Text>
              </TouchableOpacity>
            </View> 
          </View>
        </View>

        <View style={tw``}></View>
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
