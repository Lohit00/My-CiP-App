import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Button, ImageBackground, TouchableOpacity, Image, Linking, ScrollView, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/FontAwesome';




const categories = [
    {
      id: 'individuals',
      icon: { uri: 'https://www.cipchicago.org/wp-content/uploads/2020/07/cip-icon.png' },
      title: 'Individuals',
      text: 'If you are interested in an international professional development experience in the U.S., we can sponsor you.',
    },
    {
      id: 'volunteers',
      icon: { uri: 'https://www.cipchicago.org/wp-content/uploads/2021/11/host-icon1.png' },
      title: 'Volunteers',
      text: 'The Council of International Programs (CIP) offers a great opportunity to volunteer.',
    },
    {
      id: 'businesses',
      icon: { uri: 'https://www.cipchicago.org/wp-content/uploads/2020/07/cip-icon.png' },
      title: 'Businesses',
      text: 'Businesses can onboard highly talented professionals from abroad',
    },
    {
      id: 'hostFamilies',
      icon: { uri: 'https://www.cipchicago.org/wp-content/uploads/2021/11/ngo2-about-icon3.png' },
      title: 'Host Families',
      text: 'Would you like to experience the joy of hosting a CIP participant?',
    },
  ];
  const handlePress = () => {
    Linking.openURL('https://www.zeffy.com/en-US/ticketing/6f19f2e2-baa3-486d-b06a-794ec9289027');
    // Define what should happen when the press event is triggered
    console.log('Pressed!'); // Placeholder action
};

