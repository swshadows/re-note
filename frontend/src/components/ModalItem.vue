<template>
  <div @click.self="emits('toggleModal')" class="backdrop">
    <div class="modal">
      <h1>Editando nota:</h1>
      <form @submit.prevent="handleForm">
        <label>
          <p>Titulo:</p>
          <input
            type="text"
            placeholder="Insira o novo titulo da nota"
            required
            v-model="title"
          />
        </label>
        <label>
          <p>Corpo:</p>
          <textarea
            type="text"
            placeholder="Insira o novo conteudo da nota"
            required
            v-model="body"
          ></textarea>
        </label>
        <button>Submit</button>
      </form>
      <div class="result" v-if="show">{{ result }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import axiosService from "@/services/axiosService";

const props = defineProps({
  id: { type: String, default: String },
});

const emits = defineEmits(["toggleModal", "fetchAllModal"]);

const title = ref("");
const body = ref("");
const result = ref("");
const show = ref(false);

onMounted(async () => {
  const data = await axiosService.get(props.id);
  const { title: t, body: b } = data;
  title.value = t;
  body.value = b;
});

async function handleForm() {
  if (title.value && body.value) {
    const res = await axiosService.update(props.id, title.value, body.value);
    if (res) {
      result.value = "✅ Nota editada com sucesso";
      show.value = true;
      emits("fetchAllModal");
      showTimeout();
    } else result.value = "❌ Erro ao editar nota";
  }
}

function showTimeout() {
  setTimeout(() => {
    show.value = false;
    result.value = "";
    emits("toggleModal");
  }, 1500);
}
</script>

<style lang="scss" scoped>
@import "@/scss/colors";

.backdrop {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal {
  width: 50%;
  min-height: 500px;
  background: #fff;
  border-radius: 10px;
  padding: 1rem;
  animation: 400ms center-spawn 1;
}
p {
  text-align: left;
  margin-top: 20px;
}
input,
textarea {
  width: 100%;
  padding: 1em;
  resize: vertical;
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
@keyframes center-spawn {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}
</style>
