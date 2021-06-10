import {Spin, Space} from "antd"
export const Loader = () => {
  return (
    <Space size="middle" style={{width: "100%", justifyContent: "center"}}>
      <Spin size="large" />
    </Space>
  )
}
