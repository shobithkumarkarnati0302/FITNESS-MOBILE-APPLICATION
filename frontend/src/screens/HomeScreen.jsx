import { View, Text,FlatList,TextInput, TouchableOpacity,} from 'react-native';
import { SafeAreaView,useSafeAreaInsets,} from 'react-native-safe-area-context';
import { useAuth } from '../context/AuthContext';
import muscles_groups from '../constants/muscles';
import MuscleCard from '../components/MuscleCard';
import { Dumbbell, Search } from 'lucide-react-native';
import { rf, hs, vs, wp, isTablet } from '../utils/responsive';
import { useState,useEffect } from 'react';

const HomeScreen = ({ navigation }) => {
  const { user } = useAuth();
  const insets = useSafeAreaInsets();

  const numCols = isTablet ? 3 : 2;
  const hPad = wp(isTablet ? 4 : 3);

  const [search, setSearch]             = useState('');
  const [filteredData, setFilteredData] = useState([]);
  
  useEffect(() => {
    setFilteredData(muscles_groups);
  }, []);

  const handleSearch = (e) => {
    // if(e === "")setFilteredData(muscles_groups);
    setSearch(e);
    const res = muscles_groups.filter(item => item.name.includes(e.toLowerCase()));
    setFilteredData(res);
  };

  // const showSearch = () => {
  //   if(filteredData.length > 0){
  //     return (
  //       <FlatList
  //       data       = {filteredData}
  //       numColumns = {numCols}
  //       renderItem = {({ item }) => (
  //           <MuscleCard item={item} navigation={navigation} numCols={numCols} />
  //       )}
  //     />
  //   );
  //   }else{
  //     return null;
  //   }
  // };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <FlatList
        data={filteredData}
        numColumns={numCols}
        key={numCols}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingHorizontal: hPad,
        }}
        contentContainerStyle={{ paddingBottom: vs(8) }}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            {/* Header */}
            <View
              // className = 'rounded-lg bg-[#6366f1] p-4 w-[95%] mx-4'
              style = {{backgroundColor: '#6366f1',paddingHorizontal: hs(24),paddingTop: vs(16),paddingBottom: vs(20),height: vs(100)}}
            >
              <View
                style={{
                  flexDirection : 'row',
                  alignItems    : 'center',
                  justifyContent: 'space-between',
                  marginBottom  : vs(4),
                  paddingTop    : vs(12),
                }}
              >
                <View>
                  <Text
                    style={{
                      color     : '#ffffff',
                      fontSize  : rf(13),
                      fontWeight: '700',
                    }}
                  >
                    Let's Train 💪
                  </Text>
                  <Text
                    style={{
                      color: '#ffffff',
                      fontSize: rf(22),
                      fontWeight: '800',
                      textTransform: 'capitalize',
                      marginTop: vs(2),
                    }}
                  >
                    {user?.name || 'Athlete'}
                  </Text>
                </View>
                <View
                  style={{
                    width: hs(48),
                    height: hs(48),
                    borderRadius: hs(14),
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                  }}
                >
                  <Dumbbell size={hs(24)} color="#ffffff" />
                </View>
              </View>
            </View>

            {/* Search Bar */}
            <View className="p-4 flex flex-row gap-3 mb-5">
              <TextInput
                placeholderTextColor = "#6b7280"
                placeholder = "Search by any Muscle Category"
                className = "p-2 pl-4 border-[2px] border-[#6366f1] w-full rounded-lg"
                value = {search}
                onChangeText = {handleSearch}
              />
              {/* <TouchableOpacity
                className = "p-2 bg-[#6366f1] rounded-lg items-center justify-center"
                onPress   = {handleSearch}
                disabled  = {true}
                // onPress   = {()=>{handleSearch(search)}}
              >
                <Search color="#ffffff" />
              </TouchableOpacity> */}
            </View>

            {/* <View className="p-4">
              <Text>{showSearch()}</Text>
            </View> */}

            {/* <View style={{
                paddingHorizontal: hPad,
                marginTop: vs(20),
                marginBottom: vs(10),
              }}
            >
              <Text
                style={{
                  color: '#111827',
                  fontSize: rf(20),
                  fontWeight: '800',
                }}
              >
                Choose Muscle Group
              </Text>
              <Text
                style={{ color: '#374151', fontSize: rf(13), marginTop: vs(2) }}
              >
                Tap a category to load exercises
              </Text>
            </View> */}
          </>
        }
        renderItem={({ item }) => (
          <MuscleCard item={item} navigation={navigation} numCols={numCols} />
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
