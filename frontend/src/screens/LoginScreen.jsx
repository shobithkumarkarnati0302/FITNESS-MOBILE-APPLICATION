import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../context/AuthContext';
import { Eye, EyeOff, Dumbbell, Mail, Lock } from 'lucide-react-native';

const LoginScreen = ({ navigation }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    setError('');
    if (!email || !password) return setError('Email and password are required');
    if (!email.includes('@')) return setError('Enter a valid email');
    try {
      setLoading(true);
      await login(email, password);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-app-dark">
      <StatusBar barStyle="light-content" backgroundColor="#0a0a0f" />

      {/* Top accent strip */}
      <View className="h-1 bg-indigo-500" />

      <View className="flex-1 px-6 justify-center">
        {/* Header */}
        <View className="items-center mb-10">
          <View className="w-20 h-20 rounded-3xl bg-indigo-500 items-center justify-center mb-4">
            <Dumbbell size={40} color="#ffffff" />
          </View>
          <Text className="text-4xl font-bold text-white tracking-tight">
            FitPro
          </Text>
          <Text className="text-gray-400 text-xs mt-1 tracking-widest uppercase">
            Your Fitness Journey
          </Text>
        </View>

        {/* Glass Card */}
        <View className="rounded-3xl p-6 bg-white/5 border border-white/10">
          <Text className="text-2xl font-bold text-white mb-6">
            Welcome Back
          </Text>

          {/* Email */}
          <Text className="text-gray-400 text-xs mb-2 ml-1 uppercase tracking-widest">
            Email
          </Text>
          <View className="flex-row items-center rounded-2xl px-4 py-3 mb-4 bg-white/[7%] border border-white/10">
            <Mail size={18} color="#6366f1" />
            <TextInput className            = "flex-1 text-white ml-3" placeholder          = "Enter your email"
              placeholderTextColor = "#4b5563" value                = {email}
              onChangeText         = {setEmail}
              keyboardType         = "email-address"
              autoCapitalize       = "none"
            />
          </View>

          {/* Password */}
          <Text className="text-gray-400 text-xs mb-2 ml-1 uppercase tracking-widest">
            Password
          </Text>
          <View className = "flex-row items-center rounded-2xl px-4 py-3 mb-2 bg-white/[7%] border border-white/10">
          <Lock size      = {18} color = "#6366f1" />
            <TextInput
              className="flex-1 text-white ml-3"
              placeholder="Enter your password"
              placeholderTextColor="#4b5563"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <EyeOff size={18} color="#6b7280" />
              ) : (
                <Eye size={18} color="#6b7280" />
              )}
            </Pressable>
          </View>

          {/* Error */}
          {error ? (
            <Text className="text-red-400 text-sm mb-3 ml-1">{error}</Text>
          ) : (
            <View className="mb-4" />
          )}

          {/* Login Button */}
          <Pressable onPress={handleLogin} disabled={loading}
            className={`rounded-2xl py-4 items-center ${
              loading ? 'bg-indigo-700' : 'bg-indigo-500'
            }`}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text className="text-white font-bold text-base tracking-wide">
                Sign In
              </Text>
            )}
          </Pressable>
        </View>

        {/* Register Link */}
        <View className="flex-row justify-center mt-8">
          <Text className="text-gray-500">Don't have an account? </Text>
          <Pressable onPress={() => navigation.replace('Register')}>
            <Text className="text-indigo-400 font-bold">Create Account</Text>
          </Pressable>
        </View>

        <Text className="text-gray-600 text-xs text-center mt-8">
          FITNESS APP • Shobith Kumar
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
