import { View, Text, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, Star } from 'lucide-react-native';
import { rf, hs, vs, wp, isTablet } from '../utils/responsive';
import { useFavourites } from '../context/FavoriteContext';
import WorkoutCard from '../components/WorkoutCard';

const FavWorkouts = ({ navigation }) => {
  const hPad = wp(isTablet ? 10 : 4);
  const { favourites, clearFavourites } = useFavourites();
  
  const HandleClearFav = () => {
    clearFavourites();
    console.log("Favourites Cleared Successfully")
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f9fafb' }}>
      {/* Header */}
      <View style={{ backgroundColor: '#6366f1',paddingHorizontal: hPad, paddingTop: vs(14),paddingBottom: vs(24),}}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{flexDirection: 'row',alignItems: 'center',alignSelf: 'flex-start',backgroundColor: 'rgba(255,255,255,0.2)',borderRadius: hs(12),paddingHorizontal: hs(12),paddingVertical: vs(6),marginBottom: vs(12),}}>
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
          Your Favourite Workouts
        </Text>
        <Text
          style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: rf(12),
            marginTop: vs(2),
          }}
        >
          {favourites.length} workout{favourites.length !== 1 ? 's' : ''} saved
        </Text>
      </View>

      {favourites.length > 0 && (
        <TouchableOpacity
          onPress={() => {HandleClearFav();}}
          style={{
            backgroundColor: '#ffe5e8',
            alignItems     : 'center',
            justifyContent : 'center',
            padding        : vs(12),
            margin         : vs(12),
            borderRadius   : hs(12),
            borderWidth    : 1.2,
            borderColor    : '#ff4d4f',
            width          : wp(90),
            alignSelf      : 'center',
            marginTop      : vs(20),
          }}
        >
          <Text style={{ color: '#ff4d4f',fontWeight: '700',fontSize: rf(14),letterSpacing: 0.5,}}
          >
            Clear Favourites
          </Text>
        </TouchableOpacity>
      )}

      <FlatList
        data={favourites}
        keyExtractor={item => item.id?.toString() ?? item.name}
        contentContainerStyle={{
          paddingHorizontal: hPad,
          paddingTop: vs(16),
          paddingBottom: vs(32),
        }}
        ListEmptyComponent={
          <View style={{ flex: 1,alignItems: 'center',justifyContent: 'center',paddingHorizontal: hPad,marginTop: vs(160),}}>
            <View style={{
                width: hs(80),
                height: hs(80),
                borderRadius: hs(40),
                backgroundColor: '#fef9c3',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: vs(16),
              }}
            >
              <Star size={hs(40)} color="#FFD700" fill="#FFD700" />
            </View>
            <Text style={{ fontSize: rf(18),fontWeight: '800',color: '#111827',marginBottom: vs(6),}}>
              No favourites yet
            </Text>
            <Text style={{ fontSize: rf(13), color: '#9ca3af',textAlign: 'center',}}>
              Tap the ★ star on any workout to save it here
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}
              style={{ marginTop: vs(20), backgroundColor: '#6366f1', paddingHorizontal: hs(24), paddingVertical: vs(10),borderRadius: hs(14),}}
            >
              <Text style={{ color: '#fff', fontWeight: '700', fontSize: rf(13) }}>
                Browse Workouts
              </Text>
            </TouchableOpacity>
          </View>
        }
        renderItem={({ item }) => (
          <WorkoutCard item={item} navigation={navigation} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default FavWorkouts;
