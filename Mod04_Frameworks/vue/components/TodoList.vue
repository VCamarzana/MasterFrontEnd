<template>
  <div class="todo-container">
    <h1>My to-do list:</h1>
    <ul>
      <li
        v-for="(todo, i) in todos"
        :key="i"
      >
        <button
          v-if="!isEditing[i]"
          @click="removeTask(i)"
          aria-label="Delete task"
          title="Delete task"
        >
          <img src="../public/delete.png" />
        </button>
        <button
          v-else
          disabled="true"
        >
          <img src="../public/delete.png" />
        </button>

        <button
          @click="isTaskCompleted(i)"
          aria-label="Task completed"
          title="Task completed"
        >
          <img
            v-if="todo.completed"
            src="../public/check.png"
          />
          <img
            v-else
            src="../public/uncheck.png"
          />
        </button>
        <span
          v-if="!isEditing[i]"
          :class="{ completed: todo.completed }"
          >{{ todo.text }}
        </span>

        <textarea
          v-else
          type="text"
          v-model="editText"
          @blur="editTask(i)"
          @keyup.enter="editTask(i)"
          class="edit-textarea"
          aria-label="Edit task textarea"
          title="Edit task textarea"
        ></textarea>

        <button
          @click="editTask(i)"
          aria-label="Edit task"
          title="Edit task"
          :disabled="isEditingOther && !isEditing[i]"
        >
          <img src="../public/edit.png" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const todoStore = useTodoStore();
const isEditing = reactive<boolean[]>([]);
const editText = ref("");
const todos = computed(() => todoStore.todos);
const isEditingOther = computed(() => isEditing.some(editingTask => editingTask));

const isTaskCompleted = (i: number) => todoStore.isTodoCompleted(i);
const removeTask = (i: number) => todoStore.removeTodo(i);

const editTask = (i: number) => {
  if (isEditing[i]) {
    todoStore.editTodo(i, editText.value);
    isEditing[i] = false;
  } else {
    editText.value = todos.value[i].text;
    isEditing[i] = true;
  }
};
</script>

<style scoped>
button:disabled {
  opacity: 0.5;
}
button {
  padding: 0 5px;
}
</style>
