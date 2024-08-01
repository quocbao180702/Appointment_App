import { Stack } from "expo-router";
import { ThemeProvider } from "react-native-magnus";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="aboutUs/index" />
        <Stack.Screen name="recruiment/index" />
        <Stack.Screen name="index" />
      </Stack>
    </ThemeProvider>
  );
}
