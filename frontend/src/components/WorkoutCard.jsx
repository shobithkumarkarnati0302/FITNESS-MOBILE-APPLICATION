import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ChevronRight, Star } from 'lucide-react-native';
import { rf, hs, vs } from '../utils/responsive';
import { useFavourites } from '../context/FavoriteContext';

const diffClass = {
  beginner: {
    borderColor: '#22c55e',
    badgeBg: '#dcfce7',
    badgeBorder: '#bbf7d0',
    textColor: '#15803d',
  },
  intermediate: {
    borderColor: '#f59e0b',
    badgeBg: '#fef9c3',
    badgeBorder: '#fde68a',
    textColor: '#b45309',
  },
  expert: {
    borderColor: '#ef4444',
    badgeBg: '#fee2e2',
    badgeBorder: '#fecaca',
    textColor: '#b91c1c',
  },
};

const WorkoutCard = ({ item, navigation }) => {
  const diff = diffClass[item.difficulty] || diffClass.beginner;
  const { isFavourite, toggleFavourite } = useFavourites();
  const fav = isFavourite(item.name);

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={{
        backgroundColor: '#ffffff',
        borderRadius   : hs(20),
        marginBottom   : vs(12),
        marginTop      : vs(4),
        padding        : hs(14),
        borderWidth    : 1,
        borderColor    : '#e5e7eb',
        borderLeftWidth: hs(4),
        borderLeftColor: diff.borderColor,
        shadowColor    : '#000',
        shadowOffset   : { width: 0, height: 2 },
        shadowOpacity  : 0.07,
        shadowRadius   : 6,
        elevation      : 3,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'stretch' }}>
        {/* Left column */}
        <View style={{ flex: 1, marginRight: hs(10) }}>
          {/* Exercise Name */}
          <Text
            style={{
              fontSize: rf(15),
              fontWeight: '800',
              color: '#111827',
              marginBottom: vs(8),
            }}
            numberOfLines={2}
          >
            {item.name}
          </Text>

          {/* Badges row */}
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: hs(5),
              alignItems: 'center',
            }}
          >
            {/* Type */}
            <View
              style={{
                backgroundColor: '#eef2ff',
                paddingHorizontal: hs(8),
                paddingVertical: vs(3),
                borderRadius: hs(8),
              }}
            >
              <Text
                style={{
                  fontSize: rf(11),
                  fontWeight: '600',
                  color: '#4338ca',
                  textTransform: 'capitalize',
                }}
              >
                {item.type ? item.type.replace(/_/g, ' ') : 'Exercise'}
              </Text>
            </View>

            {/* Equipment */}
            {item.equipments && item.equipments.length > 0 && (
              <>
                <Text
                  style={{
                    fontSize: rf(11),
                    fontWeight: '600',
                    color: '#9ca3af',
                  }}
                >
                  Equipments :{' '}
                </Text>
                {item.equipments.slice(0, 10).map((eq, i) => (
                  <View
                    key={i}
                    style={{
                      backgroundColor: '#fff7ed',
                      paddingHorizontal: hs(7),
                      paddingVertical: vs(2),
                      borderRadius: hs(8),
                      borderWidth: 1,
                      borderColor: '#fed7aa',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: rf(10),
                        fontWeight: '600',
                        color: '#c2410c',
                      }}
                    >
                      {eq}
                    </Text>
                  </View>
                ))}
              </>
            )}
          </View>
        </View>

        {/* Right column */}
        <View
          style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}
        >
          {/* Difficulty badge */}
          <View
            style={{
              paddingHorizontal: hs(8),
              paddingVertical: vs(3),
              borderRadius: hs(20),
              backgroundColor: diff.badgeBg,
              borderWidth: 1,
              borderColor: diff.badgeBorder,
            }}
          >
            <Text
              style={{
                fontSize: rf(11),
                fontWeight: '700',
                textTransform: 'capitalize',
                color: diff.textColor,
              }}
            >
              {item.difficulty}
            </Text>
          </View>

          <View style={{ flexDirection: 'row',alignItems: 'center',gap: hs(10),marginTop: vs(10),}}>
            {/* Favourite star button */}
            {/* <TouchableOpacity onPress={() => toggleFavourite(item)} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
              <Star size={hs(20)} color={fav ? '#FFD700' : '#9ca3af'} fill={fav ? '#FFD700' : 'none'} />
            </TouchableOpacity> */}

            {/* Detail button */}
            <TouchableOpacity onPress={() => navigation.navigate('WorkoutDetail', { exercise: item })}
              style={{ backgroundColor: '#facd56',padding: hs(2),borderRadius: hs(10),}}>
              <ChevronRight size={hs(18)} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WorkoutCard;
