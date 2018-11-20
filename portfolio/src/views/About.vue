<template>
  <div id="about">
    <div class="section">
      <transition appear name="fade">
        <div class="main-theme">About</div>
      </transition>
    </div>
    <div class="separeter"></div>
    <div class="section">
      <transition appear name="fade">
        <div id="thumb"><img :src="image_src"></div>
      </transition>
      <transition appear name="fade">
        <div id="detail">{{ detail.text }}</div>
      </transition>
    </div>
    <div class="separeter"></div>
    <div class="section">
      <div class="sub-theme">Skill Set</div>
      <ul id="skillset">
        <li v-for="skillset in skillsets" :key="skillset.name">
          <transition appear name="fade">
            <div class="skill">
              {{ skillset.name }}
              <span v-if="skillset.some">
                <span>/</span>
                {{ skillset.some }}
              </span>
              <span v-if="skillset.other">
                <span>/</span>
                {{ skillset.other }}
              </span>
            </div>
          </transition>
        </li>
      </ul>
    </div>
    <div class="separeter"></div>
    <div class="section">
      <transition appear name="fade">
        <div class="sub-theme">Social</div>
      </transition>
      <div id="social-contents">
        <div class="social" v-for="social in socials" :key="social.name">
          <transition appear name="fade">
            <div id="social-name"><a :href="social.link">{{ social.name }}</a></div>
          </transition>
          <transition appear name="fade">
            <div id="social-icon">
              <font-awesome-icon :icon="['fab', social.icon]" />
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import abouts from '@/data/abouts.js'

export default {
  data () {
    return {
      image_src: require('../assets/me.jpg')
    }
  },
  created: function () {
    this.$parent.home = 'ABOUT'
  },
  computed: {
    detail: () => abouts.detail(),
    skillsets: () => abouts.skillsets(),
    socials: () => abouts.socials()
  }
}
</script>

<style scoped="about">
#about{
  margin-left: 450px;
  margin-top: 100px;
  margin-bottom: 100px;
}

#detail{
font-family: 'M PLUS Rounded 1c', sans-serif;
}

#skillset{
  list-style: none;
  display:inline;
}

#social-contents{
  margin-top: 30px;
}

#social-name {

}

#social-icon {
position: relative;
bottom: 22px;
}
.skill {
  font-family: 'Josefin Sans', sans-serif;
  font-size:  20px;
}
.social {
  font-family: 'Josefin Sans', sans-serif;
  font-size:  20px;
}

img {
  border-radius: 50%;
  width: 300px;
  height: 300px;
  margin-bottom: 50px;
}

a {
  display: block;
  position: relative;
  text-decoration: none;
  color: black;
  padding-left: 28px;
}

</style>
