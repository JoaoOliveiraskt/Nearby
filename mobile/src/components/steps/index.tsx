import { View, Text } from "react-native";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";
import { Step } from "../step";

const stepsContent = [
  {
    icon: IconMapPin,
    title: "Encontre estabelecimentos",
    description: "Veja locais perto de você que são parceiros Nearby",
  },
  {
    icon: IconQrcode,
    title: "Ative o cupom com QR Code",
    description: "Escaneie o código no estabelecimento para usar o benefício",
  },
  {
    icon: IconTicket,
    title: "Garanta vantagens perto de você",
    description:
      "Ative cupons onde estiver, em diferentes tipos de estabelecimento ",
  },
];

export function Steps() {
  return (
    <View>
      <Text className="mb-6 text-muted">Veja como funciona:</Text>
      {stepsContent.map((step, index) => (
        <Step
          key={index}
          icon={step.icon}
          title={step.title}
          description={step.description}
        />
      ))}
    </View>
  );
}
