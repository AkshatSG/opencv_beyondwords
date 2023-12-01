import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import { getItem } from '../utils/asyncStorage';
import ReaderScreen from '../screens/ReaderScreen';
import EvaluationScreen from '../screens/EvaluationScreen';
import AISummaryScreen from '../screens/AISummaryScreen';
import ImageCropScreen from '../screens/ImageCropScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createNativeStackNavigator();


export default function AppNavigation() {

  const [showOnboarding, setShowOnboarding] = useState(null);
  useEffect(()=>{
    checkIfAlreadyOnboarded();
  },[])

  const checkIfAlreadyOnboarded = async ()=>{
    let onboarded = await getItem('onboarded');
    if(onboarded==1){
      // hide onboarding
      setShowOnboarding(false);
    }else{
      // show onboarding
      setShowOnboarding(true);
    }
  }

  if(showOnboarding==null){
    return null;
  }


  if(showOnboarding){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Onboarding'>
          <Stack.Screen name="Onboarding" options={{headerShown: false}} component={OnboardingScreen} />
          <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
          <Stack.Screen name="ImageCrop" options={{headerShown: false}} component={ImageCropScreen} />
          <Stack.Screen name="Reader" options={{headerShown: false}} component={ReaderScreen} />
          <Stack.Screen name="Evaluation" options={{headerShown: false}} component={EvaluationScreen} />
          <Stack.Screen name="AISummary" options={{headerShown: false}} component={AISummaryScreen} />
          <Stack.Screen name="About" options={{headerShown: false}} component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }else{
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Onboarding" options={{headerShown: false}} component={OnboardingScreen} />
          <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
          <Stack.Screen name="ImageCrop" options={{headerShown: false}} component={ImageCropScreen} />
          <Stack.Screen name="Reader" options={{headerShown: false}} component={ReaderScreen} />
          <Stack.Screen name="Evaluation" options={{headerShown: false}} component={EvaluationScreen} />
          <Stack.Screen name="AISummary" options={{headerShown: false}} component={AISummaryScreen} />
          <Stack.Screen name="About" options={{headerShown: false}} component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  
}