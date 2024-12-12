import { Button } from "@/components/button";
import { colors } from "@/styles/theme";
import { IconChevronLeft } from "@tabler/icons-react-native";
import { router } from "expo-router";
import { ImageBackground, View } from "react-native";

type Props = {
  uri: string;
};

export function MarketImage({ uri }: Props) {
  return (
    <ImageBackground source={{ uri }} className="w-full h-60 -mb-8 bg-accent">
      <View className="p-6 pt-14">
        <Button
          className="!w-12 !h-12 !rounded-full !bg-card/80"
          onPress={() => router.back()}
        >
          <Button.Icon icon={IconChevronLeft} size={28} />
        </Button>
      </View>
    </ImageBackground>
  );
}
