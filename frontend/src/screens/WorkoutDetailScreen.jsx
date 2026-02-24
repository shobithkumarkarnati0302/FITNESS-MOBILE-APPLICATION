import { View, Text } from 'react-native';
import WorkOutDetailCard from '../components/WorkOutDetailCard';

const WorkoutDetailScreen = ({ route, navigation }) => {
  const { exercise } = route.params ? route.params : {};

  if (!exercise) {
    return (
      <View>
        <Text>No exercise found</Text>
      </View>
    );
  }

  return <WorkOutDetailCard exercise={exercise} navigation={navigation} />;
};

export default WorkoutDetailScreen;
