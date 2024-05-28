import { Link } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import MenuPrincipal from "../src/components/menuprincipal/MenuPrincipal";
import Perfil from "../src/components/perfil/Perfil";
import Rodape from "../src/components/rodape/Rodape";
import ReviewsScreen from "../src/components/screens/ReviewsScreen";

export default function Profile() {
    return (
        <View className="h-full"> 
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