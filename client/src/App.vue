<template>
  <div id="stage">
    <section id="main-panel">
      <span>Main panel</span>
    </section>
    <section id="side-panel">
      <div id="logs"></div>
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
    </section>
  </div>
</template>
<script>
export default {
  name: 'Root',
  data(){
    return{
      chatPosting: false,
      chatText: null,
      chatLog: [],
      activityLog: [],
    }
  },
  methods: {
    onChatSubmitted(ev) {
      ev.preventDefault();
      if (this.chatText && this.chatText.trim() !== '') {
        this.chatPosting = true;
        this.chatLog.push(this.chatText);
        this.chatText = null;
        this.chatPosting = false;
      }
    }
  }
}
</script>
<style lang="scss">
@font-face {
  font-family: "Source Sans Pro";
  src: url("./assets/fonts/SourceSansPro-Regular.ttf");
}

@font-face {
  font-family: "Source Sans Pro Light";
  src: url("./assets/fonts/SourceSansPro-Light.ttf");
}

@mixin labelText {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 18px;
}

@mixin chatInputText {
  font-family: "Source Sans Pro Light", sans-serif;
  font-size: 16px;
}

@mixin panelCommons {
  margin:4px;
  padding: 6px;
  border-radius: 5px;
  background-color: #1e272e;
  box-shadow: 0 1px 4px 2px #485460;
  color: #d2dae2;
  display: flex;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#stage {
  display: flex;
  flex-direction: row;
  background-color: #808e9b;
  overflow-x: hidden;
  overflow-y: hidden;
}

#main-panel {
  width: 75vw;
  height: 99vh;
  @include panelCommons;
  justify-content: center;
  align-items: center;
}

#side-panel {
  width: 24vw;
  height: 99vh;
  @include panelCommons;
  flex-direction: column;
  justify-content: space-between;
}

@media only screen and (max-width: 720px) {
  #stage {
    flex-direction: column;
  }
  #main-panel {
    margin: 2px;
    width: 100vw;
    height: 50vh;
  }
  #side-panel {
    margin: 2px;
    width: 100vw;
    height: 49vh;
  }
}

#chat {
  background-color: #485460;
  padding: 3px;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  #chat-history{
    overflow-y: scroll;
    .chat-item {
      @include labelText;
      background-color: #d2dae2;
      border-radius: 4px;
      padding: 1px;
      margin-bottom: 4px;
      width: 50%;
      .chat-item-author {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #f53b57;
        @include labelText;
        font-size: 14px;
      }
      .chat-item-content {
        word-wrap: break-word;
        color: #1e272e;
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
    @include chatInputText;
  }
  &[type=submit] {
    margin-left:4px;
    height: 42px;
    width: 50px;
    background-color: #3c40c6;
    color: #d2dae2;
  }
}


</style>
