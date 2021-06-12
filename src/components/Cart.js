import {Badge} from "antd"
import {ShoppingCartOutlined} from "@ant-design/icons"
import {CartModal} from "./CartModal"
import {FortniteContext} from "../context/context"
import {useContext} from "react"
export const Cart = () => {
  const {order, handleCartShow} = useContext(FortniteContext)

  return (
    <>
      <Badge count={order.length}>
        <ShoppingCartOutlined
          style={{fontSize: 30, cursor: "pointer"}}
          onClick={handleCartShow}
        />
      </Badge>
      <CartModal />
    </>
  )
}
