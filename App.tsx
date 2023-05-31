import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Modal } from 'react-native';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContact, setSelectedContact] = useState<any>(null);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  const handleContactPress = (contact: any) => {
    setSelectedContact(contact);
  };

  const handleCloseModal = () => {
    setSelectedContact(null);
  };

  const filteredContacts = [
    { id: 1, name: 'Arjun', number: '123457890' },
    { id: 2, name: 'John1', number: '9876543210' },
    { id: 3, name: 'Arjun Sharma', number: '13467890' },
    { id: 4, name: 'John Deep', number: '98654310' },
    { id: 5, name: 'Arjun Singh', number: '134567890' },
    { id: 6, name: 'Johny Andrew', number: '98653210' },
    { id: 7, name: 'Arjun Talwar', number: '1234567890' },
    { id: 8, name: 'John Cruise', number: '987654320' },
    { id: 9, name: 'Arjun Khapra', number: '123456789' },
    { id: 11, name: 'Dilip Joshi', number: '876549010' },
    { id: 12, name: 'MS Dhoni', number: '876590225' },
    { id: 13, name: 'Ravindra Jadeja', number: '87654758' },
    { id: 14, name: 'Shahrukh Khan', number: '876548900' },
    { id: 15, name: 'Mamta Bannerjii', number: '87659230' },
    { id: 16, name: 'Ajay Nagar', number: '89812430' },
    // // Add more contacts as needed
  ].filter((contact) => contact.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (

    
    <View style={styles.container}>
      <Text style={styles.title}>Contacts</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        onChangeText={handleSearch}
        value={searchQuery}
      />
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleContactPress(item)}>
            <Text style={styles.contactItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Modal visible={selectedContact !== null} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedContact?.name}</Text>
          <Text style={styles.modalText}>{selectedContact?.number}</Text>
          <TouchableOpacity style={styles.modalCloseButton} onPress={handleCloseModal}>
            <Text style={styles.modalCloseButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  contactItem: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#fff',
  },
  modalCloseButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  modalCloseButtonText: {
    fontSize: 18,
    color: '#000',
  },
});


