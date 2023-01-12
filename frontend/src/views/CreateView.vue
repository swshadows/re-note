<template>
  <form @submit.prevent="handleForm">
    <label>
      <p>Titulo:</p>
      <input
        type="text"
        placeholder="Insira o titulo da nota"
        required
        v-model="title"
      />
    </label>
    <label>
      <p>Corpo:</p>
      <input
        type="text"
        placeholder="Insira o conteudo da nota"
        required
        v-model="body"
      />
    </label>
    <button>Submit</button>
  </form>
  <div class="result" v-if="show">{{ result }}</div>
</template>

<script setup lang="ts">
import axiosService from "@/services/axiosService";
import { ref } from "vue";

const title = ref("");
const body = ref("");
const result = ref("");
const show = ref(false);
async function handleForm() {
  if (title.value && body.value) {
    const res = await axiosService.add(title.value, body.value);
    show.value = true;
    if (res === true) {
      result.value = "Nota criada com sucesso";
    } else {
      result.value = "Ocorreu um erro";
    }
    title.value = "";
    body.value = "";
    showTimeout();
  }
}
function showTimeout() {
  setTimeout(() => {
    show.value = false;
    result.value = "";
  }, 1500);
}
</script>

<style lang="scss" scoped>
@import "@/scss/colors";

form {
  width: 40%;
  margin: 0 auto;
}
p {
  text-align: left;
  margin-top: 20px;
}
input {
  width: 100%;
  padding: 1em;
}
button {
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  border: 0;
  background: $color;
  color: #fff;
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    color: #eee;
    background: darken($color, 20);
  }
}
.result {
  font-size: 2rem;
}
</style>
