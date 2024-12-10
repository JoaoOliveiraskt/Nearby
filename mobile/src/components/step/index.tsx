import { View, Text } from "react-native";
import { type IconProps } from "@tabler/icons-react-native";
import { colors } from "@/styles/colors";

type StepsProps = {
  icon: React.ComponentType<IconProps>;
  title: string;
  description: string;
};

export function Step({ title, description, icon: Icon }: StepsProps) {
  return (
    <View className="mb-10 flex flex-row items-start gap-x-4">
      {Icon && <Icon size={32} color={colors.green.base} />}
      <View className="flex ">
        <Text className="text-text font-semibold">{title}</Text>

        <Text className="text-muted text-sm mt-2">{description}</Text>
      </View>
    </View>
  );
}
