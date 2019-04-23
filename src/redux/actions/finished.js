export function addFinished(todo) {
  return {
    type: "ADD_FINISHED",
    todo
  };
}
export function removeFromF(index) {
  return {
    type: "REMOVE_FINISHED",
    index
  };
}
