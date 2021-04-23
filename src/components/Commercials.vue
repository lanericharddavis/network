<template>
  <div class="commercials col-md-12">
    <div class=" position-relative" v-if="commercial">
      <img :src="commercial.tall" alt="">
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

</style>
