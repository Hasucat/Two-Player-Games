// src/screens/Settings.js
import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider'; // Updated import

const Settings = ({ isModalVisible, toggleModal, volume, setVolume, resolution, setResolution, fps, setFps }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={toggleModal}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Settings</Text>
          <Text style={styles.modalLabel}>Volume: {volume}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            value={volume}
            onValueChange={(value) => setVolume(Math.round(value))} // Ensure integer value
            />
            <Text style={styles.modalLabel}>Resolution: {Math.round(resolution)}p</Text>
            <Slider
            style={styles.slider}
            minimumValue={720}
            maximumValue={2160}
            step={360}
            value={resolution}
            onValueChange={(value) => setResolution(Math.round(value))} // Ensure integer value
            />
            <Text style={styles.modalLabel}>FPS: {Math.round(fps)}</Text>
            <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={60}
            step={1}
            value={fps}
            onValueChange={(value) => setFps(Math.round(value))} // Ensure integer value
            />
          <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#d1caba',
    borderWidth: 4,   // Set the border width
    borderColor: '#694f17', // Set the border color
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', 
    color: '#694f17',
  },
  modalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#3c3e4d'
  },
  slider: {
    width: '100%',
    height: 40,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#4a3d22',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center', 
  },
});

export default Settings;