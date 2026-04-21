import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ChatbotScreen from "../screens/main/ChatbotScreen";
import DashboardScreen from "../screens/main/DashboardScreen";
import ProfileScreen from "../screens/main/ProfileScreen";

export type MainDrawerParamList = {
  ChatbotStack: undefined;
  DashboardStack: undefined;
  ProfileStack: undefined;
};

export type ChatbotStackParamList = {
  Chatbot: undefined;
};

export type DashboardStackParamList = {
  Dashboard: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
};

const ChatbotStack = createNativeStackNavigator<ChatbotStackParamList>();
const DashboardStack = createNativeStackNavigator<DashboardStackParamList>();
const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();
const Drawer = createDrawerNavigator<MainDrawerParamList>();

const ChatbotStackScreen = () => (
  <ChatbotStack.Navigator
    screenOptions={{
      headerShown: true,
      headerTitle: "Sentinelle Chatbot",
    }}
  >
    <ChatbotStack.Screen name="Chatbot" component={ChatbotScreen} />
  </ChatbotStack.Navigator>
);

const DashboardStackScreen = () => (
  <DashboardStack.Navigator
    screenOptions={{
      headerShown: true,
      headerTitle: "Mental Wellness Dashboard",
    }}
  >
    <DashboardStack.Screen name="Dashboard" component={DashboardScreen} />
  </DashboardStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    screenOptions={{
      headerShown: true,
      headerTitle: "Profile",
    }}
  >
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
  </ProfileStack.Navigator>
);

export const MainDrawer: React.FC = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="ChatbotStack"
    >
      <Drawer.Screen
        name="ChatbotStack"
        component={ChatbotStackScreen}
        options={{
          drawerLabel: "Chatbot",
          title: "Chatbot",
        }}
      />
      <Drawer.Screen
        name="DashboardStack"
        component={DashboardStackScreen}
        options={{
          drawerLabel: "Dashboard",
          title: "Dashboard",
        }}
      />
      <Drawer.Screen
        name="ProfileStack"
        component={ProfileStackScreen}
        options={{
          drawerLabel: "Profile",
          title: "Profile",
        }}
      />
    </Drawer.Navigator>
  );
};
