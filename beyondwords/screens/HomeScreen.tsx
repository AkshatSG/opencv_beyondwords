import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { faPlus, faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const { width, height } = Dimensions.get('window');
const buttonSize = width * 0.2; // Reduced button size

export default function HomeScreen() {

    const navigation = useNavigation();

    const handleScanTextButtonPress = () => {        
        navigation.navigate('ImageCrop');
    }

    const handleAboutButtonPress = () => {
        navigation.navigate('About');
    }

    const circleButtonStyle = [styles.circleButton, {width: buttonSize, height: buttonSize, marginBottom: 20, borderRadius: buttonSize/2}];
    const infoButtonStyle = [styles.infoButton, {width: buttonSize/2, height: buttonSize/2, borderRadius: buttonSize/4}];

    return (
        <ImageBackground source={require('../assets/images/appbackground.jpeg')} style={[styles.backgroundImage, {width: width, height: height}]}>
            <View style={[styles.homeContainer]}>
                <View style={{flex: 1}} />
                <TouchableOpacity style={circleButtonStyle} onPress={handleScanTextButtonPress}>
                    <FontAwesomeIcon icon={faPlus} color={'white'} size={35}/>
                </TouchableOpacity>
                <TouchableOpacity style={infoButtonStyle} onPress={handleAboutButtonPress}>
                    <FontAwesomeIcon icon={faInfo} color={'white'} size={15}/>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
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
    homeContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    homeTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontFamily: 'OpenDyslexic-Bold',
        margin: 10,
    },
    circleButton: {
        backgroundColor: '#0072C6',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    infoButton: {
        backgroundColor: '#0072C6',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        right: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },


    
    newText: {
        fontFamily: 'OpenDyslexic-Bold',
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        textAlign: 'center',
        lineHeight: buttonSize,
        color: 'lightgray',
        fontSize: buttonSize * 0.8,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
    },
});