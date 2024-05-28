import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Review = ({ reviewText }: { reviewText: string }) => {
    return (
        <View>
            <ScrollView>
                <View className='flex-row p-3 border-b border-gray-200'>
                    <FontAwesome name='user-circle-o' size={40} color="black" />
                    <View className='flex-1 ml-4'>
                        <Text className='mb-2'>{reviewText}</Text>
                        <View className='flex-row'>
                            {Array(5).fill(null).map((_, index) => (
                                <FontAwesome key={index} name='star' size={20} color={"#FFD700"} />
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Review;