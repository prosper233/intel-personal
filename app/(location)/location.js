import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Card, Menu, Provider } from 'react-native-paper';
import * as Notifications from 'expo-notifications';
import { router } from 'expo-router';

const locations = ["Lagos", "Abuja", "Port Harcourt", "Enugu", "Kano"]; // Add more if needed

export default function LocationScreen() {
  const [location, setLocation] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);

  const saveLocation = async () => {
    if (!location) {
      Alert.alert("Pick a location first!");
      return;
    }

    try {
      // Save the location locally
      await AsyncStorage.setItem('userLocation', location);

      // Show confirmation
      Alert.alert("Location saved!", `You will get notifications for ${location}.`);

      // Optional: schedule a test notification
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Location Saved!",
          body: `Notifications enabled for ${location}`,
        },
        trigger: { seconds: 5 },
      });

      // Navigate to Post page after selection
      router.push('/(app)/post'); // Replace with your main post/feed page
    } catch (error) {
      console.log("Error saving location:", error);
      Alert.alert("Error", "Something went wrong. Try again.");
    }
  };

  return (
    <Provider>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Title title="Choose Your Location" />
          <Card.Content>
            <Menu
              visible={menuVisible}
              onDismiss={() => setMenuVisible(false)}
              anchor={
                <Button mode="outlined" onPress={() => setMenuVisible(true)}>
                  {location || "Select Location"}
                </Button>
              }
            >
              {locations.map((loc) => (
                <Menu.Item
                  key={loc}
                  onPress={() => { setLocation(loc); setMenuVisible(false); }}
                  title={loc}
                />
              ))}
            </Menu>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" onPress={saveLocation}>
              Save & Continue
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f2f2f2' },
  card: { width: '90%', padding: 10, elevation: 5 },
});
