import {View, Text, Image, FlatList, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {messages} from '../data/messages';
import Icon from 'react-native-vector-icons/Ionicons';
import { GLOBAL_STYLES } from '../constants/styles';
import TitleScreen from '../components/TitleScreen';

const MessageScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <View style={styles.messageContainer}>
      <Icon
        name={item.iconName}
        size={40}
        color="#007AFF"
        style={styles.icon}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.time}>{item.time}</Text>
        {item.unread > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{item.unread}</Text>
          </View>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <TitleScreen>MessageScreen</TitleScreen>
      </View>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
          />
        </View>
      </View>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    marginTop: 20
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: GLOBAL_STYLES.colors.colorgristransparente,
    borderRadius: 25,
    width: '100%',
    height: 50,
    borderColor: GLOBAL_STYLES.colors.colorgrisletrasybordes,
    borderWidth: 0.5
  },
  searchIcon: {
    position: 'absolute',
    marginLeft: 15,
  },
  searchInput: {
    color: '#333',
    paddingLeft: 45,
    fontSize: 16,
  },

  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  avatar: {width: 50, height: 50, borderRadius: 25, marginRight: 15},
  textContainer: {flex: 1},
  name: {fontWeight: 'bold', fontSize: 16},
  message: {color: '#666', marginTop: 4},
  infoContainer: {alignItems: 'flex-end'},
  time: {fontSize: 12, color: '#aaa'},
  unreadBadge: {
    backgroundColor: GLOBAL_STYLES.colors.colorverdeprincipal,
    borderRadius: 12,
    padding: 4,
    minWidth: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  }
});

export default MessageScreen;
