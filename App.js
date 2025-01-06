// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import TicTacToe from './src/games/TicTacToe';
import Connect4 from './src/games/Connect 4';
import SlidingPuzzle from './src/games/SlidingPuzzle';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TicTacToe" component={TicTacToe} />
        <Stack.Screen name="Connect 4" component={Connect4} />
        <Stack.Screen name="SlidingPuzzle" component={SlidingPuzzle} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
