import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from "styled-components";
import Stack from './navigation/Stack';
import themeStyle from './styles/theme';

export default function App() {
  let [isReady, setReady] = useState(false)

  return (
    <NavigationContainer>
      <Stack/>
    </NavigationContainer>
  );
}

