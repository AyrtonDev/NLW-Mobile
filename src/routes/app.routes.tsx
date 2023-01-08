import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from '../screens/Home'
import Games from '../screens/Games'

const {Navigator, Screen} = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen
        name="home"
        component={Home}
      />

      <Screen
        name="game"
        component={Games}
      />
    </Navigator>
  )
}
