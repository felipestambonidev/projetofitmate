import { View, ScrollView } from "react-native";
import MenuPrincipal from "../src/components/menuprincipal/MenuPrincipal";
import Filtros from "../src/components/filtros/Filtros";
import LayoutPrincipal from "../src/components/layoutprincipal/LayoutPrincipal";
import Rodape from "../src/components/rodape/Rodape";


export default function Main() {
  return (
    <View className="h-full">
      <View>
        <MenuPrincipal />
      </View>
      <View>
        <Filtros />
      </View>
      <ScrollView>
        <LayoutPrincipal />
      </ScrollView>
      <View>
        <Rodape />
      </View>
    </View>
  )

}
