import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import { ThemeContext } from "./src/contexts/Theme";
import { HomeScreen } from "./src/Screens/Home";
import { MenuScreen } from "./src/Screens/Menu";
import { ViewItemScreen } from "./src/Screens/ViewItem";

const lightTheme = {
  themeName: "light",
  colors: {
    background: "#EDDED8",
    text: "#333333",
    accent: "#9D7667",
  },
};

const darkTheme = {
  themeName: "dark",
  colors: {
    background: "#20161F",
    text: "#E7D9C2",
    accent: "#8BC9C1",
  },
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <StatusBar style={isDark ? "light" : "dark"} />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu"
              component={MenuScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewItem"
              component={ViewItemScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
