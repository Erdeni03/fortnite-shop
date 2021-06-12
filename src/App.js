import {useEffect, useContext} from "react"
import {FortniteContext} from "./context/context"
import {CardList} from "./components/CardList"
import {Cart} from "./components/Cart"
import {Layout, Typography} from "antd"
import {API_URL, API_KEY} from "./config"
import {Loader} from "./components/Loader"

const {Header, Footer, Content} = Layout
const {Title, Link} = Typography

function App() {
  const {loading, setFortnites} = useContext(FortniteContext)

  useEffect(function fetchFort() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY
      }
    })
      .then(res => res.json())
      .then(data => {
        setFortnites(data.featured)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

        <Cart />
      </Header>

      <Content
        style={{minHeight: `calc(100vh - 64px - 70px)`, padding: "0 50px"}}
      >
        {loading ? <Loader /> : <CardList />}
      </Content>
      <Footer style={{background: "#85a5ff", marginTop: 16}}>
        © {new Date().getFullYear()} Copyright Text
      </Footer>
    </Layout>
  )
}

export default App
