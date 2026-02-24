import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ChevronRight } from 'lucide-react-native';

const WorkoutCard = ({ item, navigation }) => {
  const diffClass = {
    beginner: {
      border: 'border-l-green-500',
      badge: 'bg-green-100 border-green-200',
      text: 'text-green-700',
    },
    intermediate: {
      border: 'border-l-amber-500',
      badge: 'bg-amber-100 border-amber-200',
      text: 'text-amber-700',
    },
    expert: {
      border: 'border-l-red-500',
      badge: 'bg-red-100 border-red-200',
      text: 'text-red-700',
    },
  };
  
  const diff = diffClass[item.difficulty] || diffClass.beginner;

  return (
    <TouchableOpacity onPress={() => navigation.navigate('WorkoutDetail', { exercise: item })}
      activeOpacity={0.85}
      className={`bg-white rounded-[20px] mb-3.5 mt-5 p-4 border border-gray-200 shadow-lg shadow-gray-800 border-l-4 ${diff.border}`}
    >

      <View className="flex-row items-stretch">
        {/* Left column */}
        <View className="flex-1 mr-3">
          {/* Exercise Name */}
          <Text className="text-base font-extrabold text-gray-900 mb-2.5" numberOfLines={2}>
            {item.name}
          </Text>

          {/* Type & Equipment */}
          <View className="flex-row flex-wrap gap-1 items-center">
            {/* Type */}
            <View className="bg-indigo-50 px-2.5 py-1 rounded-lg">
              <Text className="text-xs font-semibold text-indigo-700 capitalize">
                {item.type ? item.type.replace(/_/g, ' ') : 'Exercise'}
              </Text>
            </View>

            {/* Equipment */}
            {item.equipments && item.equipments.length > 0 && (
              <>
                <Text className="text-xs font-semibold text-gray-500">
                  Needs:
                </Text>
                {item.equipments.slice(0, 2).map((eq, i) => (
                  <View
                    key={i}
                    className="bg-orange-50 px-2 py-0.5 rounded-lg border border-orange-200"
                  >
                    <Text className="text-[10px] font-semibold text-orange-700">
                      {eq}
                    </Text>
                  </View>
                ))}
              </>
            )}
          </View>
        </View>

        {/* Right column */}
        <View className="items-end justify-between">
          {/* Difficulty */}
          <View className={`px-2.5 py-0.5 rounded-full border ${diff.badge}`}>
            <Text className={`text-xs font-bold capitalize ${diff.text}`}>
              {item.difficulty}
            </Text>
          </View>

          {/* Right Arrow */}
          <ChevronRight size={18} color="#9ca3af" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WorkoutCard;
