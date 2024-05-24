import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styled } from "nativewind";

const NotificationIcon = styled(MaterialIcons, "pt-11");

export default function MenuPrincipal() {
  return (
    <View>
      <View className="flex-row items-center justify-between px-4 py-2 bg-blue-500 h-[100px] ">
        <Text className="pt-11 text-white">FitMAte</Text>
        <Image source={require("../../img/Ellipse.png")} 
        style={{width:200}}/>
        <NotificationIcon name="notifications" size={25} color="white" />
      </View>
    </View>
  );
}
