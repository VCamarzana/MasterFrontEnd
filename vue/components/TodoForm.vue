<template>
  <h2>Please, add a new task:</h2>
  <div class="input-task">
    <input
      v-model="newTask"
      type="text"
      placeholder="New task"
    />
    <button
      v-if="newTask"
      class="add-task-button"
      @click="addTask"
      aria-label="Add task"
      title="Add task"
    >
      <img src="../public/add.png" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import type { RefSymbol } from "@vue/reactivity";

const newTask = ref("");
const todoStore = useTodoStore();

const addTask = () => {
  if (newTask.value) {
    todoStore.addTodo(newTask.value);
    newTask.value = "";
  }
};
</script>

<style scoped>
.input-task {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
