import { Image, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import photos from "../screens/PhotosList";
import favouritePhotos from "../screens/FavoritePhotos";

import icons from "../constants/icons";

const Navigator = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const TabStack = () => (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Photos"
        component={photos}
        options={{
          tabBarLabel: "Photos",
          tabBarIcon: () => <Image source={icons.gallery} style={styles.tabIcon} />
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={favouritePhotos}
        options={{
          tabBarLabel: "Favorite",
          tabBarIcon: () => <Image source={icons.emptyHeart} style={styles.tabIcon} />
        }}
      />
    </Tab.Navigator>
  );

  return (
    <Stack.Navigator
      initialRouteName="App"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tab" component={TabStack} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    width: 25,
    height: 25
  }
});

export default Navigator;
