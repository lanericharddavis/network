import { AppState } from '../AppState'
import { api } from './AxiosService'

class ProfileService {
  async getProfile(id) {
    const res = await api.get('api/profiles/' + id)
    AppState.activeProfile = res.data
  }

  async getProfilePosts(id) {
    const res = await api.get(`api/profiles/${id}/posts`)
    AppState.activePosts = res.data
  }
}

export const profileService = new ProfileService()
