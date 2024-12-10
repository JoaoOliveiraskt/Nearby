import { ActivityIndicator } from "react-native";
import { colors } from "@/styles/theme";

export function Loading() {
  return (
    <ActivityIndicator
      size="large"
      color={colors.green.base}
      className="flex-1 justify-center items-center"
    />
  );
}
