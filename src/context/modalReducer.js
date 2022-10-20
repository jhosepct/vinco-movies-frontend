export const modalReducer = (state, action) => {
  switch (action.type) {
    case "openModal":
      return true;
    case "closeModal":
      return false;
    default:
      return { ...state };
  }
};
