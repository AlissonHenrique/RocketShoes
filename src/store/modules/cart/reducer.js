export default function cart(state = [], action) {
  // /sitch apenas para ouviar action de cart
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      return state;
  }
}
