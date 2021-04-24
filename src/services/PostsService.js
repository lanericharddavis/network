import { AppState } from '../AppState'
import { api } from './AxiosService'

class PostsService {
  async getAll() {
    const res = await api.get('api/posts')
    AppState.posts = res.data.posts
    console.log('getting all posts', res.data)
  }

  // TODO figure out pages and link to next/prev button
  async getNextPgPosts() {
    const res = await api.get('api/posts?page=')
    AppState.posts = res.data.posts
    console.log('getting next pg of posts', res.data)
  }

  async getPreviousPgPosts() {
    const res = await api.get('api/posts?page=')
    AppState.posts = res.data.posts
    console.log('getting previous pg of posts', res.data)
  }

  async deletePosts(id) {
    const res = await api.findOneAndDelete({ _id: id })
    AppState.posts = res.data.posts
    console.log('deleted post', res.data)
  }
}

export const postsService = new PostsService()
