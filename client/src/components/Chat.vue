<template>
  <div id="chat">
    <div id="chat-history">
      <div class="chat-item" v-for="(text, idx) of chatLog">
        <p class="chat-item-author">asdfhjghjkshjfkljsdklfjkldsjfkljdskljfklsdjlfjlsdkfjkldsjfkljsdlkfjklsdjlkjklfjkladjslk</p>
        <p class="chat-item-content">{{text}}</p>
      </div>
    </div>
    <div id="chat-input-container">
      <form @submit="onChatSubmitted" id="chat-input-form" autocomplete="off">
        <input type="text" :autocomplete="false" placeholder="Enter text" id="chat-input-box" v-model="chatText" />
        <input type="submit" value="Go" :disabled="chatPosting" />
      </form>
    </div>
  </div>
</template>

<script>
import {scrollToBottom} from "../utils/domHelpers";
import socket from '../socket.ts';

export default {
  name: "Chat",
  data(){
    return{
      chatPosting: false,
      chatText: null,
      chatLog: [],
    }
  },
  methods: {
    onChatSubmitted(ev) {
      ev.preventDefault();
      socket.emit('chat:message', {
        text: this.chatText,
      })
      if (this.chatText && this.chatText.trim() !== '') {
        this.chatPosting = true;
        this.chatLog.push(this.chatText);
        this.chatText = null;
        this.chatPosting = false;
        this.$nextTick(() => {
          scrollToBottom('chat-history');
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../theme";
#chat {
  background-color: $chat-background-color;
  padding: 3px;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  #chat-history{
    overflow-y: scroll;
    .chat-item {
      @include labelText;
      background-color: $chat-bubble-background-color;
      border-radius: 4px;
      padding: 4px;
      margin-bottom: 4px;
      width: 50%;
      .chat-item-author {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: $red-color;
        @include labelText;
        font-size: 14px;
      }
      .chat-item-content {
        word-wrap: break-word;
        color: $chat-text-color;
      }
    }
  }
  #chat-input-container {}
}

#chat-input-form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  margin-top: 6px;
}

input {
  height: 40px;
  border: none;
  &:focus {
    outline: none;
  }
  &[type=text] {
    flex: 1;
    padding-left: 4px;
    @include chatInputPlaceholderText;
  }
  &[type=submit] {
    margin-left:4px;
    height: 42px;
    width: 50px;
    background-color: $chat-button-color;
    color: $chat-button-text-color;
  }
}
</style>
