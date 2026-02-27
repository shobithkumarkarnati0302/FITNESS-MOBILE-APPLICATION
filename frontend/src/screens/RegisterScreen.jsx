import { View, Text,TextInput,Pressable,TouchableOpacity,ActivityIndicator,ScrollView,StatusBar,KeyboardAvoidingView,Platform,} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Users,Eye,EyeOff,Dumbbell,Mail,Lock,User,Ruler,Weight,Calendar,} from 'lucide-react-native';
import { useAuth } from '../context/AuthContext';
import GenderModal from '../components/GenderModal';
import { rf, hs, vs, wp, isTablet } from '../utils/responsive';

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
      await register( name, email,password,Number(height),Number(weight),Number(age),gender,);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const logoSize = isTablet ? vs(96) : vs(60);
  const iconSize = isTablet ? hs(40) : hs(30);
  const cardPad = isTablet ? hs(32) : hs(20);
  const hPad = wp(isTablet ? 20 : 6);

  const inputRow = (icon, placeholder, value, onChange, opts = {}) => (
    <View style={{ flexDirection: 'row',alignItems: 'center',borderRadius: hs(16),paddingHorizontal: hs(14),paddingVertical: vs(11),backgroundColor: '#f9fafb',borderWidth: 2,borderColor: '#e5e7eb',}}>
      {icon}
      <TextInput style={{flex: 1,color: '#111827',marginLeft: hs(10),fontSize: rf(14),}} placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        value={value}
        onChangeText={onChange}
        {...opts}
      />
    </View>
  );

  const sectionLabel = text => (
    <Text style = {{fontSize: rf(10),textTransform: 'uppercase',letterSpacing: 1.5,color: '#6366f1',fontWeight: '700',marginBottom: vs(12),}}>
      {text}
    </Text>
  );

  const fieldLabel = text => (
    <Text style = {{color: '#6b7280',fontSize: rf(10),marginBottom: vs(5),marginLeft: hs(4),textTransform: 'uppercase',letterSpacing: 1.2,}}>
      {text}
    </Text>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f9fafb' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
      <View style={{ height: vs(4), backgroundColor: '#6366f1' }} />

      <KeyboardAvoidingView style = {{ flex: 1 }} behavior = {Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: hPad,
            paddingTop: vs(20),
            paddingBottom: vs(48),
          }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={{ alignItems: 'center', marginBottom: vs(24) }}>
            <View style={{width: logoSize,height: logoSize,borderRadius: hs(20),backgroundColor: '#6366f1',alignItems: 'center',justifyContent: 'center',marginBottom: vs(10),}}>
              <Dumbbell size={iconSize} color="#ffffff" />
            </View>
            <Text style={{ fontSize: rf(26), fontWeight: '800', color: '#111827' }}>
              Create Account
            </Text>
            <Text style={{ color: '#9ca3af', fontSize: rf(13), marginTop: vs(4) }}>
              Fill in your details to get started
            </Text>
          </View>

          {/* Form Card */}
          <View style={{ borderRadius: hs(24),padding: cardPad,backgroundColor: '#ffffff',borderWidth: 1,borderColor: '#f3f4f6',}}>
            {sectionLabel('Account Info')}

            {fieldLabel('Name')}
            <View style={{ marginBottom: vs(12) }}>
              {inputRow(
                <User size={hs(18)} color="#6366f1" />,
                'Full name',
                name,
                setName,
              )}
            </View>

            {fieldLabel('Email')}
            <View style={{ marginBottom: vs(12) }}>
              {inputRow(
                <Mail size={hs(18)} color="#6366f1" />,
                'Email address',
                email,
                setEmail,
                { keyboardType: 'email-address', autoCapitalize: 'none' },
              )}
            </View>

            {fieldLabel('Password')}
            <View style={{ flexDirection: 'row',alignItems: 'center',borderRadius: hs(16),paddingHorizontal: hs(14),paddingVertical: vs(11),marginBottom: vs(20),backgroundColor: '#f9fafb',borderWidth: 2,borderColor: '#e5e7eb',}}>
              <Lock size={hs(18)} color="#6366f1" />
              <TextInput style={{flex: 1,color: '#111827',marginLeft: hs(10),fontSize: rf(14),}}
                placeholder="Create a password"
                placeholderTextColor="#9ca3af"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <Pressable onPress={() => setShowPassword(!showPassword)}hitSlop={8}>
                {showPassword ? (
                  <EyeOff size={hs(18)} color="#9ca3af" />
                ) : (
                  <Eye size={hs(18)} color="#9ca3af" />
                )}
              </Pressable>
            </View>

            {/* ── Physical Stats ── */}
            {sectionLabel('Physical Stats')}

            {/* Height + Weight row */}
            <View style={{flexDirection: 'row',gap: hs(10),marginBottom: vs(12),}}>
              <View style={{ flex: 1 }}>
                {fieldLabel('Height (cm)')}
                <View style={{flexDirection: 'row',alignItems: 'center',borderRadius: hs(16),paddingHorizontal: hs(12),paddingVertical: vs(11),backgroundColor: '#f9fafb',borderWidth: 2,borderColor: '#e5e7eb',}}>
                  <Ruler size={hs(16)} color="#6366f1" />
                  <TextInput style={{flex: 1,color: '#111827',marginLeft: hs(8),fontSize: rf(14),}}
                    placeholder="175"
                    placeholderTextColor="#9ca3af"
                    value={height}
                    onChangeText={setHeight}
                    keyboardType="numeric"
                  />
                </View>
              </View>

              <View style={{ flex: 1 }}>
                {fieldLabel('Weight (kg)')}
                <View style={{ flexDirection: 'row',alignItems: 'center',borderRadius: hs(16),paddingHorizontal: hs(12),paddingVertical: vs(11),backgroundColor: '#f9fafb',borderWidth: 2,borderColor: '#e5e7eb',}}>
                  <Weight size={hs(16)} color="#6366f1" />
                  <TextInput style={{flex: 1,color: '#111827',marginLeft: hs(8),fontSize: rf(14),}}
                    placeholder="70"
                    placeholderTextColor="#9ca3af"
                    value={weight}
                    onChangeText={setWeight}
                    keyboardType="numeric"
                  />
                </View>
              </View>
            </View>

            {/* Age + Gender row */}
            <View style={{ flexDirection: 'row',gap: hs(10),marginBottom: vs(20),}}>
              <View style={{ flex: 1 }}>
                {fieldLabel('Age')}
                <View style={{ flexDirection: 'row', alignItems: 'center',borderRadius: hs(16),paddingHorizontal: hs(12),paddingVertical: vs(11),backgroundColor: '#f9fafb',borderWidth: 2,borderColor: '#e5e7eb',}}>
                  <Calendar size={hs(16)} color="#6366f1" />
                  <TextInput style={{flex: 1,color: '#111827',marginLeft: hs(8),fontSize: rf(14),}}
                    placeholder="22"
                    placeholderTextColor="#9ca3af"
                    value={age}
                    onChangeText={setAge}
                    keyboardType="numeric"
                  />
                </View>
              </View>

              <View style={{ flex: 1 }}>
                {fieldLabel('Gender')}
                <TouchableOpacity style={{ flexDirection: 'row',alignItems: 'center',borderRadius: hs(16),paddingHorizontal: hs(12),paddingVertical: vs(11),backgroundColor: '#f9fafb',borderWidth: 2,borderColor: '#e5e7eb',}}
                  onPress={() => setShowGenderModal(true)}
                >
                  <Users size={hs(16)} color="#6366f1" />
                  <Text style={{flex: 1,marginLeft: hs(8),fontSize: rf(14),color: gender ? '#111827' : '#9ca3af',}}>
                    {gender || 'Select'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Error */}
            {error ? (
              <Text style={{color: '#ef4444',fontSize: rf(13),marginBottom: vs(12),marginLeft: hs(4),}}>
                {error}
              </Text>
            ) : null}

            {/* Register Button */}
            <Pressable onPress={handleRegister}disabled={loading}
              style={{ borderRadius: hs(16),paddingVertical: vs(14),alignItems: 'center',backgroundColor: loading ? '#818cf8' : '#6366f1',}}>
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={{color: '#ffffff',fontWeight: '700',fontSize: rf(15),letterSpacing: 0.5,}}>
                  Create Account
                </Text>
              )}
            </Pressable>
          </View>

          {/* Login Link */}
          <View style={{ flexDirection: 'row', justifyContent: 'center',marginTop: vs(20),}}>
            <Text style={{ color: '#6b7280', fontSize: rf(14) }}>
              Already have an account?{' '}
            </Text>
            <Pressable onPress={() => navigation.replace('Login')} hitSlop={8}>
              <Text style={{ color: '#6366f1',fontWeight: '700',fontSize: rf(14),}}>
                Sign In
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Gender Modal */}
      <GenderModal showGenderModal={showGenderModal} setShowGenderModal={setShowGenderModal}formData={{ gender }} setFormData={({ gender: g }) => setGender(g)}
      />
    </SafeAreaView>
  );
};

export default RegisterScreen;
