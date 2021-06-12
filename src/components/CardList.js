import {useContext} from "react"
import {FortniteContext} from "../context/context"
import {Row, Typography} from "antd"
import {CardItem} from "./CardItem"

const {Title} = Typography

const CardList = () => {
  const {fortnites = []} = useContext(FortniteContext)

  if (!fortnites.length) {
    return <Title level={2}>ОШИБКА СЕРВЕРА</Title>
  }
  return (
    <Row justify="center" style={{rowGap: 16}}>
      {fortnites.map(fortnite => {
        return <CardItem key={fortnite.id} {...fortnite} />
      })}
    </Row>
  )
}

export {CardList}
