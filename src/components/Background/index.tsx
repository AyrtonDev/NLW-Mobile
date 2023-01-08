import {ReactNode} from 'react'
import {ImageBackground} from 'react-native'

import backgroundImg from '../../assets/background-galaxy.png'

import {styles} from './styles'

type Props = {
  children?: ReactNode
}

export function Background({children}: Props) {
  return (
    <ImageBackground
      source={backgroundImg}
      defaultSource={backgroundImg}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  )
}
