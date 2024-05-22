import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Page() {
    return(
        <View className="items-center flex-1 justify-center bg-red-700">
            <Text>Olá Mundo</Text>
            <Link href="/">Ir para Home</Link>
            <Link href="/main">Ir para Main</Link>
            <Link href="/profile">Ir para Profile</Link>
            <Link href="/create-account">Ir para Create</Link>
        </View>
    )
}