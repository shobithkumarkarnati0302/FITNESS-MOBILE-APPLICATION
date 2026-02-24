import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AlertCircle, ChevronLeft } from 'lucide-react-native';

const ErrorMessage = ({ error, navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1 items-center justify-center px-8">
        {/* Error Icon */}
        <View className="w-[72px] h-[72px] rounded-[22px] bg-red-100 items-center justify-center mb-5">
          <AlertCircle size={36} color="#ef4444" />
        </View>

        <Text className="text-gray-900 text-xl font-extrabold mb-2 text-center">
          Something went wrong
        </Text>
        <Text className="text-gray-500 text-sm text-center leading-6 mb-8">
          {error || 'An unexpected error occurred. Please try again.'}
        </Text>

        <TouchableOpacity onPress={() => navigation?.goBack()}
          className="flex-row items-center bg-indigo-500 px-6 py-3.5 rounded-2xl shadow-md"
        >
          <ChevronLeft size={18} color="#fff" />
          <Text className="text-white font-bold text-sm ml-1">Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ErrorMessage;
