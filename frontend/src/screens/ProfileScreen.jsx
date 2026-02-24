import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../context/AuthContext';
import {
  User,
  Mail,
  Calendar,
  Users,
  Ruler,
  Weight,
  LogOut,
  ChevronRight,
  Edit3,
} from 'lucide-react-native';
import SubscriptionBar from '../components/SubscriptionBar';

const StatCard = ({ icon: Icon, label, value, unit, iconBg, iconColor }) => (
  <View className="flex-1 m-1.5 bg-white rounded-[18px] p-4 items-center border border-gray-100 shadow-sm">
    <View
      className={`w-10 h-10 rounded-xl items-center justify-center mb-2 ${iconBg}`}
    >
      <Icon size={20} color={iconColor} />
    </View>
    <Text className="text-gray-400 text-[11px] font-semibold mb-1">
      {label}
    </Text>
    <View className="flex-row items-baseline">
      <Text className="text-gray-900 text-lg font-extrabold">
        {value || '--'}
      </Text>
      {unit && <Text className="text-gray-400 text-xs ml-0.5">{unit}</Text>}
    </View>
  </View>
);

const ProfileScreen = ({ navigation }) => {
  const { logout, user } = useAuth();

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="light-content" backgroundColor="#6366f1" />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Top Banner */}
        <View className="bg-indigo-500 px-6 pt-6 pb-12 items-center">
          <View className="w-20 h-20 rounded-full bg-white/20 items-center justify-center border-2 border-white/40 mb-3">
            <User size={40} color="#ffffff" />
          </View>
          <Text className="text-white text-xl font-black">
            {user?.name || 'User'}
          </Text>
          <View className="flex-row items-center mt-1">
            <Mail size={13} color="rgba(255,255,255,0.6)" />
            <Text className="text-white/65 text-xs ml-1">{user?.email}</Text>
          </View>
        </View>

        {/* Content */}
        <View className = "-mt-6 px-4">
          {/* Stats */}
          <View className="bg-white rounded-3xl p-4 mb-4 border border-gray-100 shadow-sm">
            <Text className="text-gray-900 font-extrabold text-base mb-3 ml-1">
              Physical Stats
            </Text>
            <View className="flex-row">
              <StatCard
                icon={Calendar}
                label="Age"
                value={user?.age}
                unit="yrs"
                iconBg="bg-indigo-50"
                iconColor="#6366f1"
              />
              <StatCard
                icon={Users}
                label="Gender"
                value={user?.gender}
                iconBg="bg-violet-50"
                iconColor="#8b5cf6"
              />
            </View>
            <View className="flex-row">
              <StatCard
                icon={Ruler}
                label="Height"
                value={user?.height}
                unit="cm"
                iconBg="bg-cyan-50"
                iconColor="#06b6d4"
              />
              <StatCard
                icon={Weight}
                label="Weight"
                value={user?.weight}
                unit="kg"
                iconBg="bg-emerald-50"
                iconColor="#10b981"
              />
            </View>
          </View>

          {/* Subscription */}
          <View className="bg-white rounded-3xl p-4 mb-4 border border-gray-100 shadow-sm">
            <Text className="text-gray-900 font-extrabold text-base mb-3 ml-1">
              Subscription
            </Text>
            <SubscriptionBar />
          </View>

          {/* Account Menu */}
          <View className="bg-white rounded-3xl p-4 mb-6 border border-gray-100 shadow-sm">
            <Text className="text-gray-900 font-extrabold text-base mb-3 ml-1">
              Account
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfile')}
              className="flex-row items-center bg-indigo-50 rounded-2xl p-3.5 mb-2.5 border border-indigo-100"
            >
              <View className="bg-indigo-500 w-10 h-10 rounded-xl items-center justify-center mr-3">
                <Edit3 size={18} color="#fff" />
              </View>
              <Text className="flex-1 text-indigo-800 text-sm font-bold">
                Edit Profile
              </Text>
              <ChevronRight size={18} color="#a78bfa" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={logout}
              className="flex-row items-center bg-red-50 rounded-2xl p-3.5 border border-red-100"
            >
              <View className="bg-red-500 w-10 h-10 rounded-xl items-center justify-center mr-3">
                <LogOut size={18} color="#fff" />
              </View>
              <Text className="flex-1 text-red-700 text-sm font-bold">
                Logout
              </Text>
              <ChevronRight size={18} color="#fca5a5" />
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <Text className="text-gray-400 text-[11px] font-semibold tracking-widest uppercase text-center pb-5">
            Fitness App · <Text className="text-indigo-400">Shobith Kumar</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
