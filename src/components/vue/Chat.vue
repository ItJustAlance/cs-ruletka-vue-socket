<template lang="pug">
  .new-chat
    | 11111
    div(v-if='ready')
      p(v-for='user in info')
        | {{user.username}} {{user.type}}
    div(v-if='!ready')
      h4 Enter your username
      form(@submit.prevent='addUser')
        .form-group.row
          input.form-control.col-9(type='text' v-model='username' placeholder='Enter username here')
          input.btn.btn-sm.btn-info.ml-1(type='submit' value='Join')
    h2(v-else='') {{username}}
    .card.bg-info(v-if='ready')
      .card-header.text-white
        h4
          | My Chat App
          span.float-right {{connections}} connections
      ul.list-group.list-group-flush.text-right
        small.text-white(v-if='typing') {{typing}} is typing
        li.list-group-item(v-for='message in messages')
          span(:class="{'float-left':message.type === 1}")
            | {{message.message}}
            small :{{message.user}}
      .card-body
        form(@submit.prevent='send')
          .form-group
            input.form-control(type='text' v-model='newMessage' placeholder='Enter message here')
</template>

<script>
import io from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'
var socket = io('http://localhost:8080', { transport : ['websocket'] });


export default {
  name: "Chat",
  components: {},
  data(){
    return {
      newMessage: null,
      messages: [],
      typing: false,
      username: null,
      ready: false,
      info: [],
      connections: 0,
    }
  },
    created() {
      window.onbeforeunload = () => {
        socket.emit('leave', this.username);
      }

      socket.on('chat-message', (data) => {
        this.messages.push({
          message: data.message,
          type: 1,
          user: data.user,
        });
      });
      socket.on('typing', (data) => {
        this.typing = data;
      });
      socket.on('stopTyping', () => {
        this.typing = false;
      });
      socket.on('joined', (data) => {
        this.info.push({
          username: data,
          type: 'joined'
        });
        setTimeout(() => {
          this.info = [];
        }, 5000);
      });
      socket.on('leave', (data) => {
        this.info.push({
          username: data,
          type: 'left'
        });
        setTimeout(() => {
          this.info = [];
        }, 5000);
      });
      socket.on('connections', (data) => {
        this.connections = data;
      });
    },
    watch: {
      newMessage(value) {
        value ? socket.emit('typing', this.username) : socket.emit('stopTyping')
      }
    },
    methods: {
      send() {
        this.messages.push({
          message: this.newMessage,
          type: 0,
          user: 'Me',
        });
        socket.emit('chat-message', {
          message: this.newMessage,
          user: this.username
        });
        this.newMessage = null;
      },
      addUser() {
        this.ready = true;
        socket.emit('joined', this.username)
      }
    },
};


</script>

<style lang="sass">
.basic-icons
  display: flex
  +r($hd)
    width: 100%
    justify-content: space-between
  +r($sm)
    flex-wrap: wrap
  .icon
    display: inline-flex
    width: 175px
    max-width: 30%
    padding: 0 30px
    align-items: center
    margin-right: 20px
    justify-content: center
    +r($sm)
      width: 50%
      max-width: calc(50% - 20px)
      margin: 0 10px 20px
      padding: 0 10px
    +r($xs)
      width: 100%
      max-width: 150px
      margin: 0 auto 20px
    .svg-icon--ic-gun
      fill: #ADFF00
    .svg-icon--pic-clever
      fill: #FFD000
    .svg-icon--ic1
      fill: #fff
    .ic
      width: 32px
      height: 32px
      margin-right: 10px
    .svg-icon
      width: 32px
      height: 32px
  .right
    font-family: $font2
    font-size: 16px
    +r($xs)
      width: 130px
  .title
    font-family: $baseFont
    color: #B3B6C5
    padding-bottom: 3px
    font-size: 12px
  span
    color: #606377

</style>
