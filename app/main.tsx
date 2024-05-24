import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import MenuPrincipal from "../src/components/menuprincipal/MenuPrincipal";
import Menu from "../src/components/menu/Menu";

export default function Main() {
  return (
    <View className="flex-1">
      <View>
        <MenuPrincipal />
      </View>
      <View>
        <Text>Container</Text>
      </View>
      <View>
        <Menu />
      </View>
    </View>
  );
}
