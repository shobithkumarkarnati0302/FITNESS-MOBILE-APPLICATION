import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WorkoutStack from './WorkoutStack';
import ProfileStack from './ProfileStack';
import { User, Home, History } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        tabBarStyle: {
          height: 65 + insets.bottom,
          paddingBottom: insets.bottom + 10,
        },
      }}
    >
      <Tab.Screen
        name="Workouts"
        component={WorkoutStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <Home color={color} size={32} />,
        }}
      />
      <Tab.Screen
        name      = "Profile"
        component = {ProfileStack}
        options   = {{
          tabBarLabel: 'Profile',
          tabBarIcon : ({ color, size }) => <User color={color} size={32} />,
        }}
      />
      {/* <Tab.Screen
        name      = "History"
        component = {HistoryScreen}
        options   = {{
          tabBarLabel: 'History',
          tabBarIcon : ({ color, size }) => <History color={color} size={32} />,
        }}
      /> */}
    </Tab.Navigator>
  );
}
