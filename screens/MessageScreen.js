import { View, Text, Image, FlatList, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { messages } from '../data/messages'
import Icon from 'react-native-vector-icons/Ionicons';


const MessageScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.messageContainer}>
      <Image source={{ uri: item.image }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.time}>{item.time}</Text>
        {item.unread > 0 && <View style={styles.unreadBadge}><Text style={styles.unreadText}>{item.unread}</Text></View>}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Message</Text>
      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={20} color="#aaa" />
        <TextInput placeholder="Search" style={styles.searchInput} />
      </View>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent:'center', backgroundColor: '#fff', padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: 10, padding: 10, marginBottom: 20 },
  searchInput: { marginLeft: 10, fontSize: 16, flex: 1 },
  messageContainer: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  textContainer: { flex: 1 },
  name: { fontWeight: 'bold', fontSize: 16 },
  message: { color: '#666', marginTop: 4 },
  infoContainer: { alignItems: 'flex-end' },
  time: { fontSize: 12, color: '#aaa' },
  unreadBadge: { backgroundColor: '#0f0', borderRadius: 12, padding: 4, minWidth: 24, alignItems: 'center', justifyContent: 'center', marginTop: 5 },
  unreadText: { color: '#fff', fontWeight: 'bold' },
});

export default MessageScreen;