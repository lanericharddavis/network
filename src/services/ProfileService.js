import { AppState } from '../AppState'
import { api } from './AxiosService'

class ProfileService {
  async getByProfileId() {
    const res = await api.get('api/profiles/:id')
    AppState.profile = res.data
  }
}

export const profileService = new ProfileService()
