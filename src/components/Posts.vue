<template>
  <div class="card my-3 shadow">
    <div class="row">
      <div class="col-12 col-md-4">
        <router-link :to="{name: 'ActiveProfile'}">
          <img class="mt-3" :src="post.creator.picture" alt="...">
        </router-link>
        <h5 class="card-title">
          {{ post.creator.name }}
        </h5>
      </div>
      <div class="col-12 col-md-8">
        <div class="card-body">
          <p class="card-text">
            "{{ post.body }}""
          </p>
          <p class="card-text">
            {{ post.createdAt }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Posts',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup() {}
}
</script>

<style lang="scss" scoped>
img{
  height: 5rem;
  border-radius: 50%;
}
</style>
