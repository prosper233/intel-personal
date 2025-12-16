import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Modal,
} from 'react-native';
import { Menu, Bell, Search, Plus, User } from 'lucide-react-native';
import { NIGERIAN_STATES } from '../../src/constants/states';

export default function PostScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('post');
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [showPostModal, setShowPostModal] = useState(false);

  const filteredStates = NIGERIAN_STATES.filter(state =>
    state.toLowerCase().includes(searchLocation.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Menu size={24} color="#334155" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Bell size={26} color="#334155" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search size={22} color="#9ca3af" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search location"
            value={searchLocation}
            onChangeText={setSearchLocation}
          />
        </View>
      </View>

      {/* POST/MAP Toggle */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, activeTab === 'post' && styles.activeToggle]}
          onPress={() => setActiveTab('post')}
        >
          <Text style={[styles.toggleText, activeTab === 'post' && styles.activeToggleText]}>
            POST
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, activeTab === 'map' && styles.activeToggle]}
          onPress={() => setActiveTab('map')}
        >
          <Text style={[styles.toggleText, activeTab === 'map' && styles.activeToggleText]}>
            MAP
          </Text>
        </TouchableOpacity>
      </View>

      {/* States List */}
      <ScrollView style={styles.statesList} contentContainerStyle={styles.statesListContent}>
        {filteredStates.map((state) => (
          <TouchableOpacity
            key={state}
            style={[styles.stateButton, selectedState === state && styles.selectedState]}
            onPress={() => setSelectedState(state)}
          >
            <Text style={[styles.stateText, selectedState === state && styles.selectedStateText]}>
              {state}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Post Location Button */}
      <View style={styles.postButtonContainer}>
        <TouchableOpacity
          style={[styles.postButton, !selectedState && styles.postButtonDisabled]}
          onPress={() => setShowPostModal(true)}
          disabled={!selectedState}
        >
          <Text style={styles.postButtonText}>POST LOCATION</Text>
        </TouchableOpacity>
      </View>

    
      {/* Post Modal */}
      <Modal
        visible={showPostModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowPostModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Post Intel</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowPostModal(false)}
            >
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
            {/* Add form fields here */}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  iconButton: {
    padding: 8,
  },
  searchContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 16,
    color: '#374151',
  },
  toggleContainer: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
  },
  activeToggle: {
    backgroundColor: '#334155',
  },
  toggleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6b7280',
  },
  activeToggleText: {
    color: '#fff',
  },
  statesList: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  statesListContent: {
    paddingVertical: 12,
    gap: 10,
  },
  stateButton: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
  },
  selectedState: {
    backgroundColor: '#3b82f6',
  },
  stateText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
  },
  selectedStateText: {
    color: '#fff',
  },
  postButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  postButton: {
    backgroundColor: '#ef4444',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  postButtonDisabled: {
    backgroundColor: '#d1d5db',
  },
  postButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 32,
    backgroundColor: '#334155',
  },
  navDot: {
    width: 12,
    height: 12,
  },
  dotIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  closeButtonText: {
    fontSize: 24,
    color: '#6b7280',
  },
});