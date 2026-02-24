import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Zap } from 'lucide-react-native';

const SubscriptionBar = () => {
  const TOTAL_DAYS = 30;
  const USED_DAYS = useMemo(() => Math.floor(Math.random() * 30), []);
  const PROGRESS = Math.round((USED_DAYS / TOTAL_DAYS) * 100);
  const REMAINING = TOTAL_DAYS - USED_DAYS;

  return (
    <View className="bg-violet-50 rounded-[18px] p-4 border border-violet-100">
      {/* Top Row */}
      <View className="flex-row justify-between items-center mb-2.5">
        <View className="flex-row items-center">
          <View className="bg-indigo-500 px-2.5 py-1 rounded-full mr-2">
            <Text className="text-white text-[11px] font-extrabold tracking-wide">
              FREE PLAN
            </Text>
          </View>
          <Text className="text-indigo-500 font-bold text-sm">{PROGRESS}%</Text>
        </View>
        <Text className="text-violet-700 text-xs font-semibold">
          {USED_DAYS}/{TOTAL_DAYS} days used
        </Text>
      </View>

      {/* Progress Track */}
      <View className="w-full h-2.5 bg-violet-200 rounded-full overflow-hidden mb-2.5">
        <View className="h-2.5 bg-indigo-500 rounded-full" style={{ width: `${PROGRESS}%` }}/>
      </View>

      {/* Bottom Row */}
      <View className="flex-row justify-between items-center">
        <Text className="text-violet-600 text-xs">
          {REMAINING} day{REMAINING !== 1 ? 's' : ''} remaining
        </Text>
        <TouchableOpacity className="flex-row items-center bg-indigo-500 px-3 py-1 rounded-full">
          <Zap size={12} color="#fff" />
          <Text className="text-white text-[11px] font-bold ml-1">Upgrade</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SubscriptionBar;
