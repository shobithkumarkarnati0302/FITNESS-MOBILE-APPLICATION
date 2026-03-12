import 'react-native-gesture-handler';
import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/context/AuthContext';
import { FavoriteProvider } from './src/context/FavoriteContext';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <FavoriteProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </FavoriteProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
