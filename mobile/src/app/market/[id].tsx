import { useEffect, useState, useRef } from "react";
import { View, Alert, Modal, ScrollView } from "react-native";
import { router, useLocalSearchParams, Redirect } from "expo-router";
import { colors } from "@/styles/colors";
import { Loading } from "@/components/loading";
import { MarketImage } from "@/components/market/image";
import { MarketDetails, type PropsDetails } from "@/components/market/details";
import { Coupon } from "@/components/market/coupon";
import { Button } from "@/components/button";
import { useCameraPermissions, CameraView } from "expo-camera";
import { IconScan } from "@tabler/icons-react-native";
import { IconChevronLeft } from "@tabler/icons-react-native";

import { api } from "@/services/api";

type DataProps = PropsDetails & {
  cover: string;
};

export default function Market() {
  const [marketData, setMarketData] = useState<DataProps>();
  const [coupon, setCoupon] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCameraModalVisible, setIsCameraModalVisible] = useState(false);
  const [couponIsFetching, setCouponIsFetching] = useState(false);

  const [_, requestPermission] = useCameraPermissions();

  const params = useLocalSearchParams<{ id: string }>();

  const qrLock = useRef(false);
  console.log(params.id);

  async function fetchMarket() {
    try {
      const { data } = await api.get(`/markets/${params.id}`);
      setMarketData(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível carregar os dados", [
        { text: "OK", onPress: () => router.back() },
      ]);
    }
  }

  async function handleOpenCamera() {
    try {
      const { granted } = await requestPermission();

      if (!granted) {
        return Alert.alert("Câmera", "Você precisa permitir o acesso a câmera");
      }
      qrLock.current = false;
      setIsCameraModalVisible(true);
    } catch (error) {
      console.error(error);
      Alert.alert("Câmera", "Não foi possível abrir a câmera");
    }
  }

  async function getCoupon(id: string) {
    try {
      setCouponIsFetching(true);
      const { data } = await api.patch(`/coupons/${id}`);
      Alert.alert("Cupom", data.coupon);
      setCoupon(data.coupon);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível resgatar o cupom");
    } finally {
      setCouponIsFetching(false);
    }
  }

  function handleUseCoupon(id: string) {
    setIsCameraModalVisible(false);
    Alert.alert(
      "Cupom",
      "Obs: Não é possível reutilizar o cupom. Deseja realmente resgatar?",
      [
        { style: "cancel", text: "Cancelar" },
        { text: "Resgatar", onPress: () => getCoupon(id) },
      ]
    );
  }

  useEffect(() => {
    fetchMarket();
  }, [params.id, coupon]);

  if (isLoading) {
    return <Loading color={colors.dark.primary} />;
  }

  if (!marketData) {
    return <Redirect href="/home" />;
  }

  return (
    <View style={{ flex: 1 }} className="bg-accent">
      <ScrollView>
        <MarketImage uri={marketData.cover} />
        <MarketDetails data={marketData} />
        {coupon && <Coupon code={coupon} />}
      </ScrollView>

      <View className="p-8">
        <Button onPress={handleOpenCamera}>
          <Button.Icon icon={IconScan} />
          <Button.Title>Ler QR Code</Button.Title>
        </Button>
      </View>

      <Modal style={{ flex: 1 }} visible={isCameraModalVisible}>
        <CameraView
          style={{ flex: 1 }}
          facing="back"
          onBarcodeScanned={({ data }) => {
            if (data && !qrLock.current) {
              qrLock.current = true;
              setTimeout(() => handleUseCoupon(data), 500);
            }
          }}
        />
        <View className="absolute bottom-8 left-8 right-8">
          <Button
            onPress={() => setIsCameraModalVisible(false)}
            isLoading={couponIsFetching}
          >
            <Button.Icon icon={IconChevronLeft} />
            <Button.Title>Voltar</Button.Title>
          </Button>
        </View>
      </Modal>
    </View>
  );
}
