import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import MenuPrincipal from "../menuprincipal/MenuPrincipal";
import { Link } from "expo-router";

type Personais = {
    name: string,
    price: string,
    location: string,
    image: string,
    specialties: string[]
}

const personais: Personais[] = [
    {
        name: "Pedro Santos Souza",
        price: "R$50,00",
        location: "Guarulhos, São Paulo",
        image: require("../../img/fotodeperfil.jpg"),
        specialties: ["Funcional", "Força e Condicionamento", "Resistência Cardiovascular"],
    },
    {
        name: "Lucas Oliveira da Silva",
        price: "R$40,00",
        location: "Santos, São Paulo",
        image: require("../../img/fotodeperfil.jpg"),
        specialties: ["Treinamento de Peso Corporal e Calistenia", "Treinamento de Flexibilidade e Mobilidade"],
    },
    {
        name: "Gabriel Costa Lima",
        price: "R$90,00",
        location: "Campinas, São Paulo",
        image: require("../../img/fotodeperfil.jpg"),
        specialties: ["Crossfit", "Artes Marciais (MMA, Boxe e Muay Thai"],
    },
    {
        name: "Thiago dos Santos",
        price: "R$100,00",
        location: "São Paulo, São Paulo",
        image: require("../../img/fotodeperfil.jpg"),
        specialties: ["Corrida e Maratona", "Fitness Específicos (gestantes e atletas amadores"],
    },
    {
        name: "Mateus Rodrigues",
        price: "R$80,00",
        location: "Osasco, São Paulo",
        image: require("../../img/fotodeperfil.jpg"),
        specialties: ["Levantamento Olímpico", "Dança Fitness (Zumba, dança aeróbica"]
    },
]

const LayoutPrincipal = () => {
    return (
        <View>
            <ScrollView className="flex-1 bg-slate-100">
                <View className="">
                    {personais.map((trainer, index) => (
                        <View key={index} className="mb-2 p-4 bg-white">
                            <View className="flex-row items-center">
                                <Image source={trainer.image} className="w-20 h-20 rounded-lg mr-2" />
                                <View className="flex-1">
                                    <Text className="text-base font-bold">{trainer.name}</Text>
                                    <Text className="text-gray-600">{trainer.location}</Text>
                                    <Text className="text-font-semibold">{trainer.price}</Text>
                                </View>
                                <TouchableOpacity className="bg-blue-500 p-2  rounded-full">
                                    <Link href="../../../../profile" className="text-white font-bold">Entrar em Contato</Link>
                                </TouchableOpacity>
                            </View>
                            <View className="mt-2">
                                {trainer.specialties.map((specialty, idx) => (
                                    <Text key={idx} className="text-gray-800">
                                        {specialty}
                                    </Text>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )

}

export default LayoutPrincipal;