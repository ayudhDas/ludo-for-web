<template>
  <div id="stage">
    <section v-if="!gameReady" id="start-menu">
      <div class="menu-card debug">
        <div class="hero">
          <h2>Ludo For Web</h2>
        </div>
        <form class="debug" @submit="menuSubmit">
          <div class="debug field-row">
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Enter username" />
            <p class="validation-result">Validation text here</p>
          </div>
          <div class="debug field-row">
            <label for="game-room">Enter room code</label>
            <input type="text" id="game-room" placeholder="Enter room code..." />
            <p class="validation-result">Validation text here</p>
          </div>
          <div class="field-row">
            <button>New Game</button>
            <p class="separator">--or--</p>
            <button>Join Game</button>
          </div>
        </form>
      </div>
    </section>
    <section v-if="gameReady" id="main-panel">
      <span>Main panel</span>
    </section>
    <section v-if="gameReady" id="side-panel">
      <ActivityLog></ActivityLog>
      <Chat></Chat>
    </section>
  </div>
</template>
<script>
import Chat from "./components/Chat.vue";
import ActivityLog from "./components/ActivityLog";
export default {
  name: 'Root',
  components: {ActivityLog, Chat},
  data() {
    return {
      gameReady: false,
    }
  },
  methods: {
    menuSubmit(ev) {
      ev.preventDefault();
    }
  }
}
</script>
<style lang="scss">
@import 'theme';
.debug {
  //border: 1px solid red;
}
#stage {
  display: flex;
  flex-direction: row;
  background-color: $accent-color;
  overflow-x: hidden;
  overflow-y: hidden;
}

#start-menu {
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  .menu-card {
    padding-top: 20px;
    padding-bottom: 30px;
    width: 480px;
    display: flex;
    flex-direction: column;
    background-color: $chat-background-color;
    color: $chat-button-text-color;
    .hero {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    .field-row {
      padding: 14px 8px 4px 8px;
      display: flex;
      flex-direction: column;
      label {
        font-weight: bold;
      }
      input[type=text] {
        border: none;
        line-height: 2rem;
        padding-left: 8px;
      }
      button {
        line-height: 2.5rem;
      }
      .validation-result {
        font-style: italic;
      }
      .separator {
        margin-top: 4px;
        margin-bottom: 4px;
        text-align: center;
      }
    }
  }
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
</style>
