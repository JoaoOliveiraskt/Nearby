import { colors } from "@/styles/colors";
import { IconProps } from "@tabler/icons-react-native";
import { Text, View } from "react-native";

type Props = {
  icon: React.ComponentType<IconProps>;
  description: string;
};

export function Info({ icon: Icon, description }: Props) {
  return (
    <View className="flex-row items-center gap-4 mt-3">
      <Icon size={16} color={colors.dark.primaryLight} />
      <Text className="text-mutedForeground text-sm">{description}</Text>
    </View>
  );
}
