import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import RBSheet from 'react-native-raw-bottom-sheet'
// import CheckBox from 'react-native-check-box';
import NetflixIcon from '../assets/Netflix';
import BackButton from '../assets/BackButton';
import CheckBox from 'react-native-check-box';

type Props = {
    close: () => void,
    open: () => void;
};
const [checked, setchecked] = useState(false);
const Networkmodal = React.forwardRef(({ close, open }: Props, ref) => (
    <RBSheet
        // ref={ref}
        ref={ref}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={300}
        openDuration={250}
        customStyles={{
            container: {
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
            },
            wrapper: {
                // backgroundColor: 'transparent',
            },
            draggableIcon: {
                backgroundColor: '#dedede',
            },
        }}
    >
    <SafeAreaView style={tw`h-full`}>
      <View style={styles.container}>
        <View style={[tw``,{zIndex:1}]}>
          <View style={tw`pt-1 px-[2.5%]`}>
            <View style={tw`flex-row `}>
              <View style={tw`mr-[0.875rem]`}>
                <BackButton />
              </View>
              <Text style={tw`text-[#7E8FC0] text-[1.45rem] tracking-[1.2px]`}>RISEVEST</Text>
            </View>
          </View>

          <View style={tw` w-[90%] ml-[5%] mt-[1.5rem] px-[1rem] py-[1rem] flex-row bg-white border-[#14328C] rounded-md`}>
            <View style={tw` mr-3`}>
              {/* <RenMoney /> */}
              <NetflixIcon />
            </View>
            <View style={tw``}>
              <Text style={tw`text-[#14328C] font-bold text-[1.3rem]`}>Risevest</Text>
              <Text style={tw`mt-[0.3rem] text-[#7E8FC0] text-left  text-[0.93rem]`}>Dollar investments that help you grow</Text>
              <Text style={tw``}></Text>
            </View>
          </View>
        </View>
        <View style={[tw` `,{zIndex:3, position:"absolute", height:"30%", opacity: 0.9,  width: "100%", backgroundColor: "#14328C"}]}></View>

        <View style={[tw`mt-3 h-150 bg-white rounded-tl-[20px] rounded-tr-[1.25rem] p-[3%]`, {zIndex:5}]}>
          <View style={tw` mb-[1.5rem]  w-20 bg-[#BEC7DF] rounded-md h-1 mx-auto`}></View>
          <ScrollView>
            <View style={tw` py-[1.5rem] bg-[#F0FCFD] rounded-[20px] px-3`}>
              <View style={tw`flex-row mb-[1rem]`}>
                <View style={tw` mr-[1rem]`}>
                  <NetflixIcon />
                </View>
                <Text style={tw`mt-2  text-[#14328C] font-bold text-[1.3rem] `}> Risevest </Text>
              </View>

              <View style={tw``}>
                <Text style={tw`text-[#7E8FC0] font-bold text-[1.1rem] mb-[0.5rem] `}>
                  {" "}
                  Dollar investments that help you grow.{" "}
                </Text>
                <Text style={tw`text-[#7E8FC0] text-left  text-[1.1rem] `}>
                  {" "}
                  We put your money in high quality assets that help you build wealth and achieve your financial goals.{" "}
                </Text>
              </View>
            </View>

            <View style={tw``}>
              <Text style={tw`mt-[1.5rem]  text-[#14328C] font-bold text-[1.3rem] `}> Link your Risevest Account </Text>

              <View style={tw`mt-[0.5rem]`}>
                <Text style={tw`text-[#7E8FC0]  text-[1.1rem] mb-[0.5rem] `}> Risevest Username/Email </Text>

                <TextInput placeholder="" style={tw`p-5 bg-[#F0FCFD] border-[#7E8FC0] border-2 rounded-[0.5rem]`}></TextInput>
              </View>
              <View style={tw`mt-[0.5rem]`}>
                <Text style={tw`text-[#7E8FC0]  text-[1.1rem] mb-[0.5rem] `}> Risevest Password </Text>

                <TextInput placeholder="" style={tw`p-5 bg-[#F0FCFD] border-[#7E8FC0] border-2 rounded-[0.5rem]`}></TextInput>
              </View>

              <View style={tw`flex-row mt-[0.7rem]`}>
                <View style={tw`mr-2 `}>
                  <CheckBox
                    style={[tw``, { flex: 1 }]}
                    checkBoxColor="#14328C"
                    onClick={() => {
                      // this.setState({
                      //   isChecked: !this.state.isChecked,
                      // });
                      setchecked(!checked);
                    }}
                    isChecked={checked}
                    leftText={"CheckBox"}
                  />
                </View>

                <Text style={tw` text-[#14328C] text-[0.8rem] `}>
                  {" "}
                  I authorized Puzzle to use my Risevest App {"\n"} information to link my Risevest Account.
                </Text>
              </View>
            </View>

            <View style={tw` bg-[#5EDFEB] mt-[1.5rem] rounded-[0.8rem] py-[1rem]`}>
              <TouchableOpacity
              //   onPress={() => {
              //     navigation.navigate("NotificationSettings");
              //   }}
              >
                <Text style={tw` text-[#14328C] font-semibold text-center text-[1.125rem]  `}>LINK RISEVEST ACCOUNT</Text>
              </TouchableOpacity>
            </View>

            <View style={tw``}>
              <TouchableOpacity>
                <Text style={tw`text-[#14328C] mt-[1rem] text-center  text-[1.1rem]`}>Don’t have a Risevest Account</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        <View style={tw``}></View>

        {/* 
      <View style={tw` w-[90%] ml-[5%] mt-[0.875rem] px-[1rem] py-[1rem] flex-row bg-white border-[#14328C] border-red rounded-md`}>
        <View style={tw` mr-3`}>
          <RenMoney />
        </View>
        <View style={tw``}>
          <Text style={tw`text-[#14328C] font-bold text-[1.3rem]`}>Fairmoney</Text>
          <Text style={tw`mt-[0.3rem] text-[#7E8FC0] text-left  text-[1.1rem]`}>Student Loan, Business Loan, {"\n"}Personal Loan</Text>
          <Text style={tw``}></Text>
        </View>
      </View> */}

        <View style={tw``}></View>
      </View>
    </SafeAreaView>
    </RBSheet>
))
export default Networkmodal

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

