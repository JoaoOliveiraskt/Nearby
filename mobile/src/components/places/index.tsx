import { useRef } from "react";
import { Text, useWindowDimensions } from "react-native";
import { Place, PlaceProps } from "../place";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { colors } from "@/styles/colors";

type Props = {
  data: PlaceProps[];
};

export function Places({ data }: Props) {
  const dimensions = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = {
    min: 270,
    max: dimensions.height - 128,
  };
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={{
        backgroundColor: colors.dark.muted,
        width: 80,
        marginTop: 6,
      }}
      backgroundStyle={{
        backgroundColor: colors.dark.accent,
        borderRadius: 32,
      }}
    >
      <BottomSheetFlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Place data={item} />}
        ListHeaderComponent={() => (
          <Text className="mb-8 mt-4 font-bold text-xl ml-5 text-text">
            Explore {data.length} locais perto de você
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </BottomSheet>
  );
}
