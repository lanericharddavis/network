<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="row">
      <div class="col-4">
        <h4> USER INFO </h4>
        <button class="btn btn-primary">
          Edit Profile
        </button>
        <button class="btn btn-secondary">
          Create Post
        </button>
      </div>
      <div class="col-4">
        <Posts v-for="post in state.posts" :key="post.id" :post="post" />
      </div>
      <div class="col-4">
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
import { AppState } from '../AppState'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      posts: computed(() => AppState.posts),
      commercials: computed(() => AppState.commercials)
    })
    onMounted(async() => {
      try {
        await postsService.getAll()
        await commercialsService.getAll()
      } catch (error) {
        Notification.toast('Error: ' + error, 'error')
      }
    })
    return {
      state
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
