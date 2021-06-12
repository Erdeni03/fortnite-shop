export const reducer = (state, {type, payload}) => {
  switch (type) {
    case "SET_FORTNITES":
      return {
        ...state,
        fortnites: payload || [],
        loading: false
      }
    case "DEC_TO_CART":
      const decItem = state.order
        .map(el => {
          if (payload.id === el.id) {
            const newQuantity = el.quantity - 1
            return {
              ...el,
              quantity: newQuantity
            }
          } else {
            return el
          }
        })
        .filter(el => (el.quantity === 0 ? el.id !== payload.id : el))
      return {
        ...state,
        order: decItem
      }

    case "INC_TO_CART":
      const incItem = state.order.map(el => {
        if (payload.id === el.id) {
          const newQuantity = el.quantity + 1
          return {
            ...el,
            quantity: newQuantity
          }
        } else {
          return el
        }
      })
      return {
        ...state,
        order: incItem
      }
    case "ADD_TO_CART": {
      const itemIdx = state.order.findIndex(el => el.id === payload.id)

      let newOrder = null
      if (itemIdx < 0) {
        const newItem = {
          ...payload,
          quantity: 1
        }
        newOrder = [...state.order, newItem]
      } else {
        newOrder = state.order.map((elOrder, idx) => {
          if (idx === itemIdx) {
            return {
              ...elOrder,
              quantity: elOrder.quantity + 1
            }
          } else {
            return elOrder
          }
        })
      }

      return {
        ...state,
        order: newOrder
      }
    }
    case "DELETE_CART":
      return {
        ...state,
        order: state.order.filter(el => el.id !== payload.id)
      }
    case "CART_SHOW":
      return {
        ...state,
        isCart: !state.isCart
      }
    default:
      return state
  }
}
