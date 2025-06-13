import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./src/components/LoginScreen";
import HomeScreen from "./src/components/HomeScreen";
import ProfileScreen from "./src/components/ProfileScreen";
import DetailsScreen from "./src/components/DetailsScreen";

const Stack = createStackNavigator();
    
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }} // Remove o botão de voltar
                />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}