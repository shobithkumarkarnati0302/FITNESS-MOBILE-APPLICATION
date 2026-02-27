import { View, Text,FlatList, TextInput } from 'react-native'
import {useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import gymEquipments from '../constants/gymEquipments'
import EquipmentCard from '../components/EquipmentCard'
import { Dumbbell } from 'lucide-react-native'
import { hs, rf, vs, wp } from '../utils/responsive'

const BrowseEquipment = () => {
  const [search, setSearch]             = useState('');
  const [filteredData, setFilteredData] = useState([]);
  
  useEffect(() => {
    setFilteredData(gymEquipments);
  }, []);
  
  const handleSearch = (e) => {
    setSearch(e);
    const res = gymEquipments.filter(item => item.name.toLowerCase().includes(e.toLowerCase()));
    setFilteredData(res);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={filteredData}
        ListHeaderComponent={
          <>
            {/* Header */}
            <View
              style={{
                backgroundColor: '#6366f1',
                marginHorizontal: -wp(4),
                paddingHorizontal: hs(24),
                paddingTop: vs(30),
                paddingBottom: vs(20),
                marginBottom: vs(14),
              }}
              className="flex flex-row items-center justify-center"
            >
              {/* Title */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: vs(16),
                }}
              >
                <View
                  style={{
                    width: hs(40),
                    height: hs(40),
                    borderRadius: hs(12),
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: hs(12),
                  }}
                >
                  <Dumbbell size={hs(20)} color="#fff" />
                </View>
                <View>
                  <Text
                    style={{
                      color: '#ffffff',
                      fontSize: rf(22),
                      fontWeight: '800',
                    }}
                  >
                    Browse Equipments
                  </Text>
                </View>
              </View>
            </View>

            {/* Search Bar */}
            <View className="p-4">
              <TextInput
                placeholderTextColor="#6b7280"
                placeholder="Search by Equipment Name"
                className="p-2 pl-4 border-[2px] border-[#6366f1] w-full rounded-lg"
                value={search}
                onChangeText={handleSearch}
              />
            </View>
          </>
        }
        renderItem={({ item }) => <EquipmentCard item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}

export default BrowseEquipment