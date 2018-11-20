<template>
  <div id="app">
    <SideMenu v-bind:name="home"/>
    <div id="contents">
      <router-view/>
    </div>
  </div>
</template>

<script>
import SideMenu from './components/SideMenu'

export default {
  components: {
    SideMenu
  },
  data () {
    return {
      home: ''
    }
  }
}
</script>

<style>
body {
  background-color: #808080;
}

#app {
  display: flex;
  height: 100%;
  width: 95%;
  position: relative;
  position: fixed;
}

#contents {
  flex: 1;
  min-width: 0px;
  height: 100vh;
  overflow-y: auto;
  background-color: #dfdfdf;
}

.main-theme {
  font-family: 'Baloo Bhaijaan', cursive;
  font-size: 40px;
}

.sub-theme {
  font-family: 'Baloo Bhaijaan', cursive;
  font-size: 30px;
}

.separeter {
  width: 30px;
  height: 5px;
  margin: 40px 0px;
}

.section {}

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1.0s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
