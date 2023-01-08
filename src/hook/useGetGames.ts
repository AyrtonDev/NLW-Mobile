import {AxiosError} from 'axios'
import api from '../services/api'

export async function GetGames(setData: (params: any) => void) {
  try {
    const {data} = await api.get('/games')

    const body = data?.map((item: any) => ({
      id: item?.id,
      title: item?.title,
      bannerUrl: item?.bannerUrl,
      ads: item?._count?.ads,
    }))

    console.log(data)

    setData(body)
  } catch (error) {
    const err = error as AxiosError
  }
}
