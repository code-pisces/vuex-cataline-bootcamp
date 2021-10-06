<template>
  <div class="container">
    <transition
      appear
      mode="out-in"
      enter-active-class="animate__animated animate__fadeInRight"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <component :is="$currentViewComponent" />
    </transition>
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
import Faq from '@/components/Faq.vue'
import About from '@/components/About.vue'

export default {
  components: {
    Home,
    Faq,
    About
  },
  computed: {
    $currentViewComponent() {
      return this.$store.getters.$currentViewComponent
    }
  },
  created() {
    this.$store.dispatch('updateCurrentView', 'Home')
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
  display: grid;
  grid-template-columns: 305px;
  grid-template-rows: 457px;

  align-content: center;
  justify-content: center;
}

.content-box {
  display: grid;
  align-items: center;
  background: linear-gradient(180deg, #404451 0%, #26282c 100%);
  padding: 6px;
  border-radius: 15px;
  box-shadow: #3f445266 0 10px 30px;
}

.animate__animated.animate__fadeOut,
.animate__animated.animate__fadeInRight {
  --animate-duration: 0.4s;
}
</style>
