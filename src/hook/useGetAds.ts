import {AxiosError} from 'axios'
import api from '../services/api'

export async function GetAds(id: string, setData: (params: any) => void) {
  try {
    const {data} = await api.get(`games/${id}/ads`)

    const ads = data.map((item: any) => ({
      id: item?.id,
      hourEnd: item?.hourEnd,
      hourStart: item?.hourStart,
      name: item?.name,
      useVoiceChannel: item?.useVoiceChannel,
      weekDays: item?.weekDays,
      yearsPlaying: item?.yearsPlaying,
    }))

    setData(ads)
  } catch (error) {
    const err = error as AxiosError

    console.error(err)
  }
}
