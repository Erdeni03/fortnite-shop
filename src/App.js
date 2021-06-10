import {CardList} from "./components/CardList"
import {Cart} from "./components/Cart"
import {Layout, Typography, message} from "antd"
import {useState, useEffect} from "react"
import {API_URL, API_KEY} from "./config"
import {Loader} from "./components/Loader"

const {Header, Footer, Content} = Layout
const {Title, Link} = Typography

function App() {
  const [fortnites, setFortnites] = useState([])
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState([])
  const [isCart, setIsCart] = useState(false)

  useEffect(function fetchFort() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY
      }
    })
      .then(res => res.json())
      .then(data => {
        data.featured && setFortnites(data.featured)
        setLoading(false)
      })
  }, [])

  const handleCartShow = () => {
    setIsCart(!isCart)
  }

  const addToCart = item => {
    const itemIdx = order.findIndex(el => el.id === item.id)
    message.success("Успешно добавлен " + item.name)
    if (itemIdx < 0) {
      const newItem = {
        ...item,
        quantity: 1
      }
      setOrder([...order, newItem])
    } else {
      const newOrder = order.map((elOrder, idx) => {
        if (idx === itemIdx) {
          return {
            ...elOrder,
            quantity: elOrder.quantity + 1
          }
        } else {
          return elOrder
        }
      })
      setOrder(newOrder)
    }
  }

  const deleteCart = id => {
    const newItem = order.filter(el => el.id !== id)
    setOrder(newItem)
  }

  const incCart = id => {
    const newItem = order.map(el => {
      if (id === el.id) {
        const newQuantity = el.quantity + 1
        return {
          ...el,
          quantity: newQuantity
        }
      } else {
        return el
      }
    })
    setOrder(newItem)
  }
  const decCart = id => {
    const newItem = order
      .map(el => {
        if (id === el.id) {
          const newQuantity = el.quantity - 1
          return {
            ...el,
            quantity: newQuantity
          }
        } else {
          return el
        }
      })
      .filter(el => (el.quantity === 0 ? el.id !== id : el))

    setOrder(newItem)
  }
  const styleHeader = {
    background: "#85a5ff",
    marginBottom: 16,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
  return (
    <Layout>
      <Header style={styleHeader}>
        <Link href="#">
          <Title level={2}>Fortnite Shop</Title>
        </Link>

        <Cart
          order={order}
          handleCartShow={handleCartShow}
          isCart={isCart}
          deleteCart={deleteCart}
          incCart={incCart}
          decCart={decCart}
        />
      </Header>

      <Content
        style={{minHeight: `calc(100vh - 64px - 70px)`, padding: "0 50px"}}
      >
        {loading ? (
          <Loader />
        ) : (
          <CardList fortnites={fortnites} addToCart={addToCart} />
        )}
      </Content>
      <Footer style={{background: "#85a5ff", marginTop: 16}}>
        © {new Date().getFullYear()} Copyright Text
      </Footer>
    </Layout>
  )
}

export default App
