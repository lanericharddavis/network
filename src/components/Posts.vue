<template>
  <div class="card my-3 shadow">
    <div class="row">
      <div class="col-12 col-md-4">
        <router-link :to="{name: 'Profile', params: {id: post.creatorId}}">
          <img class="mt-3" :src="post.creator.picture" alt="...">
        </router-link>
        <h5 class="card-title">
          {{ post.creator.name }}
        </h5>
      </div>
      <div class="col-12 col-md-6">
        <div class="card-body">
          <p class="card-text">
            "{{ post.body }}"
          </p>
          <p class="card-text">
            {{ post.createdAt }}
          </p>
        </div>
      </div>
      <div class="col-12 col-md-2 pb-2 d-flex align-items-end justify-content-center">
        <button class="btn btn-sm btn-outline-danger" @click="deletePost">
          delete
        </button>
        <button class="btn btn-sm btn-outline-info" @click="toggleLike">
          Like
        </button>
        <p class="text-info m-2">
          {{ post.likes.length }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'

export default {
  name: 'Posts',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
      post: computed(() => AppState.posts)
    })

    // onMounted(async() => {
    //   try {
    //     await postsService.getPostsByProfileId()
    //   } catch (error) {
    //     Notification.toast('Error: ' + error, 'error')
    //   }
    // })

    return {
      toggleLike() {
        AppState.posts.likes += 1
      },
      async deletePost() {
        try {
          await postsService.deletePost(state.post.id)
        } catch (error) {
          Notification.toast('Error ' + error, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
img{
  height: 5rem;
  border-radius: 50%;
}
</style>
