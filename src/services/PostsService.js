import { AppState } from '../AppState'
import { api } from './AxiosService'

class PostsService {
  async getAll() {
    const res = await api.get('api/posts')
    AppState.posts = res.data.posts
    console.log('getting all posts', res.data)
  }

  async getByProfileId(id) {
    const res = await api.get('api/profiles/' + id)
    AppState.profile = res.data
    console.log('getting profile by Id', res.data)
  }

  async getPostsByProfileId(id) {
    const res = await api.get(`api/profiles/${id}/posts`)
    AppState.profile = res.data
    console.log('getting posts by profile Id', res.data)
  }

  // TODO figure out pages and link to next/prev button
  async getNextPgPosts() {
    console.log('clicked next pg')
    const res = await api.get('api/posts?page=newer')
    AppState.nextPgPosts = res.data.posts
    console.log('getting next pg of posts', res.data)
  }

  async getPreviousPgPosts() {
    console.log('clicked previous pg')
    const res = await api.get('api/posts?page=older')
    AppState.previousPgPosts = res.data.posts
    console.log('getting previous pg of posts', res.data)
  }

  async deletePost(id) {
    console.log('Delete Button Pressed', id)
    await api.delete('api/posts/' + id)
    AppState.posts = AppState.posts.filter(post => post.id !== id)
    console.log('deleted post')
  }

  async createPost(data) {
    console.log('Post Button Pressed', data)
    const res = await api.post('api/posts', data)
    const refresh = await api.get('api/posts')
    AppState.posts.push(res.data)
    AppState.posts = refresh.data.posts
    console.log('Post Created', res.data)
  }

  async likePost(id) {
    console.log('like clicked', id)
    const res = await api.post(`api/posts/${id}/like`)
    const post = AppState.posts.find(p => p.id === id)
    const refresh = await api.get('api/posts')
    post.likes = res.data.likes
    AppState.posts = refresh.data.posts
    console.log('like/unlike successful', post.likes)
  }
}

export const postsService = new PostsService()
