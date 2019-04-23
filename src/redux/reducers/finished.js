function getRemovedArrayByIndex(index, array) {
  return array.filter((item, i) => {
    return i !== index;
  });
}
export default (state = [], action) => {
  switch (action.type) {
    case "ADD_FINISHED":
      // add finished todo to this array
      return [...state, action.todo];
    case "REMOVE_FINISHED":
      return getRemovedArrayByIndex(action.index, state);
    default:
      return state;
  }
};
