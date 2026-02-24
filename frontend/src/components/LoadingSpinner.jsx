import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Dumbbell } from 'lucide-react-native';

const LoadingSpinner = () => {
  return (
    <View className="flex-1 bg-gray-50 items-center justify-center">
      <View className="w-[72px] h-[72px] rounded-[22px] bg-indigo-500 items-center justify-center mb-4 shadow-lg">
        <Dumbbell size={34} color="#ffffff" />
      </View>
      <ActivityIndicator size="large" color="#6366f1" className="mb-3" />
      <Text className="text-gray-500 text-sm font-semibold">
        Loading exercises...
      </Text>
    </View>
  );
};

export default LoadingSpinner;
