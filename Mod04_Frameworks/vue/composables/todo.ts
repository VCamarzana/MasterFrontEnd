import { defineStore } from "pinia";
import type { Todo } from "@/types";

export const useTodoStore = defineStore(
  "todo",
  () => {
    const todos = ref<Todo[]>([]);

    const addTodo = (todo: string) => todos.value.push({ text: todo, completed: false });
    const removeTodo = (i: number) => todos.value.splice(i, 1);
    const isTodoCompleted = (i: number) => (todos.value[i].completed = !todos.value[i].completed);
    const editTodo = (i: number, newText: string) => (todos.value[i].text = newText);
    return { todos, addTodo, removeTodo, isTodoCompleted, editTodo };
  },
  {
    persist: true,
  },
);
