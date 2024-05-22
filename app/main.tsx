import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Main() {
    return(
        <View>
            <Text className="items-center bg-yellow-400">Olá Main</Text>
            <Link href="/">Ir para Home</Link>
            <Link href="/main">Ir para Main</Link>
            <Link href="/profile">Ir para Profile</Link>
            <Link href="/create-account">Ir para Create</Link>
        </View>
    )
}