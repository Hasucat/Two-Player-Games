// src/screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing icon
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
    <View style={styles.container}>
      <TouchableOpacity style={styles.settingsIcon} onPress={toggleModal}>
        <Icon name="settings-outline" size={30} color="#333" />
      </TouchableOpacity>

      <Text style={styles.title}>Welcome to Two Player Games</Text>
      <Button
        title="Play Tic Tac Toe"
        onPress={() => navigation.navigate('TicTacToe')}
      />

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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  settingsIcon: {
    position: 'absolute',
    top: 20,
    left: 10,
    padding: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
