import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Review from '../card/Review';

const reviews = [
    "Graças ao Pedro, meu treinamento funcional tornou-se mais eficaz e divertido. Sua atenção aos detalhes e variedade de exercícios mantiveram-me motivado durante cada sessão.",
    "O treinamento de força com o Pedro foi desafiador e gratificante. Sua abordagem personalizada me ajudou a superar minhas limitações anteriores e alcançar novos níveis de força e resistência.",
    "O treinamento de força com o Pedro foi desafiador e gratificante. Sua abordagem personalizada me ajudou a superar minhas limitações anteriores e alcançar novos níveis de força e resistência."
];

const ReviewsScreen = () => {
    return (
        <ScrollView className='flex-1 p-4 bg-gray-100'>
            <Text className='text-xl font-bold mb-4'>Avaliações</Text>
            <View className='border border-gray-200 p-4 rounded-md'>
                {reviews.map((review, index) => (
                    <Review key={index} reviewText={review} />
                ))}
            </View>
        </ScrollView>
    );
};

export default ReviewsScreen;