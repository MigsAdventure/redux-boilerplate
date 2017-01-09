export default function appReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case 'SOME_ACTION': {
      return payload;
    }

    default: return state;
  }
}
