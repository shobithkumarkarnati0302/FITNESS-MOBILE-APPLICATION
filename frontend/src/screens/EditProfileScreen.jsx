import { View, Text,TextInput,TouchableOpacity,ActivityIndicator,Alert,ScrollView,StatusBar,KeyboardAvoidingView,Platform,} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../context/AuthContext';
import {User,Ruler,Weight,Calendar,Users,ChevronLeft,Save,} from 'lucide-react-native';
import GenderModal from '../components/GenderModal';
import { rf, hs, vs, wp, isTablet } from '../utils/responsive';

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

  const hPad = wp(isTablet ? 10 : 5);
  const iconBox = hs(34);

  const sectionLabel = text => (
    <Text style={{color: '#6366f1',fontSize: rf(11),fontWeight: '700',textTransform: 'uppercase',letterSpacing: 1.5,marginBottom: vs(12),}}>
      {text}
    </Text>
  );

  const fieldLabel = text => (
    <Text style={{ color: '#6b7280',fontSize: rf(11),fontWeight: '600',textTransform: 'uppercase',letterSpacing: 1.2,marginBottom: vs(5),marginLeft: hs(2),}}>
      {text}
    </Text>
  );

  const inputField = (icon, value, onChange, opts = {}) => (
    <View style={{ flexDirection    : 'row',
        alignItems       : 'center',
        backgroundColor  : '#ffffff',
        borderWidth      : 2,
        borderColor      : '#e5e7eb',
        borderRadius     : hs(16),
        paddingHorizontal: hs(12),
        paddingVertical  : vs(10),
      }}>
      <View style={{ backgroundColor: '#eef2ff',width: iconBox,height: iconBox,borderRadius: hs(10),alignItems: 'center',justifyContent: 'center',marginRight: hs(10),}}>
        {icon}
      </View>
      <TextInput style={{flex: 1,color: '#111827',fontSize: rf(14),fontWeight: '500',}} value={value} onChangeText={onChange} placeholderTextColor="#9ca3af" {...opts}/>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f9fafb' }}>
      <StatusBar barStyle="light-content" backgroundColor="#6366f1" />

      {/* Header */}
      <View style = {{ backgroundColor: '#6366f1',paddingHorizontal: hPad,paddingTop: vs(14),paddingBottom: vs(24),}}>
      <TouchableOpacity onPress = {() => navigation.goBack()}
                        style   = {{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'flex-start',
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderRadius: hs(12),
            paddingHorizontal: hs(12),
            paddingVertical: vs(6),
            marginBottom: vs(12),
          }}
        >
          <ChevronLeft size={hs(18)} color="#fff" />
          <Text
            style={{
              color: '#ffffff',
              fontWeight: '700',
              fontSize: rf(13),
              marginLeft: hs(2),
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
        <Text style={{ color: '#ffffff', fontSize: rf(24), fontWeight: '900' }}>
          Edit Profile
        </Text>
        <Text
          style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: rf(12),
            marginTop: vs(2),
          }}
        >
          Update your personal information
        </Text>
      </View>

      <KeyboardAvoidingView style                        = {{ flex: 1 }} behavior = {Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView   style                        = {{ flex: 1 }}
                            contentContainerStyle        = {{ padding: hPad, paddingBottom: vs(48) }}
                            showsVerticalScrollIndicator = {false}
                            keyboardShouldPersistTaps    = "handled"
        >
          {/* Form Card */}
          <View style={{backgroundColor: '#ffffff',borderRadius: hs(24),padding: hs(18),marginTop: -vs(12),borderWidth: 1,borderColor: '#f3f4f6',marginBottom: vs(18),}}>
            {sectionLabel('Personal Info')}

            {fieldLabel('Full Name')}
            <View style={{ marginBottom: vs(14) }}>
              {inputField(
                <User size={hs(17)} color="#6366f1" />,
                formData.name,
                t => setFormData({ ...formData, name: t }),
              )}
            </View>

            {fieldLabel('Email')}
            <View style={{flexDirection: 'row',alignItems: 'center',backgroundColor: '#f9fafb',borderWidth: 2,borderColor: '#f3f4f6',borderRadius: hs(16),paddingHorizontal: hs(12),paddingVertical: vs(10),marginBottom: vs(20),}}>
              <View style={{backgroundColor: '#eef2ff',width: iconBox,height: iconBox,borderRadius: hs(10),alignItems: 'center',justifyContent: 'center',marginRight: hs(10),}}>
                <User size={hs(17)} color="#6366f1" />
              </View>
              <Text style={{ flex: 1, color: '#9ca3af', fontSize: rf(14) }}>
                {formData.email}
              </Text>
            </View>

            {sectionLabel('Physical Stats')}

            {/* Age + Gender */}
            <View style={{flexDirection: 'row',gap: hs(10),marginBottom: vs(14),}}>
              <View style={{ flex: 1 }}>
                {fieldLabel('Age')}
                {inputField(
                  <Calendar size={hs(17)} color="#6366f1" />,
                  formData.age,
                  t => setFormData({ ...formData, age: t }),
                  { keyboardType: 'numeric', placeholder: '25' },
                )}
              </View>
              <View style={{ flex: 1 }}>
                {fieldLabel('Gender')}
                <TouchableOpacity onPress={() => setShowGenderModal(true)}
                  style={{ flexDirection: 'row',alignItems: 'center',backgroundColor: '#ffffff',borderWidth: 2,borderColor: '#e5e7eb',borderRadius: hs(16),paddingHorizontal: hs(12),paddingVertical: vs(10),}}>
                  <View style={{backgroundColor: '#eef2ff',width: iconBox,height: iconBox,borderRadius: hs(10),alignItems: 'center',justifyContent: 'center',marginRight: hs(10),}}>
                    <Users size={hs(17)} color="#6366f1" />
                  </View>
                  <Text style={{flex: 1,fontSize: rf(14),fontWeight: '500',color: formData.gender ? '#111827' : '#9ca3af',}}>
                    {formData.gender || 'Select'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Height + Weight */}
            <View style={{ flexDirection: 'row', gap: hs(10) }}>
              <View style={{ flex: 1 }}>
                {fieldLabel('Height (cm)')}
                {inputField(
                  <Ruler size={hs(17)} color="#6366f1" />,
                  formData.height,
                  t => setFormData({ ...formData, height: t }),
                  { keyboardType: 'numeric', placeholder: '175' },
                )}
              </View>
              <View style={{ flex: 1 }}>
                {fieldLabel('Weight (kg)')}
                {inputField(
                  <Weight size={hs(17)} color="#6366f1" />,
                  formData.weight,
                  t => setFormData({ ...formData, weight: t }),
                  { keyboardType: 'numeric', placeholder: '70' },
                )}
              </View>
            </View>
          </View>

          {/* Save Button */}
          <TouchableOpacity
            onPress={handleSave}
            disabled={loading}
            style={{ height: vs(54),borderRadius: hs(16),flexDirection: 'row',alignItems: 'center',justifyContent: 'center',backgroundColor: loading ? '#818cf8' : '#6366f1',}}>
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <>
                <Save size={hs(20)} color="white" />
                <Text
                  style={{
                    color: '#ffffff',
                    fontWeight: '800',
                    fontSize: rf(15),
                    marginLeft: hs(8),
                  }}
                >
                  Save Changes
                </Text>
              </>
            )}
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>

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
