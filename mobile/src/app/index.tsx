import { View } from "react-native";
import { Welcome } from "@/components/welcome";
import { Steps } from "@/components/steps";

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 40 }}>
      <View style={{ flex: 1, gap: 40 }}>
        <Welcome />
        <Steps />
      </View>
    </View>
  );
}
