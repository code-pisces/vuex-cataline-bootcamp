<template>
  <nav class="content-box">
    <div class="content-box__nav-top-bar">
      <button @click="backToAnswer">
        <img src="@/assets/images/arrow-left.svg" alt="Voltar" />
      </button>
      <div>
        <p>{{ questions[$currentAnswer].title }}</p>
      </div>
    </div>

    <div
      class="content-box__faq"
      v-html="questions[$currentAnswer].content"
    ></div>
  </nav>
</template>

<script>
export default {
  computed: {
    $allFaq() {
      return this.$store.getters.$allFaq
    },
    $currentCategories() {
      return this.$store.getters.$currentCategories
    },
    $currentAnswer() {
      return this.$store.getters.$currentAnswer
    },
    questions() {
      return this.$allFaq[this.$currentCategories].questions
    }
  },
  created() {
    this.$store.dispatch('fetchFaq')
  },
  methods: {
    backToAnswer() {
      // dispara o evento fetchTodos passando um parametro acessável para o vuex
      this.$store.dispatch('updateCurrentView', 'Faq')
    }
  }
}
</script>

<style scoped>
nav.content_box {
  grid-template-rows: 80px 1fr;
}

.content-box__nav-top-bar {
  display: grid;
  grid-template-columns: 30px 1fr;
  padding: 0 36px 0 15px;
  gap: 19px;
}

.content-box__nav-top-bar > div {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  align-items: center;
}

.content-box__nav-top-bar button {
  display: grid;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  border: none;

  width: 37px;
  height: 30px;
  background: transparent;

  transition: background 0.2s ease-in-out;
}

.content-box__nav-top-bar button:hover {
  cursor: pointer;
  background: #26282c;
}

.content-box__nav-top-bar p {
  text-align: left;
  font-size: 16px;
  color: #f5f6f8;
}

div.content-box__faq {
  height: 100%;

  padding: 50px 45px 50px 25px;

  text-align: left;
  font-size: 13px;
  color: #f5f6f8;
}
</style>
