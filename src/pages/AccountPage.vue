<template>
  <div class="account flex-grow-1 d-flex flex-column align-items-center justify-content-around">
    <div class="row">
      <div class="text-center col-12 col-md-3 order-1 order-md-1">
        <h1>Welcome<br> {{ account.name }}</h1>
        <img class="rounded" :src="account.picture" alt="" />
        <p>{{ account.email }}</p>
        <button class="btn btn-primary">
          Edit Profile
        </button>
        <button class="btn btn-secondary">
          Create Post
        </button>
      </div>
      <div class="col-11 col-md-6 order-3 order-md-2 pl-5 text-center">
        <Posts v-for="post in state.posts" :key="post.id" :post="post" />
        <div class="col-11">
          <button class="btn btn-info mx-1 mb-2">
            Previous
          </button>
          <button class="btn btn-info mx-1 mb-2">
            Next
          </button>
        </div>
      </div>
      <div class="col-12 col-md-3 order-2 order-md-3 text-center">
        <Commercials v-for="commercial in state.commercials" :key="commercial.title" :commercial="commercial" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import Notification from '../utils/Notification'
import { postsService } from '../services/PostsService'
import { commercialsService } from '../services/CommercialsService'
// import { accountService } from '../services/AccountService'
import { AppState } from '../AppState'

export default {
  name: 'Account',
  setup() {
    const state = reactive({
      posts: computed(() => AppState.posts),
      commercials: computed(() => AppState.commercials)
      // account: computed(() => AppState.account)
    })
    onMounted(async() => {
      try {
        await postsService.getAll()
        await commercialsService.getAll()
        // await accountService.getAccount()
      } catch (error) {
        Notification.toast('Error: ' + error, 'error')
      }
    })
    return {
      state,
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
