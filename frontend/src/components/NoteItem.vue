<template>
  <div class="note">
    <h1>{{ note.title }}</h1>
    <p>{{ note.body }}</p>
    <div class="buttons">
      <button class="edit" @click="editNote">✏</button>
      <button class="delete" @click="deleteNote">🗑</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import axiosService from "@/services/axiosService";

const props = defineProps({
  note: { type: Object, default: String },
});
const emits = defineEmits(["fetchAll"]);

function editNote() {
  console.log("Editando nota");
}
async function deleteNote() {
  const res = await axiosService.delete(props.note._id);
  if (res) {
    emits("fetchAll");
  }
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
