import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import {GameController} from 'phosphor-react-native'
import {AdData} from '../../screens/Games'
import {formatTextAvailability} from '../../utils/formatText'
import {AdInfo} from '../AdInfo'
import {THEME} from '../../theme'

import {styles} from './styles'

type AdCardProps = {
  ad: AdData
  onConnect: () => void
}

export function AdCard({ad, onConnect}: AdCardProps) {
  return (
    <View style={styles.container}>
      <AdInfo
        label="Nome"
        value={ad.name}
      />

      <AdInfo
        label="Tempo de jogo"
        value={ad.yearsPlaying + ad.yearsPlaying > 1 ? 'anos' : 'ano'}
      />

      <AdInfo
        label="Disponibilidade"
        value={formatTextAvailability(ad)}
      />

      <AdInfo
        label="Chamada de áudio?"
        value={ad.useVoiceChannel ? 'Sim' : 'Não'}
        colorValue={
          ad.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onConnect}
      >
        <GameController
          color={THEME.COLORS.TEXT}
          size={20}
        />
        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  )
}
