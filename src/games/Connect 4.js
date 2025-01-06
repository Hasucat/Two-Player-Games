import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const ROWS = 6;
const COLS = 7;

const Connect4 = () => {
  const [board, setBoard] = useState(Array(ROWS).fill(null).map(() => Array(COLS).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState('Red');
  const [winner, setWinner] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const checkWinner = (board) => {
    const checkLine = (a, b, c, d) => a && a === b && a === c && a === d;

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        if (
          col + 3 < COLS &&
          checkLine(board[row][col], board[row][col + 1], board[row][col + 2], board[row][col + 3])
        ) {
          return board[row][col];
        }

        if (
          row + 3 < ROWS &&
          checkLine(board[row][col], board[row + 1][col], board[row + 2][col], board[row + 3][col])
        ) {
          return board[row][col];
        }

        if (
          row + 3 < ROWS &&
          col + 3 < COLS &&
          checkLine(board[row][col], board[row + 1][col + 1], board[row + 2][col + 2], board[row + 3][col + 3])
        ) {
          return board[row][col];
        }

        if (
          row + 3 < ROWS &&
          col - 3 >= 0 &&
          checkLine(board[row][col], board[row + 1][col - 1], board[row + 2][col - 2], board[row + 3][col - 3])
        ) {
          return board[row][col];
        }
      }
    }

    return null;
  };

  const dropDisc = (col) => {
    if (winner) return;

    for (let row = ROWS - 1; row >= 0; row--) {
      if (!board[row][col]) {
        const newBoard = board.map((rowArr) => [...rowArr]);
        newBoard[row][col] = currentPlayer;
        setBoard(newBoard);

        const potentialWinner = checkWinner(newBoard);
        if (potentialWinner) {
          setWinner(potentialWinner);
          setModalVisible(true);
          setTimeout(() => resetGame(), 3000); // Reset game after 3 seconds
        } else {
          setCurrentPlayer(currentPlayer === 'Red' ? 'Yellow' : 'Red');
        }

        return;
      }
    }
  };

  const resetGame = () => {
    setBoard(Array(ROWS).fill(null).map(() => Array(COLS).fill(null)));
    setCurrentPlayer('Red');
    setWinner(null);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connect 4</Text>

      {!winner && <Text style={styles.turnText}>{currentPlayer}'s Turn</Text>}

      <View style={styles.board}>
        {board.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                style={[styles.cell, { backgroundColor: cell === 'Red' ? 'red' : cell === 'Yellow' ? 'yellow' : 'white' }]}
                onPress={() => dropDisc(colIndex)}
              />
            ))}
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
        <Text style={styles.resetText}>Reset Game</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{winner} Wins!</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f2dc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  turnText: {
    fontSize: 18,
    marginBottom: 10,
  },
  board: {
    width: '90%',
    aspectRatio: COLS / ROWS,
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    margin: 2,
    borderRadius: 50,
  },
  resetButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#6200EE',
    borderRadius: 5,
  },
  resetText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default Connect4;
