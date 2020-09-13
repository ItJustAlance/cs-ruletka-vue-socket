
export default {
  actions: {
    async fetchPosts(ctx, limit = 3){ // первый параметр это некоторый контекст (ctx), второй параметр, который мы уже передаем. Передаем параметр limit который по умолчанию будет равнятся 3
      // обращаемся к бэкенду, получаем список постов
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit='+ limit);
      // далее список постов получаем в переменную массив const posts = await res.json();
      const itemUser = await res.json();
      // ctx.commit('updatePosts', posts) метод коммит, передаем первый параметр мутации которую хотим вызвать  'updatePosts'
      // вторым параметром передаем то что попадает в mutations: { updatePosts(state, posts){ .. т.е. массив posts
      ctx.commit('updateItemUser', itemUser)
    }
  },
  mutations: {
    // updatePosts(state, posts){ первый параметр state, второй параметр что мы в него будем передавать
    updateItemUser(state, itemUser){
      // обращаемся к state.posts и он будет равняться массиву  posts
      state.itemUser = itemUser
    },
  },
  state: {
    itemUser: []
  },
  getters: {
    ItemsUser(state) {
      return state.itemUser
    }
  }
}
