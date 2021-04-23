<template>
  <div class="card my-3 shadow">
    <div>
      <img class="mt-3" :src="post.creator.picture" alt="...">
      <h5 class="card-title">
        {{ post.creator.name }}
      </h5>
    </div>
    <div class="card-body">
      <p class="card-text">
        "{{ post.body }}""
      </p>
      <p class="card-text">
        {{ post.createdAt }}
      </p>
      <button class="btn btn-danger">
        Delete
      </button>
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
  height: 3rem;
  border-radius: 50%;
}
</style>
