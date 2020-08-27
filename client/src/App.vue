<template>
  <div id="stage">
    <section id="main-panel">
      <span>Main panel</span>
    </section>
    <section id="side-panel">
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
}
</script>
<style lang="scss">
@import 'theme';
#stage {
  display: flex;
  flex-direction: row;
  background-color: $accent-color;
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
</style>
