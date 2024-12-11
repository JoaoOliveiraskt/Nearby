import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { View, Alert } from "react-native";
import { Categories, CategoriesProps } from "@/components/categories";
import type { PlaceProps } from "@/components/place";
import { Places } from "@/components/places";
import { colors } from "@/styles/colors";

type MarketProps = PlaceProps;

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [category, setCategory] = useState("");
  const [markets, setMarkets] = useState<MarketProps[]>([]);

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
      setCategory(data[0].id);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro ao buscar categorias");
    }
  }

  async function fetchMarkets() {
    try {
      if (!category) return;

      const { data } = await api.get(`/markets/category/${category}`);
      setMarkets(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro ao buscar mercados");
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchMarkets();
  }, [category]);

  return (
    <View style={{ flex: 1, backgroundColor: colors.dark.background }}>
      <Categories
        data={categories}
        onSelect={setCategory}
        selected={category}
      />
      <Places data={markets} />
    </View>
  );
}
