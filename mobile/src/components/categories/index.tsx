import { FlatList } from "react-native";
import { Category } from "../category";

export type CategoriesProps = {
  id: string;
  name: string;
}[];

type Props = {
  data: CategoriesProps;
  selected: string;
  onSelect: (id: string) => void;
};

export function Categories({ data, selected, onSelect }: Props) {
  return (
    <FlatList
      data={data}
      horizontal
      style={{ maxHeight: 46, position: "absolute", zIndex: 1, top: 28 }}
      contentContainerStyle={{
        gap: 8,
        paddingHorizontal: 24,
      }}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          iconId={item.id}
          name={item.name}
          onPress={() => onSelect(item.id)}
          isSelected={selected === item.id}
        />
      )}
    />
  );
}
