export function addTrash(todo) {
  return {
    type: "ADD_TRASH",
    todo
  };
}
export function removeFromT(index) {
  return {
    type: "REMOVE_TRASH",
    index
  };
}
