<template>
  <div class="card my-3 shadow">
    <div class="row">
      <div class="col-12 col-md-4">
        <router-link :to="{name: 'ActiveProfilePage'}">
          <img class="mt-3" :src="post.creator.picture" alt="...">
        </router-link>
        <h5 class="card-title">
          {{ post.creator.name }}
        </h5>
      </div>
      <div class="col-12 col-md-6">
        <div class="card-body">
          <p class="card-text">
            "{{ post.body }}""
          </p>
          <p class="card-text">
            {{ post.createdAt }}
          </p>
        </div>
      </div>
      <div class="col-12 col-md-2 pb-2 d-flex align-items-end">
        <button class="btn btn-sm btn-outline-info">
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
