import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import { useEffect, useState, useCallback } from 'react';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import getExercisesByMuscle from '../services/exercisesService';
import LoadingSpinner from '../components/LoadingSpinner';
import WorkoutCard from '../components/WorkoutCard';
import ErrorMessage from '../components/ErrorMessage';
import { ChevronLeft, Dumbbell, Search, X } from 'lucide-react-native';

const WorkoutListScreen = ({ route, navigation }) => {
  const muscleGroup = route?.params?.muscleGroup || 'abdominals';
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const insets = useSafeAreaInsets();

  const fetchExercises = useCallback(
    async (isRefresh = false) => {
      try {
        isRefresh ? setRefreshing(true) : setLoading(true);
        setError(null);
        const res = await getExercisesByMuscle(muscleGroup);
        if (res && Array.isArray(res)) setExercises(res);
        else setError('No exercises found for this category.');
      } catch {
        setError('Failed to load exercises. Please try again later.');
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [muscleGroup],
  );

  useEffect(() => {
    fetchExercises();
  }, [fetchExercises]);

  const filtered = exercises.filter(e =>
    e.name.toLowerCase().includes(query.toLowerCase()),
  );

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} navigation={navigation} />;

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="light-content" backgroundColor="#6366f1" />
      <FlatList
        data={filtered}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: insets.bottom + 100,
        }}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={() => fetchExercises(true)}
        ListHeaderComponent={
          <>
            {/* Hero Strip */}
            <View className="bg-indigo-500 -mx-4 px-6 pt-4 pb-6 mb-4">
              {/* Back */}
              <TouchableOpacity onPress={() => navigation.goBack()}
                className="flex-row items-center self-start bg-white/20 rounded-xl px-3 py-1.5 mb-4"
              >
                <ChevronLeft size={18} color="#fff" />
                <Text className="text-white font-bold text-sm ml-0.5">
                  Back
                </Text>
              </TouchableOpacity>

              {/* Title */}
              <View className="flex-row items-center mb-5">
                <View className="w-10 h-10 rounded-xl bg-white/20 items-center justify-center mr-3">
                  <Dumbbell size={20} color="#fff" />
                </View>
                <View>
                  <Text className="text-white text-2xl font-extrabold">
                    Exercises
                  </Text>
                  <Text className="text-white/65 text-xs font-bold uppercase tracking-widest">
                    {muscleGroup.replace(/_/g, ' ')} · {exercises.length} found
                  </Text>
                </View>
              </View>

              {/* Search Bar */}
              <View className="flex-row items-center bg-white/15 rounded-2xl px-4 py-2.5">
                <Search size={16} color="rgba(255,255,255,0.7)" />
                <TextInput className="flex-1 text-white ml-2.5 text-sm"
                  placeholder="Search exercises..."
                  placeholderTextColor="rgba(255,255,255,0.5)"
                  value={query} onChangeText={setQuery} autoCapitalize="none"
                />
                {query.length > 0 && (
                  <TouchableOpacity onPress={() => setQuery('')}>
                    <X size={16} color="rgba(255,255,255,0.7)" />
                  </TouchableOpacity>
                )}
              </View>
            </View>

            {/* Result count if filtering */}
            {query.length > 0 && (
              <Text className="text-gray-500 text-xs font-semibold mb-2 ml-1">
                {filtered.length} result{filtered.length !== 1 ? 's' : ''} for "
                {query}"
              </Text>
            )}
          </>
        }
        ListEmptyComponent={
          <View className="flex-1 justify-center items-center py-20">
            <Text className="text-gray-400 text-base font-medium">
              {query ? `No results for "${query}"` : 'No exercises found.'}
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
