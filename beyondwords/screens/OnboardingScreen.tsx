import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../utils/asyncStorage';
import FontAdjustScreen from './FontAdjustScreen';

const {width, height} = Dimensions.get('window');

export default function OnboardingScreen() {
    const navigation = useNavigation();

    const handleDone = ()=>{        
        navigation.navigate('Home');
        setItem('onboarded', '1');
    }

    const doneButton = ({...props})=>{
        return (
            <TouchableOpacity style={styles.doneButton} {...props}>
                <Text>Done</Text>
            </TouchableOpacity>
        )        
    }
  return (
    <View style={styles.container}>
      <Onboarding
            onDone={handleDone}
            onSkip={handleDone}
            // bottomBarHighlight={false}
            DoneButtonComponent={doneButton}
            containerStyles={{paddingHorizontal: 15}}
            pages={[
                {
                    backgroundColor: '#c7ecee',
                    image: (
                        <View style={styles.lottie}>
                            <Image style={styles.image} source={require('../assets/images/beyondwords.png')} />
                        </View>
                    ),
                    title: 'Welcome to BeyondWords',
                    subtitle: 'Reading Companion powered by AI, designed for individuals with Dyslexia',                    
                },
                {
                    backgroundColor: '#a7f3d0',
                    image: (
                        <View style={styles.lottie}>
                            <Lottie style={styles.lottie} source={require('../assets/animations/animation_lnpbqnyh.json')} autoPlay loop />
                        </View>
                    ),
                    title: 'Explore Any Text',
                    subtitle: 'Scan Any Book and Enhance Your Reading Experience',
                },
                {
                    backgroundColor: '#fef3c7',
                    image: (
                        <View style={styles.lottie}>
                            <Lottie style={styles.lottie} source={require('../assets/animations/animation_lnpxfc1g.json')} autoPlay loop />
                        </View>
                    ),
                    title: 'Enhance Comprehension',
                    subtitle: 'Discover a Smarter Way to Grasp Texts with AI Summaries',
                },
                {
                    backgroundColor: '#a78bfa',
                    image: (
                        <View style={styles.lottie}>
                            <Lottie style={styles.lottie} source={require('../assets/animations/animation_lnpxpouw.json')} autoPlay loop />
                        </View>
                    ),
                    title: 'Empower Your Journey',
                    subtitle: 'Dyslexia-Friendly Features to Help You Reach Your Reading Goals',
                },
            ]}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    lottie:{
        width: width*0.9,
        height: width        
    },
    doneButton: {
        padding: 20,
        // backgroundColor: 'white',
        // borderTopLeftRadius: '100%',
        // borderBottomLeftRadius: '100%'
    },
    image:{
        width: width*0.9,
        height: width*0.9
    }
})