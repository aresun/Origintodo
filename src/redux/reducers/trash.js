function getRemovedArrayByIndex(index, array) {
  return array.filter((item, i) => {
    return i !== index;
  });
}
export default (state = [], action) => {
  switch (action.type) {
    case "ADD_TRASH":
      return [...state, action.todo];
    case "REMOVE_TRASH":
      return getRemovedArrayByIndex(action.index, state);
    default:
      return state;
  }
};
