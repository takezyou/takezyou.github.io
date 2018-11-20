<template>
  <div id="works">
    <div class="section">
      <transition appear name="fade">
        <div class="main-theme">Works</div>
      </transition>
    </div>
  </div>
</template>

<script>
import works from '@/data/works.js'

export default {
  created: function () {
    this.$parent.home = 'WORKS'
  },
  computed: {
    detail: () => works.works()
  }
}
</script>

<style>
#works {
  margin-left: 450px;
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
