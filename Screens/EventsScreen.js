import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/FontAwesome';

const EventsScreen = () => {
    const [messages, setMessages] = useState([]);
    const [showChat, setShowChat] = useState(false);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hi there! Looking for information on upcoming events?',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'Event Bot',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ]);
    }, []);

    const handlePress = () => {
        console.log('Button or image clicked!');
    };

    const onSend = (newMessages = []) => {
        setMessages(GiftedChat.append(messages, newMessages));
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.title}>Upcoming Events</Text>
                <TouchableOpacity onPress={handlePress}>
                    <Image
                        source={{ uri: 'https://www.cipchicago.org/wp-content/uploads/2024/04/CIP-EVENT-May-18-1152x1536.jpg' }}
                        style={styles.image}
                    />
                </TouchableOpacity>
                <Button title="Apply Now" onPress={handlePress} />
                <Text>Would you like to experience the joy of hosting a CIP participant?</Text>
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
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        width: 600,
        height: 400,
        resizeMode: 'contain',
        marginVertical: 20,
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

export default EventsScreen;
