<template>
  <nav class="content-box">
    <div class="content-box__nav-top-bar">
      <button @click="backToHome">
        <img src="@/assets/images/arrow-left.svg" alt="Voltar" />
      </button>
      <div>
        <div>
          <h3>{{ currentFaq.title }}</h3>
          <small>Selecione uma pergunta</small>
        </div>
        <img
          :src="require(`@/assets/images/${currentFaq.icon}`)"
          :alt="currentFaq.title"
        />
      </div>
    </div>

    <div class="content-box__faq">
      <ul>
        <li
          v-for="question in questions"
          @click="updateAnswer(question.id)"
          :key="question.id"
        >
          <p>{{ question.title }}</p>
        </li>
      </ul>
    </div>
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
    questions() {
      return this.$allFaq[this.$currentCategories].questions
    },
    currentFaq() {
      return this.$allFaq[this.$currentCategories]
    }
  },
  created() {
    this.$store.dispatch('fetchFaq')
  },
  methods: {
    updateAnswer(id) {
      // dispara o evento fetchTodos passando um parametro acessável para o vuex
      const indexFAQ = this.questions.findIndex((faq) => faq.id === id)
      console.log(this.questions, indexFAQ)
      this.$store.dispatch('updateAnswer', indexFAQ)
      this.$store.dispatch('updateCurrentView', 'About')
    },
    backToHome() {
      // dispara o evento fetchTodos passando um parametro acessável para o vuex
      this.$store.dispatch('updateCurrentView', 'Home')
    }
  }
}
</script>

<style scoped>
.content-box__nav-top-bar {
  display: grid;
  grid-template-columns: 30px 1fr;
  padding: 0 36px 0 15px;
  gap: 19px;
}

.content-box__nav-top-bar > div {
  display: grid;
  grid-template-columns: 1fr 21px;
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

.content-box__nav-top-bar div > div {
  display: grid;
  gap: 7px;
}

.content-box__nav-top-bar h3 {
  text-align: left;
  font-size: 20px;
  color: #f5f6f8;
}

.content-box__nav-top-bar small {
  text-align: left;
  font-size: 13px;
  color: #f5f6f8;
}

.content-box__faq ul {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 53px);
}

.content-box__faq ul li {
  display: grid;

  align-items: center;
  padding: 0 25px;
  grid-template-columns: 1fr;
  list-style: none;

  text-align: left;
  color: #f5f6f8;

  transition: background ease-in-out 0.2s;
}

.content-box__faq ul li:hover {
  cursor: pointer;
  background: #3f4452b3;
}
</style>
