/* utilities */
function getRemovedArrayByIndex(index, array) {
  return array.filter((todo, i) => {
    return i !== index;
  });
}
/* reducer */
export default (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { title: action.title, content: action.content, tags: action.tags }
      ];
    case "REMOVE_FROM_UNFINISHED":
    case "FINISH_TODO":
      return getRemovedArrayByIndex(action.index, state);
    default:
      return state;
  }
};
