import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegScreen from "./src/Screens/RegScreen";
import LogScreen from "./src/Screens/LogScreen";
import PostsScreen from "./src/Screens/PostsScreen";
import Home from "./src/Screens/Home";

import bgImg from "./assets/images/bg.jpg";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Medium.ttf"),
  });

  return (
    <View style={styles.container}>
      <Image source={bgImg} resizeMode="cover" style={styles.bg} />
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Login">
          <MainStack.Screen
            name="Registration"
            component={RegScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Login"
            component={LogScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        </MainStack.Navigator>
      </NavigationContainer>

      <StatusBar style={"auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },

  bg: {
    position: "absolute",
    width: "100%",
  },
});
