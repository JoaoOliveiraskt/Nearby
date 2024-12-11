import "../styles/global.css";
import { Stack } from "expo-router";
import { colors } from "@/styles/theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Loading } from "@/components/loading";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { StatusBar } from "react-native";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={colors.dark.background}
        barStyle={"light-content"}
      />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.dark.background },
        }}
      />
    </GestureHandlerRootView>
  );
}
