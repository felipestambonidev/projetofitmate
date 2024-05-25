import { View } from "react-native";
import MenuPrincipal from "../src/components/menuprincipal/MenuPrincipal";
import Menu from "../src/components/menu/Menu";
import Filtros from "../src/components/filtros/Filtros";

export default function Main() {
  return (
    <View>
      <MenuPrincipal />
      <View className="h-[500px]">
      <Filtros />
      </View>
      <Menu />
    </View>
  );
}
