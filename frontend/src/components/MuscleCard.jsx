import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { ChevronRight } from 'lucide-react-native';

const MuscleCard = ({ item, navigation }) => {
  return (
    <View className="flex-1 m-1.5">
      <TouchableOpacity className="rounded-[20px] overflow-hidden" style={{ aspectRatio: 4 / 5 }} activeOpacity={0.85}
        onPress={() => navigation.navigate('WorkoutList', { muscleGroup: item.name })}
      >
        {/* Background Image */}
        <Image source={item.image} className="absolute w-full h-full" resizeMode="cover"/>

        {/* Dark overlay */}
        <View className="absolute inset-0 bg-black/35" />

        {/* Bottom gradient fade */}
        <View className="absolute bottom-0 left-0 right-0 h-full bg-black/10" />

        {/* Content */}
        <View className="flex-1 justify-end p-3">
          <View className="">
            <Text className="text-white text-xs font-extrabold uppercase tracking-wider mb-1">
              {item.name.replace(/_/g, ' ')}
            </Text>
          </View>
          <View className="flex-row items-center self-start bg-indigo-500 rounded-full px-2 py-1">
            <Text className="text-white text-[10px] font-bold">Explore</Text>
            <ChevronRight size={11} color="#fff" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MuscleCard;
