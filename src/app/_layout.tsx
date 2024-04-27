import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import React from "react";

export default function RootLayout() {
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
    <Stack screenOptions={{}}>
      <Stack.Screen name="index" options={{ title: "AppEMBER" }} />
    </Stack>
  );
}
