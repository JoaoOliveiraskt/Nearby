import { View, Text } from "react-native";
import { IconPhone, IconMapPin, IconTicket } from "@tabler/icons-react-native";
import { colors } from "@/styles/colors";
import { Info } from "../info";
import { Rule } from "../rule";

export type PropsDetails = {
  name: string;
  description: string;
  address: string;
  phone: string;
  coupons: number;
  rules: {
    id: string;
    description: string;
  }[];
};

type Props = {
  data: PropsDetails;
};

export function MarketDetails({ data }: Props) {
  return (
    <View style={{}} className="p-8 bg-accent rounded-t-3xl">
      <Text className="text-text text-xl font-bold ">{data.name}</Text>
      <Text className="text-mutedForeground mt-4 ">{data.description}</Text>

      <View className="flex flex-row items-center gap-4 mt-6 h-12 bg-destructiveForeground rounded-xl px-4">
        <IconTicket color={colors.dark.destructive} size={24} />
        <Text className="text-black text-center">
          {data.coupons} cupons disponíveis
        </Text>
      </View>

      <View>
        <Text className="text-text mt-6 font-medium mb-1">Regulamento</Text>
        {data.rules.map((rule) => (
          <Rule key={rule.id} description={`\u2022 ${rule.description}`} />
        ))}
      </View>

      <View>
        <Text className="text-text mt-6 font-medium mb-1">Informações</Text>
        <Info icon={IconMapPin} description={data.address} />
        <Info icon={IconPhone} description={data.phone} />
      </View>
    </View>
  );
}
