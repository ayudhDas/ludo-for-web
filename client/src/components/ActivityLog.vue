<template>
  <div id="logs">
    <div id="log-history">
      <p class="log-entry" v-for="(entry, idx) of activityLog">
        {{`[${entry.timestamp}] ${entry.text}`}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActivityLog",
  data(){
    return{
      activityLog: [],
    };
  },
  mounted() {
  },
  destroyed() {
  }
}
</script>

<style lang="scss" scoped>
@import "../theme";
#logs {
  display: flex;
  flex-direction: column;
  height: 30%;
  #log-history {
    overflow-y: scroll;
    .log-entry {
      color: $log-line-color;
    }
  }
}
</style>
