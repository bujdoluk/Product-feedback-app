<template>
  <div class="suggestion-list">
    <div v-for="suggestion in suggestions" :key="suggestion.id">
      <SingleSuggestion :suggestion="suggestion" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, OnUpdated } from "vue";
import SingleSuggestion from "../components/SingleSuggestion.vue";

export default {
  props: ["suggestions"],
  components: { SingleSuggestion },
  setup(props) {
    onMounted(() => {});
  },
};
</script>

<style scoped>
</style>