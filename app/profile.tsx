import { Link } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import MenuPrincipal from "../src/components/menuprincipal/MenuPrincipal";
import Perfil from "../src/components/perfil/Perfil";
import Rodape from "../src/components/rodape/Rodape";

export default function Profile() {
    return (
        <View>
            <View>
                <MenuPrincipal />
            </View>
            <ScrollView>
                <Perfil />
            </ScrollView>
            <View>
                <Rodape />
            </View>
        </View>
    )
}