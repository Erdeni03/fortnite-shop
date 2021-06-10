import {Modal, List, Typography, Tooltip, Button} from "antd"
import {MinusOutlined, PlusOutlined, DeleteOutlined} from "@ant-design/icons"
export const CartModal = ({
  handleCartShow,
  isCart,
  order,
  deleteCart,
  incCart,
  decCart
}) => {
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity
  }, 0)

  return (
    <Modal
      title={"Общая стоимость: " + totalPrice + "руб"}
      centered
      visible={isCart}
      onOk={handleCartShow}
      onCancel={handleCartShow}
      width={1000}
      footer={[
        <Button key="back" onClick={handleCartShow}>
          Отмена
        </Button>,
        <Button
          key="submit"
          type="primary"
          style={{background: "green", borderColor: "lightgreen"}}
        >
          Оформить
        </Button>
      ]}
    >
      <List
        bordered
        dataSource={order}
        renderItem={item => (
          <List.Item>
            <Typography.Text>{item.name}</Typography.Text>{" "}
            <Tooltip title="Убавить">
              <Button
                onClick={() => decCart(item.id)}
                type="danger"
                shape="circle"
                icon={<MinusOutlined />}
              />
            </Tooltip>{" "}
            <Typography.Text strong>{item.quantity}шт</Typography.Text>{" "}
            <Tooltip title="Добавить">
              <Button
                onClick={() => incCart(item.id)}
                type="primary"
                shape="circle"
                icon={<PlusOutlined />}
              />
            </Tooltip>{" "}
            = {item.price * item.quantity}руб
            <Tooltip title="Удалить">
              <Button
                style={{float: "right"}}
                type="danger"
                shape="circle"
                icon={<DeleteOutlined />}
                onClick={() => deleteCart(item.id)}
              />
            </Tooltip>
          </List.Item>
        )}
      />
    </Modal>
  )
}
