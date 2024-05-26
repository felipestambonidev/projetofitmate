import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styled } from 'nativewind';

export default function Rodape () {
    return(
        <View className="bg-gray-200 p-4 flex-row justify-around">
            <TouchableOpacity className="items-center">
                <Feather name="home" size={24} color="gray" />
                <Text className="text-black">Início</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
                <Feather name="search" size={24} color="gray" />
                <Text className="text-black">Busca</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
                <Feather name="menu" size={24} color="gray" />
                <Text className="text-black">Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
                <Feather name="user" size={24} color="gray" />
                <Text className="text-black">Perfil</Text>
            </TouchableOpacity>
        </View>
    )
}