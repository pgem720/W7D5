const initialState = {
  session: []
}

export default (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    default:
      return state;
  }
};