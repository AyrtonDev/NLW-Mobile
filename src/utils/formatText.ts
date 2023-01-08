import {AdData} from '../screens/Games'

export function formatTextAvailability(ad: AdData) {
  const days = ad.weekDays.length
  const hourS = ad.hourStart.slice(0, 2)
  const hourE = ad.hourEnd.slice(0, 2)

  return `${days} ${days > 1 ? 'dias' : 'dia'} \u2022 ${hourS}h - ${hourE}h`
}
