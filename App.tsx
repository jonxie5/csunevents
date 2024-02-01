// React and React Native
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider} from 'react-native-safe-area-context';

// Components
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import AccountScreen from './screens/Account';

// Styling imports
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles/AppStyles';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider style={styles.appContainer}>
      <StatusBar />
      <NavigationContainer>

        {/* Tab.Navigator is the navigator at the bottom of the screen.
            It is separate from the stack navigator that is in HomeScreen. 
            
            screenOptions allows us to modify the tab navigation.
            tabCarIcon property of screenOptions is used to set custom icons
            for each tab button.
            
            */}
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
        }>

          {/* All possible tabs, giving a name to each component is mandatory */}
          <Tab.Screen name='Home' component={HomeScreen}/>
          <Tab.Screen name='Chat' component={ChatScreen} options={{ tabBarBadge: 3 }}/>
          <Tab.Screen name='Account' component={AccountScreen}/>

        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

