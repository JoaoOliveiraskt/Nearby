import { ActivityIndicator } from "react-native";
import { colors } from "@/styles/theme";

type Props = {
  color?: string;
}

export function Loading({color = colors.dark.text}: Props) {
  return (
    <ActivityIndicator
      size="large"
      color={color}
      className="flex-1 justify-center items-center"
    />
  );
}
