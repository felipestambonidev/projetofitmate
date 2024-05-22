import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Page() {
  return (
    <View className=" flex-1 justify-center items-center bg-white">
      <View className="  w-4/5 mt-5">
        <View className="flex-row items-center border p-2 rounded-full mb-4">
          <MaterialIcons name="person" size={20} color="black" />
          <TextInput
            className="flex-1 ml-2"
            placeholder="Nome Completo"
            autoCapitalize="words"
          />
        </View>
        <View className="flex-row items-center border p-2 rounded-full mb-4">
          <MaterialIcons name="email" size={20} color="black" />
          <TextInput
            className="flex-1 ml-2"
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View className="flex-row items-center border p-2 rounded-full mb-4">
          <MaterialIcons name="phone" size={20} color="black" />
          <TextInput
            className="flex-1 ml-2"
            placeholder="Telefone"
            keyboardType="phone-pad"
            autoCapitalize="none"
          />
        </View>
        <View className="flex-row items-center border p-2 rounded-full mb-4">
            <MaterialIcons name="lock" size={20} color="black" />
            <TextInput 
            className="flex-1 ml-2"
            placeholder="Senha"
            secureTextEntry
            autoCapitalize="none"
            />
        </View>
      </View>
    </View>
  );
}
