import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Components

import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
        name='Home'
        component={HomeScreen}
         />
         <Tab.Screen
        name='Chat'
        component={ChatScreen}
        options={{ tabBarBadge: 3 }}
         />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}


