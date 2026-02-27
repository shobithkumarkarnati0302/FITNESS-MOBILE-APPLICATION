import { View,Text,FlatList,TouchableOpacity,StatusBar,TextInput,} from 'react-native';
import { useEffect, useState, useCallback } from 'react';
import { SafeAreaView,useSafeAreaInsets,} from 'react-native-safe-area-context';
import getExercisesByMuscle from '../services/exercisesService';
import LoadingSpinner from '../components/LoadingSpinner';
import WorkoutCard from '../components/WorkoutCard';
import { ChevronLeft, Dumbbell, Search } from 'lucide-react-native';
import { rf, hs, vs, wp } from '../utils/responsive';

const WorkoutListScreen = ({ route, navigation }) => {
  const muscleGroup = route?.params?.muscleGroup || 'abdominals';
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const fetchExercises = useCallback(
    async (isRefresh = false) => {
      try {
        isRefresh ? setRefreshing(true) : setLoading(true);
        const res = await getExercisesByMuscle(muscleGroup);
        if (res && Array.isArray(res)) {
          setExercises(res);
          setFilteredData(res);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [muscleGroup],
  );

  const handleSearch = e => {
    setSearch(e);

    if (e === '') {
      setFilteredData(exercises);
      return;
    }

    const res = exercises.filter(item => item.equipments?.some(eq => eq.toLowerCase().includes(e.toLowerCase())));
    setFilteredData(res);
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="light-content" backgroundColor="#6366f1" />
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        contentContainerStyle={{
          paddingHorizontal: wp(4),
          paddingBottom: insets.bottom + vs(100),
        }}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={() => fetchExercises(true)}
        ListHeaderComponent={
          <>
            {/* Header */}
            <View
              style={{
                backgroundColor: '#6366f1',
                marginHorizontal: -wp(4),
                paddingHorizontal: hs(24),
                paddingTop: vs(14),
                paddingBottom: vs(20),
                marginBottom: vs(14),
              }}
            >
              {/* Back Button */}
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'flex-start',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  borderRadius: hs(12),
                  paddingHorizontal: hs(12),
                  paddingVertical: vs(6),
                  marginBottom: vs(14),
                }}
              >
                <ChevronLeft size={hs(18)} color="#fff" />
                <Text
                  style={{
                    color: '#ffffff',
                    fontWeight: '700',
                    fontSize: rf(13),
                    marginLeft: hs(2),
                  }}
                >
                  Back
                </Text>
              </TouchableOpacity>

              {/* Title */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: vs(16),
                }}
              >
                <View
                  style={{
                    width: hs(40),
                    height: hs(40),
                    borderRadius: hs(12),
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: hs(12),
                  }}
                >
                  <Dumbbell size={hs(20)} color="#fff" />
                </View>
                <View>
                  <Text
                    style={{
                      color: '#ffffff',
                      fontSize: rf(22),
                      fontWeight: '800',
                    }}
                  >
                    Exercises
                  </Text>
                  <Text
                    style={{
                      color: 'rgba(255,255,255,0.65)',
                      fontSize: rf(11),
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: 1.5,
                    }}
                  >
                    {muscleGroup.replace(/_/g, ' ')} · {exercises.length} found
                  </Text>
                </View>
              </View>
            </View>

            {/* Search Bar */}
            <View className="mb-4">
              <View className="p-4 flex flex-row gap-3">
                <TextInput
                  placeholderTextColor="#6b7280"
                  placeholder="Search by equipment"
                  className="p-2 pl-4 border-[2px] border-[#6366f1] w-full rounded-lg"
                  value={search}
                  onChangeText={handleSearch}
                />
                {/* <TouchableOpacity
                  className="p-2 bg-[#6366f1] rounded-lg items-center justify-center"
                  onPress={handleSearch}
                  disabled={true}
                  // onPress   = {()=>{handleSearch(search)}}
                >
                  <Search color="#ffffff" />
                </TouchableOpacity> */}
              </View>
            </View>
          </>
        }
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: vs(80),
            }}
          >
            <Text
              style={{ color: '#9ca3af', fontSize: rf(15), fontWeight: '500' }}
            >
              No exercises found.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <WorkoutCard item={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};

export default WorkoutListScreen;
