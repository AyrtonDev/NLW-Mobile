import {useNavigation} from '@react-navigation/native'
import React, {useEffect, useState} from 'react'
import {Image, FlatList, ScrollView} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import logoImg from '../../assets/logo-nlw-esports.png'
import {Background} from '../../components/Background'
import {GameCard} from '../../components/GameCard'
import {Heading} from '../../components/Heading'
import {GetGames} from '../../hook/useGetGames'

import {styles} from './styles'

type GamesData = {
  id: string
  title: string
  bannerUrl: string
  ads: number
}

export default function () {
  const navigation = useNavigation()
  const [games, setGames] = useState<GamesData[] | null>(null)

  useEffect(() => {
    GetGames(setGames)
  }, [])

  function handleOpenGame({id, title, bannerUrl}: GamesData) {
    navigation.navigate('game', {id, title, bannerUrl})
  }

  return (
    <Background>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Image
            source={logoImg}
            style={styles.logo}
          />

          <Heading
            title="Encontre seu duo!"
            subTitle="Selecione o game que deseja jogar..."
          />

          <FlatList
            data={games}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <GameCard
                id={item.id}
                name={item.title}
                ads={item.ads}
                cover={item.bannerUrl}
                onPress={() => handleOpenGame(item)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentList}
          />
        </SafeAreaView>
      </ScrollView>
    </Background>
  )
}
