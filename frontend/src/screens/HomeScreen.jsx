import { View, Text, FlatList, StatusBar } from 'react-native';
import { SafeAreaView,useSafeAreaInsets,} from 'react-native-safe-area-context';
import { useAuth } from '../context/AuthContext';
import muscles_groups from '../constants/muscles';
import MuscleCard from '../components/MuscleCard';
import { Dumbbell } from 'lucide-react-native';
import { rf, hs, vs, wp, isTablet } from '../utils/responsive';

const HomeScreen = ({ navigation }) => {
  const { user } = useAuth();
  const insets = useSafeAreaInsets();

  const numCols = isTablet ? 3 : 2;
  const hPad = wp(isTablet ? 4 : 3);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="light-content" backgroundColor="#6366f1" />
      <FlatList
        data={muscles_groups}
        numColumns={numCols}
        key={numCols}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingHorizontal: hPad,
        }}
        contentContainerStyle={{ paddingBottom: vs(8) }}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            {/* Header */}
            <View style={{backgroundColor: '#6366f1',paddingHorizontal: hs(24),paddingTop: vs(16),paddingBottom: vs(20),}}>
              <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',marginBottom: vs(4),}}>
                <View>
                  <Text style={{color: '#ffffff',fontSize: rf(13),fontWeight: '700',}}>
                    Let's Train 💪
                  </Text>
                  <Text style={{color: '#ffffff',fontSize: rf(22),fontWeight: '800',textTransform: 'capitalize',marginTop: vs(2),}}>
                    {user?.name || 'Athlete'}
                  </Text>
                </View>
                <View style={{width: hs(48),height: hs(48),borderRadius: hs(14),alignItems: 'center',justifyContent: 'center',backgroundColor: 'rgba(255,255,255,0.2)',
                  }}
                >
                  <Dumbbell size={hs(24)} color="#ffffff" />
                </View>
              </View>
            </View>

            {/* Section Label */}
            <View style={{paddingHorizontal: hPad,marginTop: vs(20),marginBottom: vs(10),}}>
              <Text style={{color: '#111827',fontSize: rf(20),fontWeight: '800',}}>Choose Muscle Group</Text>
              <Text style={{color: '#374151', fontSize: rf(13), marginTop: vs(2),}}>Tap a category to load exercises</Text>
            </View>
          </>
        }
        renderItem={({ item }) => (
          <MuscleCard item={item} navigation={navigation} numCols={numCols} />
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
