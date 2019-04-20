export default function addTodo(todo) {
  return {
    type: "ADD_TODO",
    title: todo.title,
    content: todo.content,
    tags: todo.tags
  };
}
