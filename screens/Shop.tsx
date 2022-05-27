import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import tw from "twrnc";
import RightArrow from "../assets/RightArrow";
import SizeW from "./sizeConfig";
import SizeH from "./sizeConfig";
import Constants from "expo-constants";
import EAfricaIcon from "../assets/eafricaIcon";
import NetflixIcon from "../assets/Netflix";
import DstvIcon from "../assets/DSTVicon";
import Loans from "../assets/Loans";
import Insurance from "../assets/insurance";
import InvestmentIcon from "../assets/Investment";
import FsolutionIcon from "../assets/FSolutions";
import { Entypo } from '@expo/vector-icons';
const stat = Constants.statusBarHeight;
const tst = Loans;

export default function ShopPage() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={tw`pt-1 px-[2.5%]`}>
          <View style={tw`flex-row justify-between `}>
            <Text style={tw`text-[#7E8FC0] text-[1.25rem] tracking-[1.2px]`}>Puzzle</Text>
            <RightArrow />
          </View>

          <View style={tw`mt-[1.6rem]`}>
            <Text style={tw`text-[1.1rem] text-[#14328C] text-left tracking-[0.96px] font-bold`}>
              Puzzle, Helping you put {"\n"}the missing pieces together
            </Text>
          </View>
          <View style={tw`mt-[1.6rem]`}>
            {/* <Text style={tw`text-[0.95rem] text-[#7E8FC0] text-left tracking-[0.76px] `}>Select a puzzle piece(s) </Text> */}

            {/* <View style={tw`mt-[1rem]  h-[${SizeH(388)}px]  rounded-md bg-black`}></View> */}
            <View style={tw` `}>
              <View style={tw` flex-row justify-between  bg-[#EB6A5E] py-4 rounded-md px-5`}>
                <View style={tw` flex-row `}>
                  <View style={tw`mr-[0.8rem]`}>
                    <Loans />
                  </View>
                  <Text style={tw` mt-1 text-white font-bold  text-[1.2rem] tracking-[0.96px]`}>Loans</Text>
                </View>
                <View>
                <Entypo name="chevron-up" size={32} color="white" />
                </View>
              </View>
              <View style={tw`mt-[1rem] justify-between flex-row  bg-[#E59B25] py-4 rounded-md px-5`}>
                <View style={tw` flex-row `}>
                  <View style={tw`mr-3`}>
                    <Insurance />
                  </View>
                  <Text style={tw` mt-1 text-white font-bold  text-[1.2rem] tracking-[0.96px]`}>Insurance</Text>
                </View>
                <View>
                <Entypo name="chevron-up" size={32} color="white" />
                </View>
              </View>
              <View style={tw`mt-[1rem] justify-between flex-row  bg-[#196EC3] py-4 rounded-md px-5`}>
                <View style={tw` flex-row `}>
                  <View style={tw`mr-3`}>
                    <InvestmentIcon />
                  </View>
                  <Text style={tw` mt-1 text-white font-bold  text-[1.2rem] tracking-[0.96px]`}>Investments</Text>
                </View>
                <View>
                <Entypo name="chevron-up" size={32} color="white" />
                </View>
              </View>
              <View style={tw`mt-[1rem] justify-between flex-row  bg-[#00AEEF] py-4 rounded-md px-5`}>
                <View style={tw` flex-row `}>
                  <View style={tw`mr-3`}>
                    <FsolutionIcon />
                  </View>
                  <Text style={tw` mt-1 text-white font-bold  text-[1.2rem] tracking-[0.96px]`}>Financial Solutions</Text>
                </View>
                <View>
                <Entypo name="chevron-up" size={32} color="white" />
                </View>
              </View>
              <View style={tw`mt-[1rem] justify-between flex-row  bg-[#26A51C] py-4 rounded-md px-5`}>
                <View style={tw` flex-row `}>
                  <View style={tw`mr-3`}>
                    <FsolutionIcon />
                  </View>
                  <Text style={tw` mt-1 text-white font-bold  text-[1.2rem] tracking-[0.96px]`}>Entertainment</Text>
                </View>
                <View>
                <Entypo name="chevron-up" size={32} color="white" />
                </View>
              </View>
            </View>
          </View>

          <View style={tw`mt-[1.6rem]`}>
            <Text style={tw`text-[0.95rem] text-[#14328C] text-left tracking-[0.76px] font-bold`}>My Subscriptions (3)</Text>
            <Text style={tw`mt-[0.9rem] text-[0.95rem] text-[#7E8FC0] text-left tracking-[0.76px]`}>Insurance (1)</Text>

            <View style={tw`mt-[1rem] py-5 px-2 rounded-[1.25rem] border-2 border-[#5EDFEB]  bg-white`}>
              <View>
                <View style={tw``}></View>
                <View style={tw``}>
                  <Text style={tw` text-[#14328C] text-[1.4rem] tracking-[0.72px] font-bold`}>eHealth Insurance</Text>
                  <Text style={tw` text-[#7E8FC0] text-[1.1rem] mt-[0.35rem] `}>Health Insurance</Text>
                  <Text style={tw` text-[#7E8FC0] text-[1.1rem] mt-[0.2rem] `}>Plan: Gold Renewal: 21 Dec. 2022</Text>
                </View>
              </View>
            </View>

            <View style={tw`mt-[1.6rem] `}>
              <Text style={tw` text-[#7E8FC0] tracking-[0.76px] `}>Entertainment (2) </Text>

              <View style={tw`mt-[1rem] flex-row `}>
                <View
                  style={tw` flex-row p-[0.60rem] w-[45%] mr-[5%] border-2 border-[#5EDFEB] h-[70px] rounded-[10px]  bg-white`}
                >
                  <NetflixIcon />
                  <Text style={tw`my-auto ml-[0.9rem] text-[0.9rem] text-[#14328C] font-bold`}>NETFLIX</Text>
                </View>
                <View style={tw` flex-row p-[0.60rem] w-[45%] h-[70px] border-2 border-[#5EDFEB] rounded-[10px]  bg-white`}>
                  <DstvIcon />
                  <Text style={tw`my-auto ml-[0.9rem] text-[0.9rem] text-[#14328C] font-bold`}>DSTV</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: stat,
    // paddingHorizontal: 22,
    paddingBottom: 90,
    backgroundColor: "#F0FCFD",
  },
});
