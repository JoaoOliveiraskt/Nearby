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
      contentContainerClassName="gap-4 absolute z-10 top-8 px-4 mx-h-6"
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
