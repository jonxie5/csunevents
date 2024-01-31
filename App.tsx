import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import { StatusBar, StyleSheet } from 'react-native';

// Components

import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import AccountScreen from './screens/Account';

// Styling imports
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider style={styles.appContainer}>
      <StatusBar />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: any;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Chat') {
                iconName =  'chatbox-ellipses-outline';
              } else if (route.name === 'Account') {
                iconName = 'person-circle-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#D22030',
            tabBarInactiveTintColor: 'gray',
            headerShown: false
          })
        }
        >
          <Tab.Screen 
            name='Home'
            component={HomeScreen}
          />

          <Tab.Screen
            name='Chat'
            component={ChatScreen}
            options={{ tabBarBadge: 3 }}
          />

          <Tab.Screen
            name='Account'
            component={AccountScreen}
          />

        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 65,
    backgroundColor: '#D22030'
  }
})