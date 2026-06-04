import { View, Text, Image } from 'react-native'
import React from 'react'

const UpcomingSubscriptionCard = ({ name, price, daysLeft, icon }: UpcomingSubscription) => {
    return (
        <View className="upcoming-card">
            <View className="upcoming-row">
                <Image source={icon} className="upcoming-icon" />
                <View>
                    <Text className="upcoming-price">{price}</Text>
                    <Text className="upcoming-meta">
                        {daysLeft > 1 ? `${daysLeft} days left` : `Last Day`}
                    </Text>
                </View>
            </View>

            <Text className="upcoming-name">{name}</Text>
        </View>
    )
}

export default UpcomingSubscriptionCard