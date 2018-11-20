<template>
  <div id="sidemenu">
    <div id="sidemenu-title">Portfolio</div>
    <div id="nav-contents">
      <router-link v-for="menu in menus" :key="menu.id" :to="menu.path">
        <div id="link" @click="isSelect(menu.name)">{{ menu.name }}</div>
        <transition name="mark" >
        <div id="nav-mark"  v-if="isCurrent(menu.name)" :key="menu.name"></div>
      </transition>
      </router-link>
    </div>
  </div>
</template>

<script>
import sidemenus from '@/data/sidemenus.js'

export default {
  props: {
    name: String
  },
  computed: {
    current: function () {
      return this.name
    },
    menus: () => sidemenus.menus()
  },
  methods: {
    isSelect: function (name) {
      this.current = name
    },
    isCurrent: function (name) {
      return this.current === name
    }
  }
}
</script>

<style scoped="sidemenu">
#sidemenu {
  width: 300px;
  position: fixed;
  height: 100%;
  overflow: hidden;
  background-color: #808080;
}

#sidemenu-title {
  margin-top: 70px;
  margin-left: 40px;
  font-family: 'Spicy Rice', cursive;
  font-size: 55px;
  color: white;
}

#nav-contents {
  margin-top: 70px;
}

#link {
font-weight: 700;
font-family: 'Montserrat', sans-serif;
letter-spacing: 5px;
font-size: 20px;
color: white;
}

#nav-mark {
  position: absolute;
  border:solid 5px;
  border-radius: 5px;
  color: black;
  bottom: 10px;
  left: 60px;
  top: 7px;
  margin: auto;
}

a{
  text-decoration: none;
  margin-bottom: 75px;
  padding-left: 100px;
  display: block;
  position: relative;
}

.mark-enter-active,
.mark-leave-active {
  transition: opacity 1.0s;
}

.mark-enter,
.mark-leave-to {
  opacity: 0;
}

</style>
