import React from "react";
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { styled } from "nativewind";
import ReviewsScreen from "../screens/ReviewsScreen";

export default function Perfil() {
    return (
        <View>
            <ScrollView>
                <View className="items-center">
                    <Image source={require("../../img/fotodeperfilmaior.jpg")} style={{ width: 400, height: 200 }} />
                </View>
                <View className="mt-2 items-center">
                    <Text className="mt-2 text-lg">Nome do Personal</Text>
                    <Text className="mt-2 bg-slate-200 p-3 rounded-full">Atende em Guarulhos, São Paulo</Text>
                </View>
                <View className="mt-2 flex-row justify-around items-center">
                    <TouchableOpacity className="flex-row items-center bg-slate-200 pl-7 w-40 rounded-full">
                        <FontAwesome name="whatsapp" size={24} color="green" />
                        <Text className="p-3">WhatsApp</Text>
                    </TouchableOpacity>
                    <View className="bg-slate-200 py-3 rounded-full items-center w-40 ">
                        <Text>R$50,00</Text>
                    </View>
                </View>
                <View className="bg-slate-100 mt-5 pl-3 p-3 pb-5 ">
                    <Text className="text-xl font-bold">Descrição</Text>
                    <Text className="pt-3">Olá! Sou (Nome do Personal), seu personal trainer comprometido em ajudá-lo a alcançar seus objetivos de condicionamento físico e bem-estar. Estou aqui para orientá-lo em sua jornada de transformação.</Text>
                </View>
                <View>
                    <ReviewsScreen />
                </View>
            </ScrollView>
        </View>
    )
}