import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Profile() {
    return(
        <View>
            <Text className="items-center bg-blue-600">Olá Profile</Text>
            <Link href="/">Ir para Home</Link>
            <Link href="/main">Ir para Main</Link>
            <Link href="/profile">Ir para Profile</Link>
            <Link href="/create-account">Ir para Create</Link>
        </View>
    )
}