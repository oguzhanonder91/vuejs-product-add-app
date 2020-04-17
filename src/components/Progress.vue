<template>
  <div class="progress">
    <div class="progress-bar bg-info" role="progressbar" :style="{width: count*10 + '%'}" aria-valuenow="50" aria-valuemin="0"
         aria-valuemax="100">
      {{count}} / 10
    </div>
  </div>
</template>

<script>
  import {eventBus} from '../main';

  export default {
    name: "Progress",
    data() {
      return {
        count: 0
      }
    },
    created() {
      eventBus.$on("progressUpdated", (count) => {
        this.count = count;
      })
    }
  }
</script>

<style scoped>

</style>
