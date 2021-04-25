import { AppState } from '../AppState'
import { api } from './AxiosService'

class PostsService {
  async getAll() {
    const res = await api.get('api/posts')
    AppState.posts = res.data.posts
    console.log('getting all posts', res.data)
  }

  async getByProfileId(id) {
    const res = await api.get('api/profiles/:id')
    AppState.profile = res.data
    console.log('getting profile by Id', res.data)
  }

  async getPostsByProfileId(id) {
    const res = await api.get('api/profiles/:id/posts')
    AppState.profile = res.data
    console.log('getting posts by profile Id', res.data)
  }

  // TODO figure out pages and link to next/prev button
  async getNextPgPosts() {
    console.log('clicked next pg')
    const res = await api.get('api/posts?page=newer')
    AppState.posts = res.data.posts
    console.log('getting next pg of posts', res.data)
  }

  async getPreviousPgPosts() {
    console.log('clicked previous pg')
    const res = await api.get('api/posts?page=older')
    AppState.posts = res.data.posts
    console.log('getting previous pg of posts', res.data)
  }

  async deletePosts(id) {
    const res = await api.findOneAndDelete({ _id: id })
    AppState.posts = res.data.posts
    console.log('deleted post', res.data)
  }

  // async create(data) {
  //   const res = await api.post('api/posts', data)
  //   router.push({ name: 'ProjectDetails', params: { id: res.data.id } })
  //   // this.getAll()
  // }
}

export const postsService = new PostsService()
