import { colors } from "@/styles/theme";
import { IconTicket } from "@tabler/icons-react-native";
import { View, Text } from "react-native";

type Props = {
  code: string;
};

export function Coupon({ code }: Props) {
  return (
    <View className="px-8">
      <Text className="text-text font-medium">Utilize esse cupom</Text>
      <View className="flex flex-row items-center gap-4 mt-6 h-12 bg-primaryForeground rounded-xl px-4">
        <IconTicket color={colors.dark.primaryLight} size={24} />
        <Text className="text-black text-center">{code}</Text>
      </View>
    </View>
  );
}
