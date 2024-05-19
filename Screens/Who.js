import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ensure you have installed react-native-vector-icons
import { GiftedChat } from 'react-native-gifted-chat'; // Ensure you have installed react-native-gifted-chat

const WhoWeAreScreen = () => {
  const [messages, setMessages] = useState([]);
  const [showChat, setShowChat] = useState(false);

  React.useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello! How can I assist you today?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'CIP Chatbot',
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
        <Text style={styles.title}>Who We Are</Text>
        <Text style={styles.content}>
          CIP Chicago has been advancing cross-cultural competence and professional development since 1956...
        </Text>
        <Text style={styles.contact}>
          Email: gp@cipchicago.org {'\n'}
          WhatsApp: +1 312 545 6882
        </Text>
        <Text style={styles.smallPrint}>
          We believe in the power of connection and development to transform careers and communities.
        </Text>
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
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
  contact: {
    fontSize: 16,
    color: 'blue',
    marginTop: 20,
  },
  smallPrint: {
    fontSize: 14,
    color: 'gray',
    marginTop: 20,
    fontStyle: 'italic',
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

export default WhoWeAreScreen;
