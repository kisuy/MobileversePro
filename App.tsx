import Dashboard from "./src/Components/Dashboard";
import Login from "./src/Components/Login";
import Register from "./src/Components/Register";

import { View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} ></Stack.Screen>
        <Stack.Screen name="Register" component={Register} ></Stack.Screen>
        <Stack.Screen name="Dashboard" component={Dashboard}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>

  );
}

