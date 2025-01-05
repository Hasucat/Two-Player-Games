// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://example.com/your-image.png' }}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to Two Player Games</Text>
      <Text style={styles.subtitle}>Choose a game to start playing!</Text>
      <Button
        title="Play Tic Tac Toe"
        onPress={() => navigation.navigate('TicTacToe')}
        color="#4CAF50"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    paddingHorizontal: 20, 
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30, 
    borderRadius: 75,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#777',
    marginBottom: 20,
  },
});

export default HomeScreen;
