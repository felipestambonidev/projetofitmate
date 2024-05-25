import { View, Text } from "react-native";

export default function Linha() {
  return (
    <View className="flex-row pt-5 items-center justify-center mb-4">
      <View className="flex-1 h-0.5 bg-gray-300" />
      <Text className="mx-2 text-gray-500">ou</Text>
      <View className="flex-1 h-0.5 bg-gray-300" />
    </View>
  );
}
