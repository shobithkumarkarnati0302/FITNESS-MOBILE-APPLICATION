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
  Star,
} from 'lucide-react-native';
import SubscriptionBar from '../components/SubscriptionBar';
import { rf, hs, vs, wp, isTablet } from '../utils/responsive';

const StatCard = ({ icon: Icon, label, value, unit, iconBg, iconColor }) => (
  <View
    style={{
      flex: 1,
      margin: hs(6),
      backgroundColor: '#ffffff',
      borderRadius: hs(18),
      padding: hs(14),
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#f3f4f6',
    }}
  >
    <View
      style={{
        width: hs(40),
        height: hs(40),
        borderRadius: hs(12),
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: vs(6),
        backgroundColor: iconBg,
      }}
    >
      <Icon size={hs(20)} color={iconColor} />
    </View>
    <Text
      style={{
        color: '#9ca3af',
        fontSize: rf(11),
        fontWeight: '600',
        marginBottom: vs(2),
      }}
    >
      {label}
    </Text>
    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
      <Text style={{ color: '#111827', fontSize: rf(18), fontWeight: '800' }}>
        {value || '--'}
      </Text>
      {unit && (
        <Text style={{ color: '#9ca3af', fontSize: rf(11), marginLeft: 2 }}>
          {unit}
        </Text>
      )}
    </View>
  </View>
);

const ProfileScreen = ({ navigation }) => {
  const { logout, user } = useAuth();

  const avatarSize = isTablet ? hs(100) : hs(80);
  const hPad = wp(isTablet ? 10 : 4);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="light-content" backgroundColor="#6366f1" />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Top Banner */}
        <View
          style={{
            backgroundColor: '#6366f1',
            paddingHorizontal: hs(24),
            paddingTop: vs(20),
            paddingBottom: vs(48),
            alignItems: 'center',
          }}
        >
          <View
            style={{
              width: avatarSize,
              height: avatarSize,
              borderRadius: avatarSize / 2,
              backgroundColor: 'rgba(255,255,255,0.2)',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 2,
              borderColor: 'rgba(255,255,255,0.4)',
              marginBottom: vs(10),
            }}
          >
            <User size={hs(40)} color="#ffffff" />
          </View>
          <Text
            style={{ color: '#ffffff', fontSize: rf(20), fontWeight: '900' }}
          >
            {user?.name || 'User'}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: vs(4),
            }}
          >
            <Mail size={hs(13)} color="rgba(255,255,255,0.6)" />
            <Text
              style={{
                color: 'rgba(255,255,255,0.65)',
                fontSize: rf(12),
                marginLeft: hs(4),
              }}
            >
              {user?.email}
            </Text>
          </View>
        </View>

        {/* Content */}
        <View style={{ marginTop: -vs(24), paddingHorizontal: hPad }}>
          {/* Stats Card */}
          <View
            style={{
              backgroundColor: '#ffffff',
              borderRadius: hs(24),
              padding: hs(14),
              marginBottom: vs(12),
              borderWidth: 1,
              borderColor: '#f3f4f6',
            }}
          >
            <Text
              style={{
                color: '#111827',
                fontWeight: '800',
                fontSize: rf(15),
                marginBottom: vs(8),
                marginLeft: hs(4),
              }}
            >
              Physical Stats
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <StatCard
                icon={Calendar}
                label="Age"
                value={user?.age}
                unit="yrs"
                iconBg="#eef2ff"
                iconColor="#6366f1"
              />
              <StatCard
                icon={Users}
                label="Gender"
                value={user?.gender}
                iconBg="#f5f3ff"
                iconColor="#8b5cf6"
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <StatCard
                icon={Ruler}
                label="Height"
                value={user?.height}
                unit="cm"
                iconBg="#ecfeff"
                iconColor="#06b6d4"
              />
              <StatCard
                icon={Weight}
                label="Weight"
                value={user?.weight}
                unit="kg"
                iconBg="#ecfdf5"
                iconColor="#10b981"
              />
            </View>
          </View>

          {/* Subscription */}
          <View
            style={{
              backgroundColor: '#ffffff',
              borderRadius: hs(24),
              padding: hs(14),
              marginBottom: vs(12),
              borderWidth: 1,
              borderColor: '#f3f4f6',
            }}
          >
            <Text
              style={{
                color: '#111827',
                fontWeight: '800',
                fontSize: rf(15),
                marginBottom: vs(10),
                marginLeft: hs(4),
              }}
            >
              Subscription
            </Text>
            <SubscriptionBar />
          </View>

          {/* Account Menu */}
          <View style = {{ backgroundColor: '#ffffff',borderRadius: hs(24),padding: hs(14),marginBottom: vs(20),borderWidth: 1,borderColor: '#f3f4f6',}}>
            <Text style = {{color: '#111827',fontWeight: '800',fontSize: rf(15),marginBottom: vs(10),marginLeft: hs(4),}}>
              Account
            </Text>

            {/* <TouchableOpacity onPress={() => navigation.navigate('FavoriteWorkouts')}
              style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fffacd',borderRadius: hs(16),padding: hs(12),marginBottom: vs(10),borderWidth: 1,borderColor: '#e0e7ff',}}
            >
              <View style = {{backgroundColor: '#FFD700',width: hs(40),height: hs(40),borderRadius: hs(12),alignItems: 'center',justifyContent: 'center',marginRight: hs(12),}}>
              <Star size  = {hs(18)} color = "#ffffff" />
              </View>
              <Text style={{ flex: 1,color: '#ffd700',fontSize: rf(13),fontWeight: '700',}}>
                Favourites Workouts
              </Text>
              <ChevronRight size={hs(18)} color="#ffd700" />
            </TouchableOpacity> */}

            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfile')}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#eef2ff',
                borderRadius: hs(16),
                padding: hs(12),
                marginBottom: vs(10),
                borderWidth: 1,
                borderColor: '#e0e7ff',
              }}
            >
              <View
                style={{
                  backgroundColor: '#6366f1',
                  width: hs(40),
                  height: hs(40),
                  borderRadius: hs(12),
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: hs(12),
                }}
              >
                <Edit3 size={hs(18)} color="#fff" />
              </View>
              <Text
                style={{
                  flex: 1,
                  color: '#3730a3',
                  fontSize: rf(13),
                  fontWeight: '700',
                }}
              >
                Edit Profile
              </Text>
              <ChevronRight size={hs(18)} color="#a78bfa" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={logout}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#fef2f2',
                borderRadius: hs(16),
                padding: hs(12),
                borderWidth: 1,
                borderColor: '#fee2e2',
              }}
            >
              <View
                style={{
                  backgroundColor: '#ef4444',
                  width: hs(40),
                  height: hs(40),
                  borderRadius: hs(12),
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: hs(12),
                }}
              >
                <LogOut size={hs(18)} color="#fff" />
              </View>
              <Text
                style={{
                  flex: 1,
                  color: '#b91c1c',
                  fontSize: rf(13),
                  fontWeight: '700',
                }}
              >
                Logout
              </Text>
              <ChevronRight size={hs(18)} color="#fca5a5" />
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <Text
            style={{
              color: '#9ca3af',
              fontSize: rf(11),
              fontWeight: '600',
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              textAlign: 'center',
              paddingBottom: vs(16),
            }}
          >
            Fitness App ·{' '}
            <Text style={{ color: '#818cf8' }}>Shobith Kumar</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
