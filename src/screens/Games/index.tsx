import React, {useEffect, useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Background} from '../../components/Background'
import {useNavigation, useRoute} from '@react-navigation/native'
import {FlatList, Image, ScrollView, Text} from 'react-native'
import {TouchableOpacity, View} from 'react-native'

import logoImg from '../../assets/logo-nlw-esports.png'

import {Entypo} from '@expo/vector-icons'
import {styles} from './styles'
import {GameParams} from '../../@types/navigation'
import {GetAds} from '../../hook/useGetAds'
import {THEME} from '../../theme'
import {Heading} from '../../components/Heading'
import {AdCard} from '../../components/AdCard'

export type AdData = {
  id: string
  hourEnd: string
  hourStart: string
  name: string
  useVoiceChannel: boolean
  weekDays: string[]
  yearsPlaying: number
}

export default function Games() {
  const navigation = useNavigation()
  const route = useRoute()
  const game = route.params as GameParams

  const [ads, setAds] = useState<AdData[] | null>(null)

  useEffect(() => {
    GetAds(game.id, setAds)
  }, [])

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Background>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleGoBack}>
              <Entypo
                name="chevron-thin-left"
                color={THEME.COLORS.CAPTION_300}
                size={20}
              />
            </TouchableOpacity>

            <Image
              source={logoImg}
              style={styles.logo}
            />

            <View style={styles.right} />
          </View>

          <Image
            source={{uri: game.bannerUrl}}
            style={styles.cover}
            resizeMode="cover"
          />

          <Heading
            title={game.title}
            subTitle="Conecte-se e comece a jogar!"
          />

          <FlatList
            data={ads}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <AdCard
                ad={item}
                onConnect={() => {}}
              />
            )}
            horizontal
            style={styles.containerList}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[
              ads?.length ? styles.contentList : styles.emptyListContent,
            ]}
            ListEmptyComponent={() => (
              <Text style={styles.emptyListText}>
                Não há anúncios publicados ainda.
              </Text>
            )}
          />
        </SafeAreaView>
      </ScrollView>
    </Background>
  )
}
