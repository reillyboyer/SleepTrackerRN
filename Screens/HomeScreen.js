import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View style={styles.scrollItem}>
          <Text style={styles.scrollText}>Nap Rec</Text>
        </View>
        <View style={styles.scrollItem}>
          <Text style={styles.scrollText}>Nap Rec</Text>
        </View>
        <View style={styles.scrollItem}>
          <Text style={styles.scrollText}>Nap Rec</Text>
        </View>
      </ScrollView>

      <ScrollView horizontal={true}>
        <View style={styles.scrollItem}>
          <Text style={styles.scrollText}>Downstate Rec</Text>
        </View>
        <View style={styles.scrollItem}>
          <Text style={styles.scrollText}>Downstate Rec</Text>
        </View>
        <View style={styles.scrollItem}>
          <Text style={styles.scrollText}>Downstate Rec</Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Scheduling</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  scrollItem: {
    backgroundColor: '#cccccc',
    height: 80,
    width: 100,
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#cc0000',
    height: 50,
    width: '80%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default HomeScreen;
