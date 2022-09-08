import { createStore } from "vuex";

export default createStore({
  state: {
    productList: [],
  },
  getters: {
    getProductList(state) {
      return state.productList;
    },
  },
  mutations: {
    setProductList(state, payload) {
      state.productList = payload;
    },
  },
  actions: {
    async fetchProducts({ commit, state }) {
      try {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((res) => {
            commit("setProductList", res);
            console.log(state.productList);
          });
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
