// src/games/TicTacToe.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const handlePress = (index) => {
    if (!board[index]) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  return (
    <View style={styles.container}>
      {board.map((cell, index) => (
        <TouchableOpacity
          key={index}
          style={styles.cell}
          onPress={() => handlePress(index)}
        >
          <Text style={styles.cellText}>{cell}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', flexWrap: 'wrap', width: 150 },
  cell: { width: 50, height: 50, borderWidth: 1, alignItems: 'center', justifyContent: 'center' },
  cellText: { fontSize: 24 },
});

export default TicTacToe;
