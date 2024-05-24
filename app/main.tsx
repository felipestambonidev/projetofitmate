import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import MenuPrincipal from "../src/components/menuprincipal/MenuPrincipal";
import Menu from "../src/components/menu/Menu";

export default function Main() {
  return (
    <View className="flex-1">
      <MenuPrincipal />
      <Menu />
    </View>
  );
}
