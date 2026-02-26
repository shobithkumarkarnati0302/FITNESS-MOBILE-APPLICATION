import React from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { Users, Check } from 'lucide-react-native';

const GENDER_OPTIONS = [
  { label: 'Male', emoji: '👨', value: 'male' },
  { label: 'Female', emoji: '👩', value: 'female' },
  { label: 'Other', emoji: '🧑', value: 'other' },
];

/**
 * Renders as an absolute-positioned full-screen overlay (no Modal component).
 * This avoids Android Modal rendering issues entirely.
 * Place this component outside ScrollView / KeyboardAvoidingView inside the root SafeAreaView.
 */
const GenderModal = ({
  showGenderModal,
  setShowGenderModal,
  formData,
  setFormData,
}) => {
  if (!showGenderModal) return null;

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        elevation: 9999,
        justifyContent: 'flex-end',
      }}
    >
      {/* Dark backdrop — tapping it closes the sheet */}
      <Pressable
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
        onPress={() => setShowGenderModal(false)}
      />

      {/* Bottom sheet */}
      <View
        style={{
          backgroundColor: '#ffffff',
          borderTopLeftRadius: 28,
          borderTopRightRadius: 28,
          paddingTop: 12,
          paddingBottom: 40,
          paddingHorizontal: 24,
          zIndex: 10000,
          elevation: 10000,
        }}
      >
        {/* Handle bar */}
        <View
          style={{
            width: 40,
            height: 4,
            backgroundColor: '#e5e7eb',
            borderRadius: 4,
            alignSelf: 'center',
            marginBottom: 20,
          }}
        />

        {/* Title */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <View
            style={{
              backgroundColor: '#eef2ff',
              width: 36,
              height: 36,
              borderRadius: 12,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 12,
            }}
          >
            <Users size={20} color="#6366f1" />
          </View>
          <Text style={{ color: '#111827', fontSize: 18, fontWeight: '800' }}>
            Select Gender
          </Text>
        </View>

        {/* Options */}
        {GENDER_OPTIONS.map(option => {
          const isSelected = formData?.gender === option.value;
          return (
            <TouchableOpacity
              key={option.value}
              activeOpacity={0.75}
              onPress={() => {
                setFormData({ ...formData, gender: option.value });
                setShowGenderModal(false);
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 16,
                padding: 16,
                marginBottom: 10,
                borderWidth: 2,
                backgroundColor: isSelected ? '#eef2ff' : '#f9fafb',
                borderColor: isSelected ? '#6366f1' : '#e5e7eb',
              }}
            >
              <Text style={{ fontSize: 28, marginRight: 14 }}>
                {option.emoji}
              </Text>
              <Text
                style={{
                  flex: 1,
                  fontSize: 16,
                  fontWeight: '700',
                  color: isSelected ? '#3730a3' : '#374151',
                }}
              >
                {option.label}
              </Text>
              {isSelected && (
                <View
                  style={{
                    backgroundColor: '#6366f1',
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Check size={14} color="#fff" />
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default GenderModal;
