import React from 'react';
import { View, Text, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Users, Check } from 'lucide-react-native';

const GENDER_OPTIONS = [
  { label: 'Male', emoji: '👨', value: 'male' },
  { label: 'Female', emoji: '👩', value: 'female' },
  { label: 'Other', emoji: '🧑', value: 'other' },
];

const GenderModal = ({ showGenderModal, setShowGenderModal,formData,setFormData,}) => {
  return (
    <Modal transparent animationType="slide" visible={showGenderModal} onRequestClose={() => setShowGenderModal(false)}>
      {/* Backdrop */}
      <Pressable className="flex-1 bg-black/45" onPress={() => setShowGenderModal(false)}/>

      {/* Bottom Sheet */}
      <View className="bg-white rounded-t-[28px] pt-3 pb-9 px-6">
        {/* Handle */}
        <View className="w-10 h-1 bg-gray-200 rounded-full self-center mb-5" />

        {/* Title */}
        <View className="flex-row items-center mb-5">
          <View className="bg-indigo-50 w-9 h-9 rounded-xl items-center justify-center mr-3">
            <Users size={20} color="#6366f1" />
          </View>
          <Text className="text-gray-900 text-lg font-extrabold">
            Select Gender
          </Text>
        </View>

        {/* Options */}
        {GENDER_OPTIONS.map(option => {
          const isSelected = formData?.gender === option.value;
          return (
            <TouchableOpacity key={option.value}
              onPress={() => { 
                setFormData({ ...formData, gender: option.value });
                setShowGenderModal(false);
              }}
              className={`flex-row items-center rounded-2xl p-4 mb-2.5 border-2
                ${
                  isSelected
                    ? 'bg-indigo-50 border-indigo-500'
                    : 'bg-gray-50 border-gray-100'
                }`}
            >
              <Text className="text-3xl mr-3.5">{option.emoji}</Text>
              <Text className={`flex-1 text-base font-bold ${
                  isSelected ? 'text-indigo-800' : 'text-gray-700'
                }`}
              >
                {option.label}
              </Text>
              {isSelected && (
                <View className="bg-indigo-500 w-6 h-6 rounded-full items-center justify-center">
                  <Check size={14} color="#fff" />
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </Modal>
  );
};

export default GenderModal;
