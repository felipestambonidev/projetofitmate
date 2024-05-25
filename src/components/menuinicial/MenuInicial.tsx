import React from "react";
import { View, Text, Image } from "react-native";


export default function MenuInicial() {
    return (
        <View className="bg-blue-500 w-full h-[350px] absolute -top-[120] flex items-center  rounded-bl-full rounded-br-full ">
            <Image source={require("../../img/LogoFitMate.png")} style={{width: 200, transform:[{scale: 0.7}]}} />
        </View>
    )
}