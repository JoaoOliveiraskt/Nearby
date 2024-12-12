import { useRef } from "react";
import { Text, useWindowDimensions } from "react-native";
import { Place, PlaceProps } from "../place";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { colors } from "@/styles/colors";
import { router } from "expo-router";

type Props = {
  data: PlaceProps[];
};

export function Places({ data }: Props) {
  const dimensions = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = {
    min: 230,
    max: dimensions.height - 128,
  };
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      backgroundStyle={{
        backgroundColor: colors.dark.accent,
      }}
    >
      <BottomSheetFlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Place
            data={item}
            onPress={() => router.navigate(`/market/${item.id}`)}
          />
        )}
        ListHeaderComponent={() => (
          <Text className="mb-8 font-medium text-xl ml-5 text-text">
            Explore {data.length} locais perto de você
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </BottomSheet>
  );
}
