import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const EquipmentCard = ({item}) => {
  return (
    <TouchableOpacity>
      <View className = "bg-white rounded-2xl shadow-md mx-4 my-3 overflow-hidden">
        <Image source={{ uri: item.image }} className="w-full h-48" resizeMode="cover"/>
        <View className="p-4">
          <Text className="text-xl font-bold text-gray-800 mb-2">
          {item.name}
        </Text>

        <Text className="text-gray-600 text-sm leading-5">
          {item.description}
        </Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};

export default EquipmentCard;
