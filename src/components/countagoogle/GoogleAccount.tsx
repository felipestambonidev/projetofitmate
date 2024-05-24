import { Text, TextInput, TouchableOpacity, View } from "react-native";
import {MaterialIcons} from "@expo/vector-icons"


export default function Account(){
    return(
        <TouchableOpacity className=" flex-row border border-gray-200 p-3 mt-4 rounded-full">
            <MaterialIcons name="accessibility" size={20} color="black" />
            <Text className="text-center flex-1 ml-2">Entrar com o Google</Text>
        </TouchableOpacity>
    )
}