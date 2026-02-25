import { View,Text,TextInput,Pressable,ActivityIndicator,StatusBar,KeyboardAvoidingView,ScrollView,Platform,} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../context/AuthContext';
import { Eye, EyeOff, Dumbbell, Mail, Lock } from 'lucide-react-native';
import { rf, hs, vs, wp, isTablet } from '../utils/responsive';

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
    if (!email.includes('@gmail.com')) return setError('Enter a valid email');
    try {
      setLoading(true);
      await login(email, password);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const logoSize = isTablet ? vs(120) : vs(80);
  const iconSize = isTablet ? hs(50) : hs(40);
  const cardPad = isTablet ? hs(32) : hs(24);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f9fafb' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

      {/* Top accent strip */}
      <View style={{ height: vs(4), backgroundColor: '#6366f1' }} />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            paddingHorizontal: wp(isTablet ? 20 : 6),
            paddingVertical: vs(24),
          }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={{ alignItems: 'center', marginBottom: vs(32) }}>
            <View
              style={{
                width: logoSize,
                height: logoSize,
                borderRadius: hs(24),
                backgroundColor: '#6366f1',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: vs(12),
              }}
            >
              <Dumbbell size={iconSize} color="#ffffff" />
            </View>
            <Text
              style={{
                fontSize: rf(32),
                fontWeight: '800',
                color: '#6366f1',
                letterSpacing: -0.5,
              }}
            >
              Fitness App
            </Text>
            <Text
              style={{
                color: '#9ca3af',
                fontSize: rf(11),
                marginTop: vs(4),
                letterSpacing: 2,
                textTransform: 'uppercase',
              }}
            >
              Track Your Fitness Journey
            </Text>
          </View>

          {/* Card */}
          <View style = {{ borderRadius: hs(28),padding: cardPad,backgroundColor: '#ffffff',borderWidth: 1,borderColor: '#f3f4f6',}}>
          <Text style = {{fontSize: rf(22),fontWeight: '800',color: '#111827',marginBottom: vs(20),}}>
              Welcome Back
          </Text>

            {/* Email */}
            <Text style={{ color: '#6b7280',fontSize: rf(10),marginBottom: vs(6),marginLeft: hs(4),textTransform: 'uppercase',letterSpacing: 1.5,}}>
              Email
            </Text>
            <View style={{flexDirection: 'row',alignItems: 'center',borderRadius: hs(16),paddingHorizontal: hs(14),paddingVertical: vs(12),marginBottom: vs(14),backgroundColor: '#f9fafb',borderWidth: 2,borderColor: '#e5e7eb',}}>
              <Mail size={hs(18)} color="#6366f1" />
              <TextInput
                style={{
                  flex: 1,
                  color: '#111827',
                  marginLeft: hs(10),
                  fontSize: rf(14),
                }}
                placeholder="Enter your email"
                placeholderTextColor="#9ca3af"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Password */}
            <Text style={{ color: '#6b7280',fontSize: rf(10),marginBottom: vs(6),marginLeft: hs(4),textTransform: 'uppercase',letterSpacing: 1.5,}}>
              Password
            </Text>
            <View style={{ flexDirection: 'row',alignItems: 'center',borderRadius: hs(16),paddingHorizontal: hs(14),paddingVertical: vs(12),marginBottom: vs(6),backgroundColor: '#f9fafb',borderWidth: 2,borderColor: '#e5e7eb',}}>
              <Lock size={hs(18)} color="#6366f1" />
              <TextInput
                style={{
                  flex: 1,
                  color: '#111827',
                  marginLeft: hs(10),
                  fontSize: rf(14),
                }}
                placeholder="Enter your password"
                placeholderTextColor="#9ca3af"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <Pressable
                onPress={() => setShowPassword(!showPassword)}
                hitSlop={8}
              >
                {showPassword ? (
                  <EyeOff size={hs(18)} color="#9ca3af" />
                ) : (
                  <Eye size={hs(18)} color="#9ca3af" />
                )}
              </Pressable>
            </View>

            {/* Error */}
            {error ? (
              <Text style={{ color: '#ef4444',fontSize: rf(13),marginBottom: vs(12),marginLeft: hs(4),}}>
                {error}
              </Text>
            ) : (
              <View style={{ height: vs(16) }} />
            )}

            {/* Login Button */}
            <Pressable onPress={handleLogin} disabled={loading}
              style={{ borderRadius: hs(16),paddingVertical: vs(14),alignItems: 'center',backgroundColor: loading ? '#818cf8' : '#6366f1',}}>
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={{ color: '#ffffff',fontWeight: '700',fontSize: rf(15),letterSpacing: 0.5,}}>
                  Sign In
                </Text>
              )}
            </Pressable>
          </View>

          {/* Register Link */}
          <View style={{ flexDirection: 'row', justifyContent: 'center',marginTop: vs(24),}}>
            <Text style={{ color: '#6b7280', fontSize: rf(14) }}>
              Don't have an account?{' '}
            </Text>
            <Pressable
              onPress={() => navigation.replace('Register')}
              hitSlop={8}
            >
              <Text
                style={{
                  color: '#6366f1',
                  fontWeight: '700',
                  fontSize: rf(14),
                }}
              >
                Create Account
              </Text>
            </Pressable>
          </View>

          <Text style={{ color: '#9ca3af',fontSize: rf(11),textAlign: 'center',marginTop: vs(20),letterSpacing: 1.5,textTransform: 'uppercase',}}>
            FITNESS APP • Shobith Kumar
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
