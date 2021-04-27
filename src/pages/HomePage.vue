<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-around">
    <div class="row">
      <div class="col-12 col-md-3 order-1 order-md-1">
        <!-- <Account v-if="state.user.id === state.profile.creator.id" /> -->
        <h4 class="mt-2">
          Welcome<br>
          To The Network!
        </h4>
      </div>
      <div class="col-11 col-md-6 order-3 order-md-2 p-5">
        <Posts v-for="post in state.posts" :key="post.id" :post="post" />
        <div class="col-11">
          <button class="btn btn-info mx-1 mb-2" @click="getPreviousPgPosts">
            Previous
          </button>
          <button class="btn btn-info mx-1 mb-2" @click="getNextPgPosts">
            Next
          </button>
        </div>
      </div>
      <div class="col-12 col-md-3 order-2 order-md-3">
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
  name: 'Home',
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
      async getNextPgPosts() {
        try {
          await postsService.getNextPgPosts()
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      },
      async getPreviousPgPosts() {
        try {
          await postsService.getPreviousPgPosts()
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
