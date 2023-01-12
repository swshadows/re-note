<template>
  <div v-if="data">
    <div v-for="d in data" :key="d.id">
      <h1>
        {{ d.title }}
      </h1>
      <p>{{ d.body }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axiosService from "@/services/axiosService";

export default defineComponent({
  setup() {
    const data = ref();
    onMounted(async () => {
      data.value = await axiosService.getAll();
    });
    return { data };
  },
});
</script>
