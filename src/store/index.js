import { createStore } from 'vuex'
import { faqCategories } from '@/utils/db.json'

export default createStore({
  state: {
    faq: [],
    currentView: 'Home',
    currentFaq: {
      categories: 0,
      answer: 0
    }
  },
  mutations: {
    SET_FAQ(state, faqCategories) {
      state.faq = faqCategories
    },
    UPDATE_CURRENT_VIEW(state, current) {
      state.currentView = current
    },
    UPDATE_CURRENT_CATEGORIES(state, categories) {
      state.currentFaq.categories = categories
    },
    UPDATE_CURRENT_ANSWER(state, answer) {
      state.currentFaq.answer = answer
    }
  },
  actions: {
    fetchFaq(context) {
      context.commit('SET_FAQ', faqCategories)
    },
    updateCurrentView(context, current) {
      context.commit('UPDATE_CURRENT_VIEW', current)
    },
    updateCategories(context, categories) {
      context.commit('UPDATE_CURRENT_CATEGORIES', categories)
    },
    updateAnswer(context, answer) {
      context.commit('UPDATE_CURRENT_ANSWER', answer)
    }
  },
  getters: {
    $allFaq(state) {
      return state.faq
    },
    $currentViewComponent(state) {
      return state.currentView
    },
    $currentCategories(state) {
      return state.currentFaq.categories
    },
    $currentAnswer(state) {
      return state.currentFaq.answer
    }
  }
})
