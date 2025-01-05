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
            onValueChange={setVolume}
          />
          <Text style={styles.modalLabel}>Resolution: {resolution}p</Text>
          <Slider
            style={styles.slider}
            minimumValue={720}
            maximumValue={2160}
            step={360}
            value={resolution}
            onValueChange={setResolution}
          />
          <Text style={styles.modalLabel}>FPS: {fps}</Text>
          <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={60}
            step={1}
            value={fps}
            onValueChange={setFps}
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
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalLabel: {
    fontSize: 18,
    marginVertical: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Settings;
