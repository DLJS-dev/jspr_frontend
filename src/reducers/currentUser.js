export default function currentUser(state = {
  userID: null
}, action) {
  switch (action.type) {
    case 'USERID_ADD':
      return { userID: action.id };

    default:
      return state;
  };
};
