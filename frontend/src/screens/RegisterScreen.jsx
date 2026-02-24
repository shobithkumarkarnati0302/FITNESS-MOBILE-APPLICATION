import { View, Text,TextInput,Pressable,TouchableOpacity,ActivityIndicator,ScrollView,StatusBar,} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Users,Eye,EyeOff,Dumbbell,Mail,Lock,User,Ruler,Weight,Calendar,} from 'lucide-react-native';
import { useAuth } from '../context/AuthContext';
import GenderModal from '../components/GenderModal';

const RegisterScreen = ({ navigation }) => {
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [showGenderModal, setShowGenderModal] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async () => {
    setError('');
    if (!name || !email || !password)
      return setError('Name, email and password are required');
    if (!email.includes('@')) return setError('Enter a valid email');
    try {
      setLoading(true);
      await register(
        name,
        email,
        password,
        Number(height),
        Number(weight),
        Number(age),
        gender,
      );
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-app-dark">
      <StatusBar barStyle="light-content" backgroundColor="#0a0a0f" />
      <View className="h-1 bg-indigo-500" />

      <ScrollView contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 24,
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Brand Header */}
        <View className="items-center mb-8">
          <View className="w-16 h-16 rounded-3xl bg-indigo-500 items-center justify-center mb-3">
            <Dumbbell size={32} color="#ffffff" />
          </View>
          <Text className="text-3xl font-bold text-white">Create Account</Text>
          <Text className="text-gray-500 text-sm mt-1">
            Fill in your details to get started
          </Text>
        </View>

        {/* Glass Card */}
        <View className="rounded-3xl p-6 bg-white/5 border border-white/10">
          {/* Account Info Section */}
          <Text className="text-xs uppercase tracking-widest mb-4 text-indigo-400 font-bold">
            Account Info
          </Text>

          {/* Name */}
          <Text className="text-gray-400 text-xs mb-2 ml-1 uppercase tracking-widest">
            Name
          </Text>
          <View className="flex-row items-center rounded-2xl px-4 py-3 mb-4 bg-white/[7%] border border-white/10">
            <User size={18} color="#6366f1" />
            <TextInput className="flex-1 text-white ml-3" placeholder="Full name"
              placeholderTextColor="#4b5563" value={name}
              onChangeText={setName}
            />
          </View>

          {/* Email */}
          <Text className="text-gray-400 text-xs mb-2 ml-1 uppercase tracking-widest">
            Email
          </Text>
          <View className="flex-row items-center rounded-2xl px-4 py-3 mb-4 bg-white/[7%] border border-white/10">
            <Mail size={18} color="#6366f1" />
            <TextInput className="flex-1 text-white ml-3" placeholder="Email address"
              placeholderTextColor="#4b5563" value={email}
              onChangeText={setEmail}keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password */}
          <Text className="text-gray-400 text-xs mb-2 ml-1 uppercase tracking-widest">
            Password
          </Text>
          <View className="flex-row items-center rounded-2xl px-4 py-3 mb-6 bg-white/[7%] border border-white/10">
            <Lock size={18} color="#6366f1" />
            <TextInput className="flex-1 text-white ml-3" placeholder="Create a password"
              placeholderTextColor="#4b5563" value={password}
              onChangeText={setPassword} secureTextEntry={!showPassword}
            />
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <EyeOff size={18} color="#6b7280" />
              ) : (
                <Eye size={18} color="#6b7280" />
              )}
            </Pressable>
          </View>

          {/* Stats  */}
          <Text className="text-xs uppercase tracking-widest mb-4 text-indigo-400 font-bold">
            Physical Stats
          </Text>

          <View className = "flex-row gap-3 mb-4">
            {/* Height */}
            <View className="flex-1">
              <Text className="text-gray-400 text-xs mb-2 ml-1 uppercase tracking-widest">
                Height (cm)
              </Text>
              <View className="flex-row items-center rounded-2xl px-4 py-3 bg-white/[7%] border border-white/10">
                <Ruler size={18} color="#6366f1" />
                <TextInput className="flex-1 text-white ml-3" placeholder="175"
                  placeholderTextColor="#4b5563" value={height}
                  onChangeText={setHeight}keyboardType="numeric"
                />
              </View>
            </View>

            {/* Weight */}
            <View className="flex-1">
              <Text className="text-gray-400 text-xs mb-2 ml-1 uppercase tracking-widest">
                Weight (kg)
              </Text>
              <View className="flex-row items-center rounded-2xl px-4 py-3 bg-white/[7%] border border-white/10">
                <Weight size={18} color="#6366f1" />
                <TextInput className="flex-1 text-white ml-3" placeholder="70"
                  placeholderTextColor="#4b5563" value={weight}
                  onChangeText={setWeight}keyboardType="numeric"
                />
              </View>
            </View>
          </View>


          <View className = "flex-row gap-3 mb-6">
            {/* Age */}
            <View className="flex-1">
              <Text className="text-gray-400 text-xs mb-2 ml-1 uppercase tracking-widest">
                Age
              </Text>
              <View className="flex-row items-center rounded-2xl px-4 py-3 bg-white/[7%] border border-white/10">
                <Calendar size={18} color="#6366f1" />
                <TextInput className="flex-1 text-white ml-3" placeholder="22"
                  placeholderTextColor="#4b5563" value={age}
                  onChangeText={setAge}keyboardType="numeric"
                />
              </View>
            </View>

            {/* Gender */}
            <View className="flex-1">
              <Text className="text-gray-400 text-xs mb-2 ml-1 uppercase tracking-widest">
                Gender
              </Text>
              <TouchableOpacity
                className="flex-row items-center rounded-2xl px-4 py-3 bg-white/[7%] border border-white/10"
                onPress={() => setShowGenderModal(true)}
              >
                <Users size={18} color="#6366f1" />
                <Text
                  className={`flex-1 ml-3 ${
                    gender ? 'text-white' : 'text-gray-600'
                  }`}
                >
                  {gender || 'Select'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {error ? (
            <Text className="text-red-400 text-sm mb-4 ml-1">{error}</Text>
          ) : null}

          {/* Register Button */}
          <Pressable onPress={handleRegister} disabled={loading}
            className={`rounded-2xl py-4 items-center ${
              loading ? 'bg-indigo-700' : 'bg-indigo-500'
            }`}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text className="text-white font-bold text-base tracking-wide">
                Create Account
              </Text>
            )}
          </Pressable>
        </View>

        {/* Login Link */}
        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-500">Already have an account? </Text>
          <Pressable onPress={() => navigation.replace('Login')}>
            <Text className="text-indigo-400 font-bold">Sign In</Text>
          </Pressable>
        </View>
      </ScrollView>

      {/* Gender Modal */}
      <GenderModal
        showGenderModal={showGenderModal}
        setShowGenderModal={setShowGenderModal}
        formData={{ gender }}
        setFormData={({ gender: g }) => setGender(g)}
      />
    </SafeAreaView>
  );
};

export default RegisterScreen;
