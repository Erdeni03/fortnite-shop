import {Badge} from "antd"
import {ShoppingCartOutlined} from "@ant-design/icons"
import {CartModal} from "./CartModal"

export const Cart = ({
  order,
  handleCartShow,
  isCart,
  deleteCart,
  decCart,
  incCart
}) => {
  return (
    <>
      <Badge count={order.length}>
        <ShoppingCartOutlined
          style={{fontSize: 30, cursor: "pointer"}}
          onClick={handleCartShow}
        />
      </Badge>
      <CartModal
        isCart={isCart}
        handleCartShow={handleCartShow}
        order={order}
        deleteCart={deleteCart}
        incCart={incCart}
        decCart={decCart}
      />
    </>
  )
}
