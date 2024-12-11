import { ActivityIndicator } from "react-native";
import { colors } from "@/styles/theme";

export function Loading() {
  return (
    <ActivityIndicator
      size="large"
      color={colors.dark.primary}
      className="flex-1 justify-center items-center"
    />
  );
}
