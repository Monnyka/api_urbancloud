import * as React from "react";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import { SafeAreaView, Text, View, StyleSheet, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StatusBar } from "expo-status-bar";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "INSTALLINGGG",
    des: "Install new driver deivce.. please wait and dont turn off your computer",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "WINDOWS",
    des: "Getting window update",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "PROGRAM",
    des: "Running new program",
  },
];

const Item = ({ title, des }) => (
  <View style={style.item}>
    <Text style={style.todotitle}>{title}</Text>
    <Text style={style.title}>{des}</Text>
  </View>
);

function HomeScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "start", alignItems: "start" }}
    >
      <Text style={style.normalText}>Home</Text>
      <Text style={style.styleTitle}>Welcome Back Leon!</Text>
      <Text style={style.normalText}>Pending task for today</Text>
      <FlatList
        style={{ marginTop: 10 }}
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} des={item.des} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    black: require("./assets/fonts/Inter-Black.ttf"),
    regular: require("./assets/fonts/Inter-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="cog-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  styleTitle: {
    fontFamily: "black",
    fontSize: 32,
    marginStart: 25,
  },
  normalText: {
    fontFamily: "regular",
    fontSize: 18,
    marginStart: 25,
    marginTop: 25,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: "regular",
  },
  todotitle: {
    fontSize: 12,
    fontFamily: "regular",
    marginBottom: 10,
  },
  item: {
    backgroundColor: "#5362A465",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
});
