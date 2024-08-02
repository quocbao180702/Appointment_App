import { Stack } from "expo-router";
import { ThemeProvider } from "react-native-magnus";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#677fed',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="aboutUs/index" />
      </Stack>
    </ThemeProvider>
  );
}
