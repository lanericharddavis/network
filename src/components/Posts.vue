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
            <img v-if="post.img" src="post.imgUrl" alt="">
          </p>
        </div>
      </div>
    </div>
    <div class="row justify-content-around">
      <div class="col-3 d-flex align-items-center mr-5">
        <button class="btn btn-sm btn-outline-info" @click="likePost(post.id)">
          Like
        </button>
        <p class="text-info m-2">
          {{ post.likes.length }}
        </p>
      </div>
      <div class="col-3">
        <button v-if="state.account.id==post.creatorId" class="btn btn-sm btn-outline-danger" @click="deletePost">
          delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
import Notification from '../utils/Notification'

export default {
  name: 'Posts',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      post: computed(() => AppState.posts),
      account: computed(() => AppState.account)
      // props here and put a v-if on the delete button to hide button
      // AppState accountID compare to usersID
    })

    // onMounted(async() => {
    //   try {
    //     await postsService.getPostsByProfileId(route.params.id)
    //   } catch (error) {
    //     Notification.toast('Error: ' + error, 'error')
    //   }
    // })

    return {
      state,
      // route,
      async likePost() {
        try {
          await postsService.likePost(props.post.id)
        } catch (error) {
          Notification.toast('Musted be logged in to Like Stuff')
        }
      },
      async deletePost() {
        try {
          await postsService.deletePost(props.post.id)
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
