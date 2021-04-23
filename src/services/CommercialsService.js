import { AppState } from '../AppState'
import { api } from './AxiosService'

class CommercialsService {
  async getAll() {
    const res = await api.get('api/ads')
    AppState.commercials = res.data
    console.log('getting all commercials', res.data)
  }
}

export const commercialsService = new CommercialsService()
