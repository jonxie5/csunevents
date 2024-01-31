import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Custom Imports
import SinglePostScreen from './SinglePostScreen';
import PostsScreen from "./PostsScreen";
 
const Stack = createNativeStackNavigator();

function HomeScreen(props: any) {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="PostsScreen" component={PostsScreen} />
                <Stack.Screen name="SinglePostScreen" component={SinglePostScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default HomeScreen;
