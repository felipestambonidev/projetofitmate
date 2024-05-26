import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Filtros() {
    return (
        <View className="py-5 flex flex-row gap-5">
            <TouchableOpacity className="pl-1">
                <Text className="border-[#F9F6F6] rounded-full w-[160px] py-1 ml-1 pl-3 bg-slate-100">
                    Guarulhos, São Paulo
                </Text>
            </TouchableOpacity>
            <TouchableOpacity className="pl-1">
                <Text className="border-[#F9F6F6] rounded-full w-[90px] py-1 pl-[20px] bg-slate-100">
                    Ordenar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity className="pl-1">
                <Text className="border-[#F9F6F6] rounded-full w-[70px] py-1 ml-1 pl-[18px] bg-slate-100">
                    Filtro
                </Text>
            </TouchableOpacity>
        </View>
    )
}