import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import DayListItem from "./src/components/core/DayListItem";
import React, { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';

import { useFonts, AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';

const days = [...Array(24)].map((val, index) => index + 1);

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Amatic: AmaticSC_400Regular,
    AmaticSC: AmaticSC_700Bold
  })
  const loadFonst = async () =>
    await SplashScreen.preventAutoHideAsync()

  useEffect(() => {
    if (fontsLoaded || fontError)
      loadFonst

  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    console.log("Hello There");
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        data={days}
        renderItem={({ item }) => <DayListItem day={item} key={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    gap: 4,
  },

  column: {
    gap: 8,
    padding: 5,
  },
});
