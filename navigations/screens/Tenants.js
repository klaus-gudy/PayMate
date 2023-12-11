import { View, Text, Button } from 'react-native'
import React from 'react'

const Tenants = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Property Screen"
        onPress={() => navigation.navigate('Property')}
        //remove this and place it in the landing page
      />
    </View>
  )
}

export default Tenants