export function addTodo(todo) {
  return {
    type: "ADD_TODO",
    title: todo.title,
    content: todo.content,
    tags: todo.tags
  };
}

export function removeFromUnf(index) {
  return {
    type: "REMOVE_FROM_UNFINISHED",
    index
  };
}

export function finishTodoByIndex(index) {
  return {
    type: "FINISH_TODO",
    index
  };
}
