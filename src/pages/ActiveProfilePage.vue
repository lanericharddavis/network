<template>
  <div class="profile-page">
    <h1>Welcome to Profile Page!</h1>
  </div>
  <div class="card my-3 shadow">
    <div class="row">
      <!-- <Posts v-for="post in state.posts" :key="post.id ===" :post="post" /> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProfilePage',
  props: {
    activeProfile: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
