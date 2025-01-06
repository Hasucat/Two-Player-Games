import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const SlidingPuzzle = () => {
  const SIZE = 4; // 4x4 grid
  const [board, setBoard] = useState([]);
  const [emptyTile, setEmptyTile] = useState([SIZE - 1, SIZE - 1]);
  const [turns, setTurns] = useState(0);
  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);

  useEffect(() => {
    initializeBoard();
    return () => stopTimer();
  }, []);

  const initializeBoard = () => {
    const tiles = Array.from({ length: SIZE * SIZE - 1 }, (_, i) => i + 1);
    tiles.push(null); // The empty tile

    let shuffledTiles;
    do {
      shuffledTiles = shuffle([...tiles]);
    } while (!isSolvable(shuffledTiles));

    setBoard(chunkArray(shuffledTiles, SIZE));
    setEmptyTile([SIZE - 1, SIZE - 1]);
    setTurns(0);
    setTime(0);
    setTimerRunning(false);
    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
  };

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const isSolvable = (tiles) => {
    const flatTiles = tiles.filter((tile) => tile !== null);
    let inversions = 0;

    for (let i = 0; i < flatTiles.length; i++) {
      for (let j = i + 1; j < flatTiles.length; j++) {
        if (flatTiles[i] > flatTiles[j]) inversions++;
      }
    }

    const emptyRowFromBottom = SIZE - Math.floor(tiles.indexOf(null) / SIZE);
    return (SIZE % 2 === 0)
      ? (inversions % 2 === 0) === (emptyRowFromBottom % 2 === 0)
      : inversions % 2 === 0;
  };

  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const moveTile = (row, col) => {
    const [emptyRow, emptyCol] = emptyTile;
    const isAdjacent =
      (row === emptyRow && Math.abs(col - emptyCol) === 1) ||
      (col === emptyCol && Math.abs(row - emptyRow) === 1);

    if (isAdjacent) {
      if (!timerRunning) startTimer();

      const newBoard = board.map((r) => [...r]);
      newBoard[emptyRow][emptyCol] = newBoard[row][col];
      newBoard[row][col] = null;
      setBoard(newBoard);
      setEmptyTile([row, col]);
      setTurns(turns + 1);

      if (isSolved(newBoard)) {
        stopTimer();
        Alert.alert("Congratulations!", `You solved the puzzle in ${turns + 1} turns and ${time} seconds!`, [
          { text: "Play Again", onPress: initializeBoard }
        ]);
      }
    }
  };

  const isSolved = (board) => {
    const flatBoard = board.flat();
    for (let i = 0; i < flatBoard.length - 1; i++) {
      if (flatBoard[i] !== i + 1) return false;
    }
    return true;
  };

  const startTimer = () => {
    setTimerRunning(true);
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    setTimerInterval(interval);
  };

  const stopTimer = () => {
    setTimerRunning(false);
    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sliding Puzzle</Text>
      <Text style={styles.info}>Turns: {turns} | Time: {time}s</Text>
      <View style={styles.board}>
        {board.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((tile, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                style={[
                  styles.tile,
                  tile === null ? styles.emptyTile : {},
                ]}
                onPress={() => moveTile(rowIndex, colIndex)}
              >
                {tile !== null && <Text style={styles.tileText}>{tile}</Text>}
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={initializeBoard}>
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>
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
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 20,
  },
  board: {
    width: 300,
    height: 300,
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  tile: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  emptyTile: {
    backgroundColor: '#ccc',
  },
  tileText: {
    fontSize: 18,
    fontWeight: 'bold',
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
});

export default SlidingPuzzle;
