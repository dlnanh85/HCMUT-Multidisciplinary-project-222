const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SignIn from "./screens/SignIn";
import DoorControl from "./screens/DoorControl";
import Home from "./screens/Home";
import LightingSystem from "./screens/LightingSystem";
import Camera from "./screens/Camera";
import Camera1 from "./screens/Camera1";
import LogInDoor from "./screens/LogInDoor";
import Television from "./screens/Television";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    MuseoModerno: require("./assets/fonts/MuseoModerno.ttf"),
    MuseoModerno_light: require("./assets/fonts/MuseoModerno_light.ttf"),
    MuseoModerno_medium: require("./assets/fonts/MuseoModerno_medium.ttf"),
    MuseoModerno_semibold: require("./assets/fonts/MuseoModerno_semibold.ttf"),
    Lato: require("./assets/fonts/Lato.ttf"),
    Lato_regular: require("./assets/fonts/Lato_regular.ttf"),
    Lato_bold: require("./assets/fonts/Lato_bold.ttf"),
    Lato_extrabold: require("./assets/fonts/Lato_extrabold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DoorControl"
              component={DoorControl}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LightingSystem"
              component={LightingSystem}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Camera"
              component={Camera}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Camera1"
              component={Camera1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogInDoor"
              component={LogInDoor}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Television"
              component={Television}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
