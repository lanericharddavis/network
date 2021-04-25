<template>
  <div class="profile-page">
    <div class="text-center">
      <h1>Welcome to "This Person's" Profile Page!</h1>
    </div>
    <div class="row">
      <div class="col-11 col-md-9 order-3 order-md-2 p-5">
        <div class="card my-3 shadow text-center">
          <div class="row topper-img custom-margin">
            <!-- <img class="topper-img" src="../assets/img/fall-mtn.jpg" alt=""> -->
          </div>
          <div class="row spill-offset">
            <div class="col-12 col-md-4">
              <img class="mt-3 ml-md-2 md-img" src="//placehold.it/200x200/" alt="...">
              <h5 class="card-title ml-md-3">
                NAME
              </h5>
            </div>
            <div class="col-12 col-md-8 mt-3">
              <h4>Profile's Name</h4>
              <h4>Email</h4>
              <h4>Graduated?</h4>
            </div>
          </div>
        </div>

        <Posts class="text-center" v-for="post in state.posts" :key="post.id" :post="post" />
        <div class="col-11 d-flex justify-content-center">
          <button class="btn btn-info mx-1 mb-2" @click="getPreviousPgPosts">
            Previous
          </button>
          <button class="btn btn-info mx-1 mb-2" @click="getNextPgPosts">
            Next
          </button>
        </div>
      </div>
      <div class="col-12 col-md-3 order-2 order-md-3 text-center pt-3 mt-5">
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
  name: 'ProfilePage',
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
          await postsService.getNextPgPosts()
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.lg-img {
  height: 12rem;
  border-radius: 50%;
}
.md-img{
  height: 9rem;
  border-radius: 50%;
  border-color: aquamarine;
  border-style: solid;
  border-width: 3px;
}
.sm-img{
  height: 5rem;
  border-radius: 50%;
}
.topper-img{
height: 8rem;
background-color: #cacaca;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'%3E%3Cpath fill='%230039ff' fill-opacity='0.4' d='M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 40h-5v-2h5v-4.13a4 4 0 1 1 2 0V54h5v2h-5v15.95A10 10 0 0 0 63.66 67l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 71.95V56zm-39 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm40-40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm40 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'%3E%3C/path%3E%3C/svg%3E");
}
.spill-offset{
position: relative;
margin-top: -5rem;
}
.custom-margin{
  margin-left: 0.0005rem;
  margin-right: 0.0005rem;
}

</style>
