import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { faBrain, faFont, faHouse, faPause, faVolumeHigh, faScissors } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';


export default function AboutScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/images/beyondwords.png')} style={styles.logo} />
                <Text style={styles.headerText}>What is BeyondWords?</Text>
            </View>
            <Text style={styles.subtitle}>Reading Companion powered by AI to empower individuals experiencing Dyslexia</Text>
            <Text style={styles.description}>BeyondWords enables you to capture any text, enhancing your reading experience and comprehension through the power of advanced Machine Learning Technologies. Here are the options available:</Text>            
            <View style={styles.iconContainer}>
                <FontAwesomeIcon icon={faBrain} color={'black'} size={30}/>
                <Text style={styles.iconDescription}>Summarize Text using AI</Text>            
            </View>
            <View style={styles.iconContainer}>
                <FontAwesomeIcon icon={faFont} color={'black'} size={30}/>
                <Text style={styles.iconDescription}>Adjust Text Size & Spacing</Text>            
            </View>
            <View style={styles.iconContainer}>
                <FontAwesomeIcon icon={faVolumeHigh} color={'black'} size={30}/>
                <Text style={styles.iconDescription}>Read Out Loud</Text>            
            </View>
            <View style={styles.iconContainer}>
                <FontAwesomeIcon icon={faPause} color={'black'} size={30}/>
                <Text style={styles.iconDescription}>Pause Reading</Text>            
            </View>
            <View style={styles.iconContainer}>
                <FontAwesomeIcon icon={faScissors} color={'black'} size={30}/>
                <Text style={styles.iconDescription}>Crop Image</Text>            
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
                <View style={styles.circle}>
                  <FontAwesomeIcon icon={faHouse} color={'white'} size={25}/>
              </View>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        fontFamily: 'OpenDyslexic-Bold',
        lineHeight: 28, // Adjust the line height
        marginTop: 20,
        marginHorizontal: 10,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 20,
        fontFamily: 'OpenDyslexic-Bold',
        lineHeight: 24, // Adjust the line height
        marginHorizontal: 10,
        marginTop: 20,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        fontFamily: 'OpenDyslexic-Bold',
        lineHeight: 20, // Adjust the line height
        marginHorizontal: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 10,
    },
    iconDescription: {
        marginLeft: 10,
        fontSize: 16,
        fontFamily: 'OpenDyslexic-Bold',
        lineHeight: 20, // Adjust the line height
        marginHorizontal: 10,
    },
    homeButton: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        width: 40,
        height: 40,
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        backgroundColor: '#0072C6',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    },
    header: {
        backgroundColor: '#ADD8E6',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 5,
    },
    logo: {
        width: 60,
        height: 60,
    },
    headerText: {
        fontFamily: 'OpenDyslexic-Bold',
        margin: 10,
        fontSize: 20,
        marginTop: 13,
    },
});
