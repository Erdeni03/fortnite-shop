import {Row, Typography} from "antd"
import {CardItem} from "./CardItem"

const {Title} = Typography

const CardList = props => {
  const {fortnites = [], addToCart = Function.prototype} = props
  if (!fortnites.length) {
    return <Title level={2}>ОШИБКА СЕРВЕРА</Title>
  }
  return (
    <Row justify="center" style={{rowGap: 16}}>
      {fortnites.map(fortnite => {
        return (
          <CardItem key={fortnite.id} {...fortnite} addToCart={addToCart} />
        )
      })}
    </Row>
  )
}

export {CardList}
