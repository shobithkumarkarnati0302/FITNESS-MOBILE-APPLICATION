import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { ChevronRight } from 'lucide-react-native';
import { rf, hs, vs, wp, isTablet } from '../utils/responsive';

const MuscleCard = ({ item, navigation, numCols = 2 }) => {

  const totalHPad = wp(isTablet ? 4 : 3) * 2;
  const gap       = hs(6) * (numCols - 1);
  const cardWidth = (wp(100) - totalHPad - gap) / numCols;

  return (
    <View style={{ width: cardWidth,marginBottom: vs(10),marginHorizontal: hs(3),}}>
      <TouchableOpacity style={{ borderRadius: hs(20), overflow: 'hidden', aspectRatio: 4 / 5 }} activeOpacity={0.85}
        onPress={() => navigation.navigate('WorkoutList', { muscleGroup: item.name })}
      >
        {/* Background Image */}
        <Image source={item.image} style={{ position: 'absolute', width: '100%', height: '100%' }} resizeMode="cover"/>

        {/* Dark overlay */}
        <View style={{ position: 'absolute', top: 0,left: 0,right: 0,bottom: 0,backgroundColor: 'rgba(0,0,0,0.35)',}}/>

        {/* Content */}
        <View style={{ flex: 1, justifyContent: 'flex-end', padding: hs(10) }}>
          <Text style={{ color: '#ffffff',fontSize: rf(11),fontWeight: '800',textTransform: 'uppercase',letterSpacing: 1,marginBottom: vs(4),}}>
            {item.name.replace(/_/g, ' ')}
          </Text>
          <View style = {{flexDirection: 'row',alignItems: 'center',alignSelf: 'flex-start',backgroundColor: '#6366f1',borderRadius: hs(20),paddingHorizontal: hs(8),paddingVertical: vs(3),}}>
          <Text style = {{ color: '#ffffff', fontSize: rf(10), fontWeight: '700' }}>
              Explore
            </Text>
            <ChevronRight size={hs(11)} color="#fff" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MuscleCard;
