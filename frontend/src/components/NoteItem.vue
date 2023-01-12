<template>
  <div class="note" :class="{ deleting: deleting }">
    <h1>{{ note.title }}</h1>
    <p>{{ note.body }}</p>
    <div class="buttons">
      <button class="edit" @click="toggleModal">✏</button>
      <button class="delete" @click="deleteNote">🗑</button>
    </div>
  </div>
  <ModalItem
    @fetch-all-modal="emits('fetchAll')"
    @toggle-modal="toggleModal"
    v-if="editing"
    :id="note._id"
  />
</template>

<script setup lang="ts">
import ModalItem from "@/components/ModalItem.vue";

import axiosService from "@/services/axiosService";
import { ref } from "vue";

const props = defineProps({
  note: { type: Object, default: String },
});

const emits = defineEmits(["fetchAll"]);
const editing = ref(false);
const deleting = ref(false);

async function deleteNote() {
  const confirmation = confirm(
    "🚮 Confirme que deseja apagar a nota!\nAVISO: Essa ação é irreversível "
  );
  if (confirmation) {
    const res = await axiosService.delete(props.note._id);
    if (res) {
      deleting.value = true;
      setTimeout(() => {
        emits("fetchAll");
      }, 200);
    }
  }
}

function toggleModal() {
  editing.value = !editing.value;
}
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
  &.deleting {
    transition: 0.2s all;
    transform: scale(0);
  }
}
h1 {
  font-size: 2.4em;
  text-decoration: underline;
}
p {
  color: #787878;
}
.buttons {
  display: flex;
  justify-content: center;
  gap: 5px;
  button {
    border: none;
    padding: 0.4em;
    background: #787878;
    color: #fff;
    font-size: 1.3rem;
    width: 50px;
    height: 50px;
    transition: all 0.2s;
    cursor: pointer;
    &.delete {
      background: rgb(255, 73, 73);
    }
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
