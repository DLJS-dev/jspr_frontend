let initialState = {
  userData: null,
}

export function currentUser(state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER':
      return {...state, userData: action.userData };

    default:
      return state;
  }
};
