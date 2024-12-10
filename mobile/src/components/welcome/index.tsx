import { Text, View, Image } from "react-native";

export function Welcome() {
  return (
    <View>
      <Image
        source={require("@/assets/logo.png")}
        className="h-12 w-12 mt-6 mb-7"
      />

      <Text className="text-2xl font-bold text-text">
        Boas vindas ao Nearby!
      </Text>

      <Text className="text-muted mt-3">
        Tenha cupons de vantagem para usar em {"\n"}
        seus estabelecimentos favoritos.
      </Text>
    </View>
  );
}
