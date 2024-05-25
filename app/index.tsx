import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Linha from "../src/components/linha/Linha";
import MenuInicial from "../src/components/menuinicial/MenuInicial";
import Account from "../src/components/countagoogle/GoogleAccount";

export default function Page() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <MenuInicial />
      <View className="w-4/5 mt-5 pt-44">
        <View className="flex-row items-center border p-2 rounded-full mb-4">
          <MaterialIcons name="person" size={20} color="black" />
          <TextInput
            className="flex-1 ml-2"
            placeholder="Número de Telefone / E-mail"
            placeholderTextColor="black"
            autoCapitalize="words"
          />
        </View>
        <View className="flex-row items center border p-2 rounded-full mb-4">
          <MaterialIcons name="key" size={20} color="black" />
          <TextInput
            className="flex-1 ml-2"
            placeholder="Digite a sua senha"
            placeholderTextColor="black"
            secureTextEntry
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity>
          <Text className="text-right text-blue-500 font mb-4 pr-2">
            Esqueci a minha senha
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-blue-500 p-3 rounded-full">
          <Link href="/main" className="text-center text-white">
            Entrar
          </Link>
        </TouchableOpacity>

        <TouchableOpacity className="border border-blue-500 p-3 mt-4 mb-4 rounded-full">
          <Link href="/create-account" className="text-blue-500 text-center">
            Criar Conta FitMate
          </Link>
        </TouchableOpacity>

        <Linha />
        <Account />
      </View>
    </View>
  );
}
