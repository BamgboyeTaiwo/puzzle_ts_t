import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NotificationPage from "./screens/Notifications";
import Shop from "./screens/Shop";
import Subscrition from "./screens/subscrition";
import Notificationsettings from "./screens/Notificationsettings";
import SizeH from "./screens/sizeConfig";
import { Dimensions } from "react-native";
import Constants from "expo-constants";
import tw from "twrnc";
import Heathinsurance from "./screens/Heathinsurance";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navNavigationType } from "./screens/types";
import TestPage from "./screens/testPage";
import Loans from "./screens/Loans";
import InvestmentPage from "./screens/investmentPage";
import RisevestSignup from "./screens/RisevestSignup";
import Creditregistry from "./screens/Creditregistry";
import Tangerine from "./screens/Tangerine";
import Providus from "./screens/Providus";

// const Stack = createNativeStackNavigator();
const Stack = createNativeStackNavigator<navNavigationType>();

const stat = Constants.statusBarHeight;
const device_height = Dimensions.get("window").height - stat;

export default function App() {
  return (
    // <NavigationContainer>
    //   <View style={styles.container}>
    //     {/* <Text>Open up App.tsx to start working on your app!</Text> */}
    //     {/* <NotificationPage/> */}
    //     {/* <Shop /> */}
    //     {/* <Subscrition/> */}
    //     <Notificationsettings/>
    //     {/* <Heathinsurance/> */}

    //     <StatusBar style="auto" />
    //   </View>
    // </NavigationContainer>

    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tangerine" component={Tangerine} options={{ headerShown: false }} />
          <Stack.Screen name="Providus" component={Providus} options={{ headerShown: false }} />
          <Stack.Screen name="Creditregistry" component={Creditregistry} options={{ headerShown: false }} />

          <Stack.Screen name="Shop" component={Shop} options={{ headerShown: false }} />
          <Stack.Screen name="Loans" component={Loans} options={{ headerShown: false }} />
          <Stack.Screen name="InvestmentPage" component={InvestmentPage} options={{ headerShown: false }} />
          <Stack.Screen name="RisevestSignup" component={RisevestSignup} options={{ headerShown: false }} />
          <Stack.Screen name="NotificationSettings" component={Notificationsettings} />
          <Stack.Screen name="Notification page" component={NotificationPage} />

          <Stack.Screen name="Subscription" component={Subscrition} />
          <Stack.Screen name="Healthinsurance" component={Heathinsurance} />
          <Stack.Screen name="Test" component={TestPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: stat,
    // paddingHorizontal: 20,
    height: device_height,
    backgroundColor: "#F0FCFD",
    alignItems: "center",
    // justifyContent: 'center',
  },
});
