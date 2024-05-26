import { Stack } from "expo-router/stack";
import "./global.css"

export default function Layout () {
    return(
        <Stack screenOptions={{
            headerShown: false,
            contentStyle: {
                backgroundColor: 'transparent'
            },
        }}>
        <Stack.Screen name="index"/>
        <Stack.Screen name="main"/>
        <Stack.Screen name="profile"/>
        <Stack.Screen name="create-account"/>
        <Stack.Screen name="usuario" />
        </Stack>
    )
}