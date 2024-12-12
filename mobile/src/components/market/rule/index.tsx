import { colors } from "@/styles/colors";
import { IconPointFilled } from "@tabler/icons-react-native";
import { Text, View } from "react-native";

type Props = {
  description: string;
};

export function Rule({ description }: Props) {
  return (
    <View className="flex-row items-center gap-4 mt-3">
      <Text className="text-mutedForeground text-sm">{description}</Text>
    </View>
  );
}
