import {View,Text,TextInput,TouchableOpacity,ActivityIndicator,Alert,ScrollView,StatusBar,} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../context/AuthContext';
import {User,Ruler,Weight,Calendar,Users,ChevronLeft,Save} from 'lucide-react-native';
import GenderModal from '../components/GenderModal';

const EditProfileScreen = ({ navigation }) => {
  const { user, updateProfile } = useAuth();
  const [loading, setLoading] = useState(false);
  const [showGenderModal, setShowGenderModal] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    height: user?.height?.toString() || '',
    weight: user?.weight?.toString() || '',
    age: user?.age?.toString() || '',
    gender: user?.gender || '',
  });

  const handleSave = async () => {
    if (!formData.name) return Alert.alert('Error', 'Name is required');
    try {
      setLoading(true);
      await updateProfile(
        formData.name,
        formData.email,
        Number(formData.height),
        Number(formData.weight),
        Number(formData.age),
        formData.gender,
      );
      Alert.alert('Success', 'Profile updated successfully!', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
    } catch {
      Alert.alert('Error', 'Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="light-content" backgroundColor="#6366f1" />

      {/* Header */}
      <View className="bg-indigo-500 px-5 pt-4 pb-6">
        <TouchableOpacity onPress={() => navigation.goBack()}
          className="flex-row items-center self-start bg-white/20 rounded-xl px-3 py-1.5 mb-4"
        >
          <ChevronLeft size={18} color="#fff" />
          <Text className="text-white font-bold text-sm ml-0.5">Back</Text>
        </TouchableOpacity>
        <Text className="text-white text-2xl font-black">Edit Profile</Text>
        <Text className="text-white/65 text-xs mt-0.5">
          Update your personal information
        </Text>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Form Card */}
        <View className="bg-white rounded-3xl p-5 -mt-3 border border-gray-100 shadow-sm mb-5">
          <Text className="text-indigo-500 text-[11px] font-bold uppercase tracking-widest mb-4">
            Personal Info
          </Text>

          {/* Name */}
          <Text className="text-gray-500 text-xs font-semibold mb-1.5 ml-0.5 uppercase tracking-widest">
            Full Name
          </Text>
          <View className="flex-row items-center bg-white border-2 border-gray-200 rounded-2xl px-3.5 py-3 mb-4">
            <View className="bg-indigo-50 w-8 h-8 rounded-xl items-center justify-center mr-3">
              <User size={17} color="#6366f1" />
            </View>
            <TextInput
              className="flex-1 text-gray-900 text-sm font-medium"
              value={formData.name}
              onChangeText={t => setFormData({ ...formData, name: t })}
            />
          </View>

          {/* Email */}
          <Text className="text-gray-500 text-xs font-semibold mb-1.5 ml-0.5 uppercase tracking-widest">
            Email
          </Text>
          <View className="flex-row items-center bg-gray-50 border-2 border-gray-100 rounded-2xl px-3.5 py-3 mb-5">
            <View className="bg-indigo-50 w-8 h-8 rounded-xl items-center justify-center mr-3">
              <User size={17} color="#6366f1" />
            </View>
            <Text className="flex-1 text-gray-400 text-sm">
              {formData.email}
            </Text>
          </View>

          <Text className="text-indigo-500 text-[11px] font-bold uppercase tracking-widest mb-4">
            Physical Stats
          </Text>

          {/* Age & Gender */}
          <View className="flex-row gap-3 mb-4">
            <View className="flex-1">
              <Text className="text-gray-500 text-xs font-semibold mb-1.5 ml-0.5 uppercase tracking-widest">
                Age
              </Text>
              <View className="flex-row items-center bg-white border-2 border-gray-200 rounded-2xl px-3.5 py-3">
                <View className="bg-indigo-50 w-8 h-8 rounded-xl items-center justify-center mr-2.5">
                  <Calendar size={17} color="#6366f1" />
                </View>
                <TextInput className="flex-1 text-gray-900 text-sm" value={formData.age}
                  onChangeText={t => setFormData({ ...formData, age: t })}
                  keyboardType="numeric"
                  placeholder="25"
                  placeholderTextColor="#9ca3af"
                />
              </View>
            </View>
            <View className="flex-1">
              <Text className="text-gray-500 text-xs font-semibold mb-1.5 ml-0.5 uppercase tracking-widest">
                Gender
              </Text>
              <TouchableOpacity
                onPress={() => setShowGenderModal(true)}
                className="flex-row items-center bg-white border-2 border-gray-200 rounded-2xl px-3.5 py-3"
              >
                <View className="bg-indigo-50 w-8 h-8 rounded-xl items-center justify-center mr-2.5">
                  <Users size={17} color="#6366f1" />
                </View>
                <Text
                  className={`flex-1 text-sm font-medium ${
                    formData.gender ? 'text-gray-900' : 'text-gray-400'
                  }`}
                >
                  {formData.gender || 'Select'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Height & Weight*/}
          <View className="flex-row gap-3">
            <View className="flex-1">
              <Text className="text-gray-500 text-xs font-semibold mb-1.5 ml-0.5 uppercase tracking-widest">
                Height (cm)
              </Text>
              <View className="flex-row items-center bg-white border-2 border-gray-200 rounded-2xl px-3.5 py-3">
                <View className="bg-indigo-50 w-8 h-8 rounded-xl items-center justify-center mr-2.5">
                  <Ruler size={17} color="#6366f1" />
                </View>
                <TextInput className="flex-1 text-gray-900 text-sm" value={formData.height}
                  onChangeText={t => setFormData({ ...formData, height: t })}
                  keyboardType="numeric"
                  placeholder="175"
                  placeholderTextColor="#9ca3af"
                />
              </View>
            </View>
            <View className="flex-1">
              <Text className="text-gray-500 text-xs font-semibold mb-1.5 ml-0.5 uppercase tracking-widest">
                Weight (kg)
              </Text>
              <View className="flex-row items-center bg-white border-2 border-gray-200 rounded-2xl px-3.5 py-3">
                <View className="bg-indigo-50 w-8 h-8 rounded-xl items-center justify-center mr-2.5">
                  <Weight size={17} color="#6366f1" />
                </View>
                <TextInput className="flex-1 text-gray-900 text-sm" value={formData.weight}
                  onChangeText={t => setFormData({ ...formData, weight: t })}
                  keyboardType="numeric"
                  placeholder="70"
                  placeholderTextColor="#9ca3af"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity onPress={handleSave} disabled={loading}
          className={`rounded-2xl h-14 flex-row items-center justify-center ${
            loading ? 'bg-indigo-400' : 'bg-indigo-500'
          }`}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <>
              <Save size={20} color="white" />
              <Text className="text-white font-extrabold text-base ml-2">
                Save Changes
              </Text>
            </>
          )}
        </TouchableOpacity>
      </ScrollView>

      <GenderModal
        showGenderModal={showGenderModal}
        setShowGenderModal={setShowGenderModal}
        formData={formData}
        setFormData={setFormData}
      />
    </SafeAreaView>
  );
};

export default EditProfileScreen;
