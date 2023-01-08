import React from 'react'
import {ColorValue, View, Text} from 'react-native'
import {THEME} from '../../theme'

import {styles} from './styles'

type AdInfoProps = {
  label: String
  value: string
  colorValue?: ColorValue
}

export function AdInfo({
  label,
  value,
  colorValue = THEME.COLORS.TEXT,
}: AdInfoProps) {
  return (
    <View style={styles.container}>
      <Text
        style={styles.label}
        numberOfLines={1}
      >
        {label}
      </Text>

      <Text style={[styles.value, {color: colorValue}]}>{value}</Text>
    </View>
  )
}
