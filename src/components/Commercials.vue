<template>
  <div class="commercials col-md-12 my-3">
    <div class=" position-relative" v-if="commercial">
      <img :src="commercial.square" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Commercials',
  props: {
    commercial: {
      type: Object,
      required: true
    }
  },
  setup() {}
}
</script>

<style lang="scss" scoped>
img{
  height: 15rem;
}
</style>
