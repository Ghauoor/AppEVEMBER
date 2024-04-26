import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import DayListItem from "../components/core/DayListItem";
import React from "react";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";

const days = [...Array(24)].map((_, index) => index + 1);

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Amatic: AmaticSC_400Regular,
    AmaticSC: AmaticSC_700Bold,
  });
  const loadFonts = async () => await SplashScreen.preventAutoHideAsync();

  React.useEffect(() => {
    if (fontsLoaded || fontError) loadFonts;
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
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
