import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Page() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <View className="w-4/5 mt-5">
        <TextInput
          className="border p-2 rounded- mb-4"
          placeholder="Número de telefone / E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          className="border p-2 rounded-full mb-4"
          placeholder="Senha"
          secureTextEntry
          autoCapitalize="none"
        />

        <TouchableOpacity>
          <Text className="text-right text-blue-500 mb-4">
            Esqueci minha senha
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-blue-500 p-3 rounded-md mb-4">
          <Text className="text-center text-white">Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity className="border border-blue-500 p-3 rounded-md mb-4">
          <Link href="/create-account"className="text-center text-blue-500">Criar conta FitMate</Link>
        </TouchableOpacity>

        <TouchableOpacity className="border border-gray-300 p-3 rounded-md flex flex-row justify-center items-center">
          <Text className="text-gray-500">Entrar com o Google</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity className="mt-4">
        <Text className="text-blue-500">Preciso de ajuda</Text>
      </TouchableOpacity>
    </View>
  );
}
