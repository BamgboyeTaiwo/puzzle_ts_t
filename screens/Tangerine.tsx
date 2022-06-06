import React from "react";
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import tw from "twrnc";
import BackButton from "../assets/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";
import NetflixIcon from "../assets/Netflix";
import TangerineIcon from "../assets/TangerineIcon";

export default function Tangerine() {
  return (
    <SafeAreaView style={tw`h-full bg-[#F0FCFD]`}>
      <ScrollView>
        <View style={styles.container}>
          <View style={tw`pt-1 px-[2.5%]`}>
            <View style={tw`flex-row `}>
              <View style={tw`mr-[0.875rem]`}>
                <BackButton />
              </View>
              <Text style={tw`text-[#7E8FC0] text-[1.45rem] tracking-[1.2px]`}> Tangerine-Life </Text>
            </View>
          </View>

          <View style={tw` w-[90%] ml-[5%] mt-[1.5rem] px-[1.3rem] py-[1.5rem] bg-white border-[#14328C] rounded-[1.5rem]`}>
            <View style={tw` flex-row`}>
              <View style={tw` mr-3`}>
                <TangerineIcon/>
              </View>
              <View style={tw`my-auto`}>
                <Text style={tw`pt-2 text-[#14328C] font-bold text-[1.3rem]`}>Tangerine-Life </Text>
                {/* <Text style={tw`mt-[0.3rem] text-[#7E8FC0] text-left  text-[0.93rem]`}>Dollar investments that help you grow</Text> */}
                <Text style={tw``}></Text>
              </View>
            </View>
            <View style={tw`mt-[1.25rem]`}>
              <Text style={tw`text-[#14328C] font-bold text-[1.1rem]`}> Everyone needs affordable insurance</Text>
              <Text style={tw` pt-2 text-[#14328C] pl-1 text-[1rem] `}>
                Secure an insurance plan that allows you to pay a premium within your means while protecting you and all you
                cherish.
              </Text>
            </View>
          </View>

          <View style={tw` w-90 mx-auto mt-[2rem]`}>
            <View style={tw``}>
              <Text style={tw`text-[#7E8FC0] font-bold text-[1.3rem]`}> Choose The Right Plan For You</Text>
            </View>
          </View>

          <View style={tw` w-90 mx-auto mt-[0.5rem] flex-row `}>
            <View style={tw`bg-[#14328C] flex-1 py-[1rem] rounded-lg`}>
              <Text style={tw` text-[#5EDFEB] font-bold text-[1.1rem] mx-auto my-auto`}> Pay Monthly</Text>
            </View>
            <View style={tw`bg-[#14328C] flex-1  py-[1rem] bg-[#BEC7DF] rounded-tr-md rounded-br-lg`}>
              <Text style={tw` text-white font-bold text-[1.1rem] mx-auto my-auto`}> Pay Yearly</Text>
            </View>
          </View>

          <View style={tw` px-[5%] mt-[1rem]`}>
            <ScrollView horizontal={true}>
              <View style={tw` bg-[#14328C] py-[1.5rem] px-[1.5rem] w-65 rounded-4`}>
                <Text style={tw`text-white font-bold text-[1.2rem] `}>SILVER{"\n"}HEALTH PLAN </Text>

                <View style={[tw` border-b-2 border-[#5EDFEB] w-32 `]}>
                  <View style={tw`py-2 flex-row`}>
                    <Text style={tw`text-[#5EDFEB] font-bold text-[1.2rem] `}>N 1,150 </Text>
                    <Text style={tw`mt-auto text-white text-[0.875rem] font-semibold`}>Monthly</Text>
                  </View>
                </View>
                <View style={tw`mt-[1rem]`}>
                  <View style={tw`flex-row`}>
                    <View style={tw` mt-1 w-[10px] h-[10px] bg-white mr-2`}></View>
                    <View style={tw``}>
                      <Text style={tw` text-white text-[1rem] text-left`}>
                        Surgeries Including Day Case Procedures, Minor, Intermediate And Major Surgeries Including Caesarean
                        Section - N250,000 Limit
                      </Text>
                    </View>
                  </View>
                  <View style={tw`flex-row mt-[0.5rem]`}>
                    <View style={tw`mt-1 w-[10px] h-[10px] bg-white mr-2`}></View>
                    <View style={tw``}>
                      <Text style={tw` text-white text-[1rem] text-left`}>Phsiotherapy - N25,000</Text>
                    </View>
                  </View>
                  <View style={tw`flex-row mt-[0.5rem]`}>
                    <View style={tw`mt-1 w-[10px] h-[10px] bg-white mr-2`}></View>
                    <View style={tw``}>
                      <Text style={tw` text-white text-[1rem] text-left`}> Hospital Category D</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity>
                  <View style={tw` mt-[1rem] py-[0.8rem] bg-[#5EDFEB] rounded-lg`}>
                    <Text style={tw` text-[1rem] text-[#14328C] font-semibold mx-auto my-auto`}> SELECT PLAN</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={tw` ml-[1rem] bg-[#14328C] py-[1.5rem] px-[1.5rem] w-65 rounded-4`}>
                <Text style={tw`text-white font-bold text-[1.2rem] `}>GOLD{"\n"}HEALTH PLAN </Text>

                <View style={[tw` border-b-2 border-[#5EDFEB] w-32 `]}>
                  <View style={tw`py-2 flex-row`}>
                    <Text style={tw`text-[#5EDFEB] font-bold text-[1.2rem] `}>N 1,360 </Text>
                    <Text style={tw`mt-auto text-white text-[0.875rem] font-semibold`}>Monthly</Text>
                  </View>
                </View>
                <View style={tw`mt-[1rem]`}>
                  <View style={tw`flex-row`}>
                    <View style={tw` mt-1 w-[10px] h-[10px] bg-white mr-2`}></View>
                    <View style={tw``}>
                      <Text style={tw` text-white text-[1rem] text-left`}>
                      Regionof Cover N13,000 Local

                      </Text>
                    </View>
                  </View>
                  <View style={tw`flex-row mt-[0.5rem]`}>
                    <View style={tw`mt-1 w-[10px] h-[10px] bg-white mr-2`}></View>
                    <View style={tw``}>
                      <Text style={tw` text-white text-[1rem] text-left`}>Outpatient Limit - N500,000</Text>
                    </View>
                  </View>
                  <View style={tw`flex-row mt-[0.5rem]`}>
                    <View style={tw`mt-1 w-[10px] h-[10px] bg-white mr-2`}></View>
                    <View style={tw``}>
                      <Text style={tw` text-white text-[1rem] text-left`}> Hospital Category D</Text>
                    </View>
                  </View>
                  <View style={tw`flex-row mt-[0.5rem]`}>
                    <View style={tw`mt-1 w-[10px] h-[10px] bg-white mr-2`}></View>
                    <View style={tw``}>
                      <Text style={tw` text-white text-[1rem] text-left`}> Critical Illness Cover - N100,000/Annum</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity>
                  <View style={tw` mt-[2.9rem] py-[0.8rem] bg-[#5EDFEB] rounded-lg`}>
                    <Text style={tw` text-[1rem] text-[#14328C] font-semibold mx-auto my-auto`}> SELECT PLAN</Text>
                  </View>
                </TouchableOpacity>
              </View>


              {/* <View style={tw` ml-[0.6rem] bg-[#7E8FC0]  py-4 px-2 w-60 rounded-md`}>
                <Text style={tw`text-[#BEC7DF] mt-1 text-center font-bold text-[1rem] `}>Pension Plan</Text>
              </View> */}
            </ScrollView>
          </View>

          <View style={tw``}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// bg-[${ true ? "red": "blue"}]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    maxHeight:"100%",
    paddingTop: "3%",
    // paddingHorizontal: 22,
    paddingBottom: 90,
    backgroundColor: "#F0FCFD",
  },
});
