import { View, Text, FlatList, StatusBar} from 'react-native';
import { SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import { useAuth } from '../context/AuthContext';
import muscles_groups from '../constants/muscles';
import MuscleCard from '../components/MuscleCard';
import { Dumbbell } from 'lucide-react-native';

const HomeScreen = ({ navigation }) => {
  const { user } = useAuth();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="light-content" backgroundColor="#6366f1" />
      <FlatList
        data={muscles_groups}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingHorizontal: 16,
        }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 16 }}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            {/* Header */}
            <View className="bg-indigo-500 px-6 pt-4">
              {/* Top Row */}
              <View className="flex-row items-center justify-between mb-6">
                <View>
                  <Text className="text-white text-sm font-bold">
                    Let's Train 💪
                  </Text>
                  <Text className="text-white text-2xl font-extrabold capitalize mt-0.5">
                    {user?.name || 'Athlete'}
                  </Text>
                </View>
                <View className="w-12 h-12 rounded-2xl items-center justify-center bg-white/20">
                  <Dumbbell size={24} color="#ffffff" />
                </View>
              </View>
            </View>

            {/* Section Label */}
            <View className="px-4 mt-6 mb-3">
              <Text className="text-gray-900 text-xl font-extrabold">
                Choose Muscle Group
              </Text>
              <Text className="text-gray-700 text-sm mt-0.5">
                Tap a category to load exercises
              </Text>
            </View>
          </>
        }
        renderItem={({ item }) => (
          <MuscleCard item={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
