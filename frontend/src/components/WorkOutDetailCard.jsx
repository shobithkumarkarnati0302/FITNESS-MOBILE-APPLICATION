import { View, Text,TouchableOpacity,ScrollView,StatusBar} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, Dumbbell, BookOpen,ShieldCheck} from 'lucide-react-native';

const WorkOutDetailCard = ({ exercise, navigation }) => {
  const diffBadge = {
    beginner: 'bg-green-100 text-green-700',
    intermediate: 'bg-amber-100 text-amber-700',
    expert: 'bg-red-100 text-red-700',
  };
  const badge = diffBadge[exercise.difficulty] || diffBadge.beginner;

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="light-content" backgroundColor="#6366f1" />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="bg-indigo-500 px-6 pt-4 pb-8">
          {/* Back Button */}
          <TouchableOpacity onPress={() => navigation.goBack()}
            className="flex-row items-center self-start bg-white/20 rounded-xl px-3 py-1.5 mb-5"
          >
            <ChevronLeft size={18} color="#fff" />
            <Text className="text-white font-bold text-sm ml-0.5">Back</Text>
          </TouchableOpacity>

          {/* Exercise Name */}
          <Text className="text-white text-2xl font-black mb-3 leading-8">
            {exercise.name}
          </Text>

          {/* Badges */}
          <View className="flex-row flex-wrap gap-2">
            <View className="bg-white/20 px-3 py-1 rounded-full">
              <Text className="text-white text-xs font-bold uppercase tracking-wide">
                💪 {exercise.muscle}
              </Text>
            </View>
            <View className={`px-3 py-1 rounded-full ${badge}`}>
              <Text className={`text-xs font-bold uppercase tracking-wide ${badge.split(' ')[1]}`}>
                {exercise.difficulty}
              </Text>
            </View>
            {exercise.type && (
              <View className="bg-white/15 px-3 py-1 rounded-full">
                <Text className="text-indigo-100 text-xs font-semibold capitalize">
                  {exercise.type.replace(/_/g, ' ')}
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* Content */}
        <View className="px-5 py-5 -mt-3">
          {/* Equipment Card */}
          <View className="bg-white rounded-[20px] p-5 mb-3.5 border border-gray-100 shadow-sm">
            {/* Equipment Heading */}
            <View className="flex-row items-center mb-3.5">
              <View className="bg-orange-50 w-9 h-9 rounded-xl items-center justify-center mr-2.5">
                <Dumbbell size={18} color="#ea580c" />
              </View>
              <Text className="text-lg font-extrabold text-gray-900">
                Equipment Needed
              </Text>
            </View>
            {/* Equipments */}
            <View className="flex-row flex-wrap gap-2">
              {exercise.equipments && exercise.equipments.length > 0 ? (
                exercise.equipments.map((eq, i) => (
                  <View key={i} className="bg-orange-50 px-3.5 py-2 rounded-xl border border-orange-200">
                    <Text className="text-orange-700 font-bold capitalize">
                      {eq}
                    </Text>
                  </View>
                ))
              ) : (
                <View className="bg-gray-50 px-3.5 py-2 rounded-xl border border-gray-200">
                  <Text className="text-gray-500 italic">
                    No equipment needed
                  </Text>
                </View>
              )}
            </View>
          </View>

          {/* Instructions */}
          <View className="bg-white rounded-[20px] p-5 mb-3.5 border border-gray-100 shadow-sm">
            <View className="flex-row items-center mb-3.5">
              <View className="bg-indigo-50 w-9 h-9 rounded-xl items-center justify-center mr-2.5">
                <BookOpen size={18} color="#6366f1" />
              </View>
              <Text className="text-lg font-extrabold text-gray-900">
                Instructions
              </Text>
            </View>
            <Text className="text-gray-700 leading-6 text-sm">
              {exercise.instructions?.length > 0
                ? exercise.instructions
                : 'No instructions available for this exercise.'}
            </Text>
          </View>

          {/* Safety Info*/}
          {exercise.safety_info && (
            <View className="bg-green-50 rounded-[20px] p-5 mb-3.5 border border-green-200 shadow-sm">
              <View className="flex-row items-center mb-3.5">
                <View className="bg-green-100 w-9 h-9 rounded-xl items-center justify-center mr-2.5">
                  <ShieldCheck size={18} color="#16a34a" />
                </View>
                <Text className="text-lg font-extrabold text-gray-900">
                  Safety Tips
                </Text>
              </View>
              <Text className="text-green-800 leading-6 text-sm">
                {exercise.safety_info}
              </Text>
            </View>
          )}

          <View className="h-5" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WorkOutDetailCard;
