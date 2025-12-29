import { Stack } from "expo-router";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './globals.css';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="(tabs)/index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)/search" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)/saved" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)/profile" options={{ headerShown: false }} />
        <Stack.Screen name="movie/[id]" options={{ headerShown: false }} /> */}
      </Stack>
    </SafeAreaProvider>
  );
}
