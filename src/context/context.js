import {createContext} from "react"
import {reducer} from "../reducer/reducer"
import {useReducer} from "react"
import {message} from "antd"

export const FortniteContext = createContext()

const initialState = {
  fortnites: [],
  loading: true,
  order: [],
  isCart: false
}
export const ContextProvider = ({children}) => {
  const [value, dispatch] = useReducer(reducer, initialState)

  value.handleCartShow = () => {
    dispatch({type: "CART_SHOW"})
  }
  value.deleteCart = id => {
    dispatch({type: "DELETE_CART", payload: {id: id}})
  }

  value.addToCart = item => {
    message.success("Успешно добавлен " + item.name)
    dispatch({type: "ADD_TO_CART", payload: item})
  }
  value.incCart = id => {
    dispatch({type: "INC_TO_CART", payload: {id: id}})
  }
  value.decCart = id => {
    dispatch({type: "DEC_TO_CART", payload: {id: id}})
  }
  value.setFortnites = data => {
    dispatch({type: "SET_FORTNITES", payload: data})
  }
  return (
    <FortniteContext.Provider value={value}>
      {children}
    </FortniteContext.Provider>
  )
}
