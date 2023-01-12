<template>
  <div class="note">
    <h1>{{ note.title }}</h1>
    <p>{{ note.body }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ["note"],
});
</script>

<style lang="scss" scoped>
.note {
  border: 1px solid #2b2b2b;
  background-color: #fff;
  width: 100%;
  padding: 1.3em;
  transition: 0.1s all;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px 5px #2b2b2b;
  }
}
h1 {
  font-size: 2.4em;
  text-decoration: underline;
}
p {
  color: #787878;
}
</style>
