export default (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { title: action.title, content: action.content, tags: action.tags }
      ];
    default:
      return state;
  }
};
