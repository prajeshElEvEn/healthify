import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import PodcastScreen from './screens/PodcastScreen';
import BlogScreen from './screens/BlogScreen';
import DiseaseScreen from './screens/DiseaseScreen';
import NgoScreen from './screens/NgoScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Podcast" component={PodcastScreen} />
        <Stack.Screen name="Blog" component={BlogScreen} />
        <Stack.Screen name="Disease" component={DiseaseScreen} />
        <Stack.Screen name="Ngo" component={NgoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
