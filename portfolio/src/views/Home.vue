<template>
  <div id="home">
    <div class="section">
      <transition appear name="fade">
        <div class="main-theme">Home</div>
      </transition>
    </div>
    <div class="separeter"></div>
    <div class="section">
      <transition appear name="fade">
        <div id="name">{{ introduction.name }}</div>
      </transition>
      <transition appear name="fade">
        <div id="jpname">{{ introduction.jpname}}</div>
      </transition>
    </div>
    <div class="separeter"></div>
    <div class="section">
      <transition appear name="fade">
        <div class="sub-theme">Introduction</div>
      </transition>
      <transition appear name="fade">
        <div id="intro">{{ introduction.text }}</div>
      </transition>
    </div>
    <div class="separeter"></div>
    <div class="section">
      <transition appear name="fade">
        <div class="sub-theme">History</div>
      </transition>
      <ul id="history">
        <li v-for="career in careers" :key="career.career">
          <transition appear name="fade">
            <div id="career">{{ career.career }}</div>
          </transition>
          <transition appear name="fade">
            <div id="date">{{ career.year }}</div>
          </transition>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import homes from '@/data/homes.js'

export default {
  created: function () {
    this.$parent.home = 'HOME'
  },
  computed: {
    introduction: () => homes.introduction(),
    careers: () => homes.careers()
  }
}
</script>

<style scoped="home">
  #home {
    margin-left: 450px;
    margin-top: 100px;
    margin-bottom: 100px;
  }

  #name {
    font-family: 'Baloo Bhaijaan', cursive;
    font-size: 50px;

  }

  #jpname {
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-size: 20px;
    letter-spacing: 5px;
  }

  #intro {
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }

  #history {
    list-style: none;
    display: inline;
  }

  #career {
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }

  #date {
    font-family: 'Baloo Bhaijaan', cursive;
    margin-bottom: 20px;
  }
</style>
