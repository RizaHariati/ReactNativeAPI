import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screens/Main/Home";
import User from "../screens/Main/User";
import UserCreate from "../screens/Main/UserCreate";
import UserEdit from "../screens/Main/UserEdit";
import Users from "../screens/Main/Users";

const Stack = createStackNavigator();
const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Create User" component={UserCreate} />
        <Stack.Screen name="Edit User" component={UserEdit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Route;
