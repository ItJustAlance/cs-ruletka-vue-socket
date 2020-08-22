<template lang="pug">
  section
    h1.title {{h1}}

</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      h1: 'ЖОПАААААААААА!'
    }
  },
  components: {
//    TodoList
  },
  methods: {
    deleteTodo(index){
      this.todos.splice(index, 1);
    }
  }
}

</script>

<style scoped>


/* Галерея */
.grid {
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
}

.grid__item {
  width: 30%;
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0 20px 40px;
}

</style>