const HomeScreen = ({ navigation }) => {
    const [showChat, setShowChat] = useState(false);
    const [messages, setMessages] = useState([]);
  
    React.useEffect(() => {
        setMessages([
          {
            _id: 1,
            text: 'Hello! How can I help you today?',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Support Bot',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
        ]);
      }, []);
    
      const handleSend = () => {
        console.log(name, email, phone, subject, message);
        alert('Your message has been sent!');
      };
    
      const onSend = (newMessages = []) => {
        setMessages(GiftedChat.append(messages, newMessages));
      };
    
    const handlePress = () => {
      Linking.openURL('https://www.zeffy.com/en-US/ticketing/6f19f2e2-baa3-486d-b06a-794ec9289027');
      console.log('Pressed!');
    };
  
    return (
      <ScrollView style={styles.container}>
        {showChat && <GiftedChat messages={messages} onSend={messages => onSend(messages)} user={{ _id: 1 }} />}
            <Text style={styles.heading}>Welcome to CIP Chicago</Text>
            <Text style={styles.paragraph}>Information about programs and activities...</Text>
            <ImageBackground
                source={{ uri: 'https://www.cipchicago.org/wp-content/uploads/2022/01/HP.jpg' }}
                style={styles.image}
                resizeMode="cover"
            >
                <Text style={styles.imageText}>Global Reach. Global Impact</Text>
                <Text style={styles.Text}>Work based training and cultural exchange opportunities for</Text>
                <Text style={styles.Text}>professionals from almost any part of the world</Text>
                <View style={styles.buttonContainer}>
                    <Button
                        color="black"
                        title="Our Organisation"
                        onPress={() => navigation.navigate('Who')}
                    />
                    <Button
                        color="orange"
                        title="Discover us"
                        onPress={() => navigation.navigate('What')}
                    />
                </View>
            </ImageBackground>
            <View style={{height: 40}} />
            <View style={styles.textImageContainer}>
                <ImageBackground
                    source={{ uri: 'https://www.cipchicago.org/wp-content/uploads/2022/01/About-cip.jpg' }}
                    style={styles.image1}
                    resizeMode="contain"
                />
                <View style={styles.fullWidthTextContainer}>
                    <Text style={styles.Text1}>About the CIP</Text>
                    <Text style={styles.Text2}>The Council of International Programs Chicago.</Text>
                    <Text style={styles.Text3}>A non-profit international educational exchange program, committed to promoting international understanding through professional development and cross-cultural exchange.</Text>
                    <Text style={styles.Text3}>Over the years CIP has brought nearly 10,000 international professionals from 147 countries to the United States for practical training.</Text>
                    <Button
                        color="black"
                        title="Donate now"
                        onPress={() => navigation.navigate('Donate')}
                    />
                    <TouchableOpacity onPress={handlePress}>
                        <Text>About Us</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.heading1}>Featured Events</Text>
            <TouchableOpacity onPress={handlePress} style={styles.centeredImageContainer}>
    <Image
        source={{ uri: 'https://www.cipchicago.org/wp-content/uploads/2024/04/CIP-EVENT-May-18-1152x1536.jpg' }}
        style={styles.fullImage}
    />
</TouchableOpacity>
<br></br><br></br><br></br><br></br>
<View style={{ padding: 120 }} /> 
<Text style={styles.title1}>Who We Work With</Text>
      <View style={styles.cardContainer}>
        {categories.map((category) => (
          <View key={category.id} style={styles.card}>
            <Image source={category.icon} style={styles.icon} />
            <Text style={styles.cardTitle}>{category.title}</Text>
            <Text style={styles.cardText}>{category.text}</Text>
          </View>
        ))}
      </View>
      <View style={{ padding: 50 }} /> 
      <Text style={styles.heading1}>Our Impact</Text>
      <ScrollView horizontal={true} style={styles.horizontalScroll}>
        <View style={styles.impactItem}>
          <Image source={{ uri: 'https://www.cipchicago.org/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-06-at-12.46.35_9b7f6753-960x720.jpg' }} style={styles.impactImage} />
          <Text style={styles.impactText}>Interview with Daniel</Text>
          <Text style={styles.dateText}>October 12, 2023</Text>
        </View>
        <View style={styles.impactItem}>
          <Image source={{ uri: 'https://www.cipchicago.org/wp-content/uploads/2020/07/George-p-at-C-Fair-LUC-201808_cropped-960x562.jpg' }} style={styles.impactImage} />
          <Text style={styles.impactText}>Career Fairs</Text>
          <Text style={styles.dateText}>July 14, 2020</Text>
        </View>
        <View style={styles.impactItem}>
          <Image source={{ uri: 'https://www.cipchicago.org/wp-content/uploads/2020/04/Ambassador-OKeefe-and-G-Palamattam-meet-with-Sen.Durbin02-960x499.jpg' }} style={styles.impactImage} />
          <Text style={styles.impactText}>Meeting with Sen. Durbin</Text>
          <Text style={styles.dateText}>July 13, 2020</Text>
        </View>
      </ScrollView>
      <Text style={styles.sectionHeading}>The CIP-Chicago in Numbers</Text>
<Text style={styles.descriptionText}>Our programs and the contributions of our volunteers and professionals provide enriching opportunities for global idea-sharing.</Text>
<View style={styles.statsWithImageContainer}>
  <View style={styles.statsContainer}>
    <View style={styles.statColumn}>
      <View style={styles.statBox}>
        <Text style={styles.statNumber}>1600</Text>
        <Text style={styles.statLabel}>Volunteers</Text>
      </View>
      <View style={styles.statBox}>
        <Text style={styles.statNumber}>30</Text>
        <Text style={styles.statLabel}>Businesses</Text>
      </View>
    </View>
    <View style={styles.statColumn}>
      <View style={styles.statBox}>
        <Text style={styles.statNumber}>250</Text>
        <Text style={styles.statLabel}>Interns and Professionals</Text>
      </View>
      <View style={styles.statBox}>
        <Text style={styles.statNumber}>169</Text>
        <Text style={styles.statLabel}>Host Families</Text>
      </View>
    </View>
  </View>
  <ImageBackground
      source={{ uri: 'https://www.cipchicago.org/wp-content/uploads/2020/07/Book-for-Cty-Mgr_780x780.jpg' }}
      style={styles.sideImage}
      resizeMode="contain"
  />
  </View>
  <View style={styles.partnershipContainer}>
  <View style={styles.partnershipContent}>
    <Image
      source={{ uri: 'https://www.cipchicago.org/wp-content/uploads/2023/05/cropped-DJ-Logo-e1653408145703.jpg' }}
      style={styles.impactImage}
    />
   <View style={styles.textContainer}>
  <Text style={styles.heading1}>Our Partnerships</Text>
  <Text style={styles.Text4}>Discovery Journey</Text>
  <Text style={styles.Text5}>
    Discovery Journey is an organization that arranges travel opportunities for educational purposes. Their mission is to provide experiences to people of all different backgrounds a chance at a first-hand cultural excursion experience.
  </Text>
</View>
  </View>
</View>
<View style={styles.partnershipContainer}>
  <View style={styles.partnershipContent}>
    <Image
      source={{ uri: 'https://www.cipchicago.org/wp-content/uploads/2023/05/COILlogo.jpg' }}
      style={styles.impactImage}
    />
   <View style={styles.textContainer}>
  <Text style={styles.Text4}>Congressional Office for International Leadership</Text>
  <Text style={styles.Text5}>
  The Congressional Office for International Leadership is an organization that helps members of Congress and their constituents engage in congressional and citizen diplomacy with political and civic leaders from around the globe.
  </Text>
</View>
  </View>
</View>
<ImageBackground
        source={{ uri: 'https://www.cipchicago.org/wp-content/uploads/2020/07/Karol-at-LUC-C-Fair-18_1920x1200-1-300x188.jpg' }} // Use the correct image URL
        style={styles.fullWidthImage2}
        resizeMode="cover"
      >
        <Text style={styles.imageText3}>We can't help everyone, but everyone can help someone.</Text>
        <View style={styles.buttonContainer1}>
          <Button
            title="Donate now"
            onPress={() => {/* navigation logic */}}
            color="orange"
          />
          <Button
            title="Become a volunteer"
            onPress={() => {/* navigation logic */}}
            color="green"
          />
        </View>
      </ImageBackground>
      <View style={{ padding: 80 }} /> 
  <View style={styles.footerContainer}>
    <View style={styles.contactInfo}>
    <Icon name="phone" size={20} color="#000" />
      <Text style={styles.contactText}>+1 (312) 545-6882</Text>
      <Icon name="envelope" size={20} color="#000" />
      <Text style={styles.contactText}>gp@cipchicago.org</Text>
    </View>
    <View style={styles.servicesList}>
      <Text style={styles.footerHeading}>Our Services</Text>
      <Text style={styles.footerLink}>Become an Intern</Text>
      <Text style={styles.footerLink}>Become a Host Family</Text>
      <Text style={styles.footerLink}>Become a Volunteer</Text>
    </View>
    <View style={styles.iconContainer}>
      <Icon name="facebook" size={20} color="#000" />
      <Icon name="twitter" size={20} color="#000" />
      <Icon name="youtube" size={20} color="#000" />
      <Icon name="linkedin" size={20} color="#000" />
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
  </View>


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
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
      },
    container: {
        flex: 1,
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    heading1: {
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        marginBottom: 20,
    },
    paragraph: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 400,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image1: {
        width: '90%',
        height: 500,
        alignSelf: 'flex-start',
        marginVertical: 5
    },
    image2: {
        width: '90%',
        height: 500,
        alignSelf: 'flex-start',
        marginVertical: 5,
        alignItems: 'flex-end',
        alignSelf: 'flex-end'
    },
    imageText: {
        color: 'orange',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: 10,
        alignSelf: 'flex-start'
    },
    Text: {
        color: 'grey',
        fontSize: 12,
        textAlign: 'left',
        padding: 10,
        alignSelf: 'flex-start'
    },
    Text1: {
        color: 'black',
        fontSize: 25,
        textAlign: 'right',
        fontWeight: 'bold',
        padding: 10,
    },
    Text2: {
        color: 'black',
        fontSize: 25,
        textAlign: 'right',
        padding: 30,
    },
    Text3: {
        color: 'grey',
        fontSize: 14,
        textAlign: 'right',
        padding: 10,
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 20, // Adjust padding as needed to fit your screen layout
        paddingVertical: 10
      },
      textContainer: {
        flex: 1,
        paddingHorizontal: 20, // Adjust padding as needed to fit your screen layout
        paddingVertical: 10
      },
      heading1: {
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'left'
      },
      Text4: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left'
      },
      fullWidthImage2: {
        width: '100%',
        height: 600, // Set height according to your design needs
        justifyContent: 'center',
        alignItems: 'center',
      },
      imageText3: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
      },
      Text5: {
        fontSize: 16,
        textAlign: 'left',
        color: '#666',
        lineHeight: 24, // Adjust line height for better readability
        flexWrap: 'wrap' // Ensure text wraps within container
      },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
        paddingLeft: 10,
    },
    buttonContainer1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
      },
    button: {
        marginRight: 20,
    },
    textImageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
        marginTop: 20, // Increase this value to add more space
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        paddingTop: 40, // Add padding at the top for the "Who We Work With" title
    },
    title1: {
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        paddingTop: 40, // Add padding at the top for the "Who We Work With" title
    },
    textImageContainer1: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
    },
    textImageContainer1: {
        flexDirection: 'row',
        alignItems: 'right',
        alignSelf: 'right',
        width: '70%',
    },
    fullWidthTextContainer: {
        width: '50%',
        alignItems: 'flex-end'
    },
    centeredImageContainer: {
        alignItems: 'center', // Center the TouchableOpacity
        width: '100%', // Ensure it takes the full width
        height: 500, // Set a fixed height or adjust as needed
    },
    container: {
        flex: 1,
        padding: 20,
      },
      heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      paragraph: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
      },
      image: {
        width: '100%',
        height: 400,
        justifyContent: 'center',
        alignItems: 'center'
      },
      imageText: {
        color: 'orange',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: 10,
        alignSelf: 'flex-start'
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
        paddingLeft: 10,
      },
      cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      card: {
        width: '23%',
        backgroundColor: '#f0f0f0',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
      },
      icon: {
        width: 50,
        height: 50,
        marginBottom: 10,
      },
      cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      cardText: {
        fontSize: 14, textAlign: 'center',
      },
    fullImage: {
        width: '150%', // Full width of the container
        height: '150%', // Full height of the container
        resizeMode: 'contain', // Ensure the image is fully visible and scaled properly
    },
    container: {
        flex: 1,
        padding: 20,
      },
      heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
      },
      horizontalScroll: {
        marginBottom: 20,
      },
      impactItem: {
        width: 400,
        marginRight: 15,
        alignItems: 'center',
        alignSelf: 'center'
      },
      impactImage: {
        width: 200, // Adjust width as needed
        height: 200, // Adjust height as needed
        resizeMode: 'contain' // Maintain the aspect ratio
      },
      impactText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
      },
      dateText: {
        fontSize: 14,
        color: '#666',
      },
      container: {
        flex: 1,
        padding: 20,
      },
      sectionHeading: {
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 10,
      },
      descriptionText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'left',
        marginBottom: 20,
      },
      statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      statColumn: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'flex-start'
      },
      statBox: {
        marginBottom: 20,
      },
      statNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left'
      },
      statLabel: {
        fontSize: 16,
        color: '#666',
        textAlign: 'left'
      },
      statsWithImageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20 // Ensure there is spacing for readability
      },
      statsContainer: {
        flex: 2, // Adjust the proportion to give more space to the image
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      statColumn: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'flex-start'
      },
      sideImage: {
        flex: 1, // Adjust the flex to give the image more space
        width: undefined,
        height: 400, // Increase the height as needed
        resizeMode: 'contain'
      },
      partnershipContainer: {
        marginBottom: 20,
        alignItems: 'flex-start',
      },
      partnershipContent: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
      },
      impactImage: {
        width: 350, // Adjust width as necessary
        height: 350, // Adjust height as necessary
        resizeMode: 'contain',
        marginRight: 30,
      },
      textContainer: {
        flex: 1,
      },
      heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      descriptionText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'left',
      },
      footerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
      },
      contactInfo: {
        flexDirection: 'column',
      },
      contactText: {
        fontSize: 16,
        color: '#000',
      },
      servicesList: {
        flexDirection: 'column',
      },
      footerHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
      },
      footerLink: {
        fontSize: 16,
        color: '#000',
        paddingTop: 5,
      },
      iconContainer: {
        padding: '15',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      },
});

export default HomeScreen;
