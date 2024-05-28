import React from "react";
import { Link } from "expo-router";
import { View, Text, TouchableOpacity,  } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styled } from 'nativewind';

export default function Rodape () {
    return(
        <View className="bg-blue-500 p-4 flex-row justify-around">
            <TouchableOpacity className="items-center">
                <Feather name="home" size={24} color="white" />
                <Link href="/main" className="text-white">Início</Link>
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
                <Feather name="search" size={24} color="white" />
                <Text className="text-white">Busca</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
                <Feather name="menu" size={24} color="white" />
                <Text className="text-white">Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
                <Feather name="user" size={24} color="white" />
                <Text className="text-white">Perfil</Text>
            </TouchableOpacity>
        </View>
    )
}