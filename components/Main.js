import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { gStyle } from '../styles/style'

export default function Main({ navigation }) {
  const loadScene = () => {
    navigation.navigate('Contacts')
  }

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Главная страница</Text>
      <Button title="Открыть другую страницу" onPress={loadScene} />
    </View>
  )
}

const styles = StyleSheet.create({})
