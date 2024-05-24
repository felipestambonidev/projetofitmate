import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Linha from "../src/components/linha/Linha";
import MenuInicial from "../src/components/menuinicial/MenuInicial";
import Account from "../src/components/countagoogle/GoogleAccount";

export default function Page() {
  return (
    <View className=" flex-1 justify-center items-center bg-white">
      <MenuInicial />
      <View className=" w-4/5 mt-5">
        <View className="flex-row items-center border p-2 rounded-full mb-4">
          <MaterialIcons name="person" size={20} color="black" />
          <TextInput
            className="flex-1 ml-2"
            placeholder="Nome Completo"
            placeholderTextColor="black"
            autoCapitalize="words"
          />
        </View>
        <View className="flex-row items-center border p-2 rounded-full mb-4">
          <MaterialIcons name="email" size={20} color="black" />
          <TextInput
            className="flex-1 ml-2"
            placeholder="E-mail"
            placeholderTextColor="black"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View className="flex-row items-center border p-2 rounded-full mb-4">
          <MaterialIcons name="phone" size={20} color="black" />
          <TextInput
            className="flex-1 ml-2"
            placeholder="Telefone"
            placeholderTextColor="black"
            keyboardType="phone-pad"
            autoCapitalize="none"
          />
        </View>
        <View className="flex-row items-center border p-2 rounded-full mb-4">
          <MaterialIcons name="lock" size={20} color="black" />
          <TextInput
            className="flex-1 ml-2"
            placeholder="Senha"
            placeholderTextColor="black"
            secureTextEntry
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity className="bg-blue-500 mt-1 p-3  rounded-md mb-4">
          <Link href="/" className="text-center text-white">
            Criar conta FitMate
          </Link>
        </TouchableOpacity>
        <Linha />
        <Account />
      </View>
    </View>
  );
}
