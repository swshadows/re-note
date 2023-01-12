<template>
  <div v-if="data" class="note-wrapper">
    <NoteItem @fetch-all="fetchAll" v-for="d in data" :key="d._id" :note="d" />
  </div>
  <div v-else-if="data == false">
    <span>Nenhuma nota encontrada</span>
  </div>
  <div v-else>
    <span class="spinner"></span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import NoteItem from "@/components/NoteItem.vue";
import axiosService from "@/services/axiosService";

const data = ref();
onMounted(async () => {
  await fetchAll();
});
async function fetchAll() {
  data.value = await axiosService.getAll();
}
</script>

<style lang="scss" scoped>
@import "@/scss/_colors.scss";

.note-wrapper {
  margin: 0 auto 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 40%;
}

.spinner {
  margin-top: 25vh;
  width: 100px;
  height: 100px;
  border: 3px solid $color;
  border-right-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: spin 1s infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
