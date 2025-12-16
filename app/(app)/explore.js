import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore</Text>
        <Text style={styles.subtitle}>Find safety information in your area</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Reports</Text>
        
        <View style={styles.card}>
          <View style={[styles.statusIndicator, { backgroundColor: '#f97316' }]} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Suspicious Activity</Text>
            <Text style={styles.cardLocation}>Lekki Phase 1 • 15 min ago</Text>
            <Text style={styles.cardDescription}>Unmarked van circling the neighborhood for over an hour</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={[styles.statusIndicator, { backgroundColor: '#22c55e' }]} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Police Patrol</Text>
            <Text style={styles.cardLocation}>Victoria Island • 30 min ago</Text>
            <Text style={styles.cardDescription}>Increased police presence on Ahmadu Bello Way</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={[styles.statusIndicator, { backgroundColor: '#ef4444' }]} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Road Accident</Text>
            <Text style={styles.cardLocation}>Third Mainland Bridge • 1 hour ago</Text>
            <Text style={styles.cardDescription}>Multiple vehicle collision causing heavy traffic</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Safety Tips</Text>
        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>Emergency Numbers</Text>
          <Text style={styles.tipText}>Police: 112, 911{"\n"}Fire Service: 112{"\n"}Ambulance: 112, 767</Text>
        </View>
        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>Travel Advisory</Text>
          <Text style={styles.tipText}>Avoid traveling alone at night in poorly lit areas. Always share your location with trusted contacts.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#1e293b',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statusIndicator: {
    width: 8,
    borderRadius: 4,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 4,
  },
  cardLocation: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },
  tipCard: {
    backgroundColor: '#e0f2fe',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0369a1',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    color: '#0c4a6e',
    lineHeight: 20,
  },
});