<template>
  <div class="home">
    <img src="@/assets/logo.png" />
    <h2>📋 Re-Note</h2>
    <p>Uma aplicação de gerenciamento de notas simples</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
});
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home * {
  transition: all 200ms;
  &:hover {
    transform: scale(1.2);
  }
}
img {
  width: 200px;
}
h2 {
  margin: 1em 0 1.4em;
}
</style>
