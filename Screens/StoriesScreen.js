import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/FontAwesome';

const StoriesScreen = () => {
  const [messages, setMessages] = useState([]);
  const [showChat, setShowChat] = useState(false);

  React.useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Welcome to CIP Chicago Stories! How can I assist you?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'CIP Bot',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = (newMessages = []) => {
    setMessages(GiftedChat.append(messages, newMessages));
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Success Stories</Text>
        <Text style={styles.story}>
          "Through CIP Chicago's programs, I gained invaluable international experience that has significantly advanced my career. The support and knowledge I received were unparalleled."
          - A program participant from Georgia
        </Text>
        <Text style={styles.story}>
          "Hosting interns from different cultural backgrounds has not only enriched our organization but also provided fresh perspectives on our projects."
          - A host company in Chicago
        </Text>
        {/* More stories can be added here */}
      </ScrollView>
      {showChat && (
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      )}
      <TouchableOpacity style={styles.chatIcon} onPress={() => setShowChat(!showChat)}>
        <Icon name="comments" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  story: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  chatIcon: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: 'orange',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
  }
});

export default StoriesScreen;
