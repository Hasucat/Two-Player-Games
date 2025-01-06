// src/screens/HomeScreen.js
import React, { useState } from 'react';
import { ScrollView, View, Text, Button, TouchableOpacity, StyleSheet ,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing icon
import { Ionicons } from '@expo/vector-icons';
import Settings from './Settings'; // Import the new Settings component

const HomeScreen = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [volume, setVolume] = useState(50); // Default volume: 50
  const [resolution, setResolution] = useState(1080); // Default resolution: 1080p
  const [fps, setFps] = useState(30); // Default FPS: 30

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      
      <View style={styles.header}>
        {/* Left Icon */}
      
        <TouchableOpacity style={styles.settingsIcon} onPress={toggleModal}>
        <Icon name="settings-outline" size={35} color="#5c2051" />
      </TouchableOpacity>

        {/* Center Text */}
        <View style={styles.textBar}>
    <Text style={styles.title}>Two Player Games</Text>
  </View>

        <TouchableOpacity onPress={() => alert('Personal Detail')}>
          <Ionicons name="person" size={35} color="#21cf49" />
        </TouchableOpacity>

      </View>


      <View style={styles.iconRow}>
      {/* Card 1 */}
      <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('TicTacToe')}>
            <ImageBackground source={require('../../assets/Tic Tac Toe.jpeg')} style={styles.cardImage} resizeMode="cover">
            </ImageBackground>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Connect 4')}>
            <ImageBackground source={require('../../assets/Tic Tac Toe.jpeg')} style={styles.cardImage} resizeMode="cover">
            </ImageBackground>
          </TouchableOpacity>
     </View>
     <View style={styles.iconRow}>
      {/* Card 1 */}
      <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('SlidingPuzzle')}>
            <ImageBackground source={require('../../assets/Tic Tac Toe.jpeg')} style={styles.cardImage} resizeMode="cover">
            </ImageBackground>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('TicTacToe')}>
            <ImageBackground source={require('../../assets/Tic Tac Toe.jpeg')} style={styles.cardImage} resizeMode="cover">
            </ImageBackground>
          </TouchableOpacity>
     </View>
     <View style={styles.iconRow}>
      {/* Card 1 */}
      <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('TicTacToe')}>
            <ImageBackground source={require('../../assets/Tic Tac Toe.jpeg')} style={styles.cardImage} resizeMode="cover">
            </ImageBackground>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('TicTacToe')}>
            <ImageBackground source={require('../../assets/Tic Tac Toe.jpeg')} style={styles.cardImage} resizeMode="cover">
            </ImageBackground>
          </TouchableOpacity>
     </View>
         

      {/* Pass necessary props to Settings component */}
      <Settings
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        volume={volume}
        setVolume={setVolume}
        resolution={resolution}
        setResolution={setResolution}
        fps={fps}
        setFps={setFps}
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 0, // Remove any default padding
    margin: 0, 
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f2dc',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    height: 60,
    backgroundColor: '#f0f2dc',
    marginTop: 10
  },
  
  settingsIcon: {
    flex: 0.2, // Assign 20% of the header space to the settings icon
    alignItems: 'flex-start', // Align to the left
  },

  textBar: {
    flex: 1, // Allow the text bar to take the remaining space
    backgroundColor: '#a46cb8', // Bar background color
    borderRadius: 8, // Rounded corners
    paddingVertical: 3, // Vertical padding for the bar
    paddingHorizontal: 14, // Horizontal padding for the bar
    marginHorizontal: 10, // Space between the text bar and icons
    alignItems: 'center', // Center the text inside the bar
  },
  
  notificationIcon: {
    flex: 0.2, // Assign 20% of the header space to the notification icon
    alignItems: 'flex-end', // Align to the right
  },

  title: {
    flex: 0.8, 
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', 
   marginTop: 4
  },
  gameButton: {
    marginTop: 20,
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 8,
  },
  gameText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allows wrapping to next line
    justifyContent: 'space-between', // Space between cards
    paddingHorizontal: 10, // Adds padding around cards
    marginTop: 20,
  },
  card: {
    width: '40%', // 3 cards per row
    height: 150,  // Adjust as needed
    marginBottom: 20,
    marginTop: 13,
    borderRadius: 20,
    borderWidth: 4,   // Set the border width
    borderColor: '#000', // Set the border color
    overflow: 'hidden',
    padding: 0,
    marginHorizontal:8,
  },
  cardImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // 3 cards per row
    height: "100%",  // Adjust as needed
  },
  iconRow: {
    flexDirection: 'row', // Arrange icons in a row
    justifyContent: 'space-between',
    marginBottom: -2, // Space between rows
  },
  left: {
    width: '40%', // 3 cards per row
    height: 150,  // Adjust as needed
    backgroundcolor: "#6200EE",
    overflow: 'hidden',
  },
  
right: {
    width: '40%', // 3 cards per row
    height: 150,  // Adjust as needed
    backgroundcolor: "#6200EE",
    overflow: 'hidden',
  },
  
  centre: {
    width: '40%', // 3 cards per row
    height: 150,  // Adjust as needed
    backgroundcolor: "#6200EE",
    overflow: 'hidden',
  },
});

export default HomeScreen;
