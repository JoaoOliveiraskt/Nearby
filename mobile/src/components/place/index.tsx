import { colors } from "@/styles/colors";
import { IconTicket } from "@tabler/icons-react-native";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

export type PlaceProps = {
  id: string;
  name: string;
  description: string;
  cover: string;
  coupons: number;
  address: string;
};

type Props = TouchableOpacityProps & {
  data: PlaceProps;
};

export function Place({ data, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      className="h-36 w-full px-5 flex flex-row gap-x-4 items-center"
    >
      <Image
        source={{ uri: data.cover }}
        className="w-28 h-28 bg-accent rounded-xl"
      />

      <View className="flex-1">
        <View className="gap-1">
          <Text className="text-base font-bold text-text">{data.name}</Text>
          <Text className="text-sm font-normal text-muted" numberOfLines={2}>
            {data.description}
          </Text>
        </View>

        <View className="flex flex-row items-center gap-2 mt-2.5">
          <IconTicket size={16} color={colors.dark.primaryLight} />
          <Text className="text-xs font-normal text-muted">
            {data.coupons} Cupons disponíveis
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
