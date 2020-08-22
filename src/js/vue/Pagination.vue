<template>
<div class="pagination">
      <div class="pagination__left">
       
		<router-link :to="{name: 'paginationNews', params: {idBlog: prevPage}}">&lt;</router-link>
      </div>
      <div class="pagination__mid">
        <ul>
         
		  <li v-if="hasFirst()"><router-link :to="{name: 'paginationNews', params: {idBlog: '1'}}">1</router-link></li>
          <li v-if="hasFirst()">...</li>
          <li v-for="(page, index) in pages">
			<router-link :to="{name: 'paginationNews',  params: {idBlog: page}}">{{ page }}</router-link>
          </li>
          <li v-if="hasLast()">...</li>
		  <li v-if="hasLast()"><router-link :to="{name: 'paginationNews', params: {idBlog: totalPages }}">{{ totalPages }}</router-link></li>
        </ul>
      </div>
      <div class="pagination__right">
        <router-link :to="{name: 'paginationNews', params: {idBlog: nextPage}}">&gt;</router-link>
      </div>
    </div>  
</template>

<script>
export default {
  name: 'Pagination',

   props: {
    current: {
      type: Number,
      default:1
    },
    total: {
      type: Number,
      default: 0
    },
    perPage: {
      type: Number,
      default: 9
    },
    pageRange: {
      type: Number,
      default: 2
    },
    page: {
      type: Number,
      default: 1
    },
  },
  computed: {
    pages: function() {
      var pages = []
		page = 2
		for(var i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i)
      }
	    this.$emit('page-changed', page)
      return pages
    },
    rangeStart: function() {
      var start = this.current - this.pageRange
      return (start > 0) ? start : 1
    },
    rangeEnd: function() {
      var end = this.current + this.pageRange
      return (end < this.totalPages) ? end : this.totalPages
    },
    totalPages: function() {
      return Math.ceil(this.total/this.perPage)
    },
    nextPage: function() {
      return this.current + 1
    },
    prevPage: function() {
      return this.current - 1
    }
  },
  methods: {
    hasFirst: function() {
      return this.rangeStart !== 1
    },
    hasLast: function() {
      return this.rangeEnd < this.totalPages
    },
    hasPrev: function() {
      return this.current > 1
    },
    hasNext: function() {
      return this.current < this.totalPages
    },
    changePage: function(page) {
        this.$emit('page-changed', page)
    }
  },
};
</script>

<style scoped>

/* Фотокарточки */
.card {
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0,0,0,.2);
  border-radius: 2px;
  line-height: 0;
  cursor: pointer;
}

.card:hover {
  box-shadow: 0 3px 6px rgba(0,0,0,.2)
}

.card__body {
  width: 100%;
  height: 215px;
  overflow: hidden;
  background-color: #eee;
}

.card__body img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card__footer {
  width: 100%;
  padding: 10px 15px;
}

.media__obj {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #d8d8d8;
  margin-right: 15px;
  float: left;
}

.media__body {
  width: 100%;
  height: 32px;
  line-height: 32px;
}

.media__body a {
  font-family: Courier, serif;
  font-size: 15px;
  color: #999;
}

.media__body a:hover {
  text-decoration: none;
}
</style>
