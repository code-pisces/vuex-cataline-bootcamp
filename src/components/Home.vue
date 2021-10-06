<template>
  <nav class="content-box">
    <div class="content-box__header-nav">
      <img src="@/assets/images/astronaut.svg" alt="Astronauta" />
      <div>
        <h3>Perguntas frequentes</h3>
        <small>Escolha a categoria desejada</small>
      </div>
    </div>

    <div class="content-box__menu">
      <ul>
        <li
          v-for="question in $allFaq"
          @click="updateCategories(question.id)"
          :key="question.id"
        >
          <img
            :src="require(`@/assets/images/${question.icon}`)"
            :alt="question.title"
          />
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
    }
  },
  created() {
    this.$store.dispatch('fetchFaq')
  },
  methods: {
    updateCategories(id) {
      // dispara o evento fetchTodos passando um parametro acessável para o vuex
      this.$store.dispatch('updateCategories', id - 1)
      this.$store.dispatch('updateCurrentView', 'Faq')
    }
  }
}
</script>

<style scoped>
.content-box__header-nav {
  display: grid;
  padding: 0 36px;
  gap: 19px;
}

.content-box__header-nav > div {
  display: grid;
  gap: 7px;
}

.content-box__header-nav h3 {
  text-align: left;
  font-size: 20px;
  color: #f5f6f8;
}

.content-box__header-nav small {
  text-align: left;
  font-size: 13px;
  color: #f5f6f8;
}

.content-box__menu ul {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 53px);
}

.content-box__menu ul li {
  display: grid;
  gap: 35px;

  align-items: center;
  padding: 0 37px;
  grid-template-columns: 25px 1fr;
  list-style: none;

  text-align: left;
  color: #f5f6f8;

  transition: background ease-in-out 0.2s;
}

.content-box__menu ul li:hover {
  cursor: pointer;
  background: #3f4452b3;
}
</style>
