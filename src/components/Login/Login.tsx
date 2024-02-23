import { Row, Col, Button, Typography } from "antd"
const { Title } = Typography
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth"
import { auth } from "../../firebase/config"

const facebookProvider = new FacebookAuthProvider()

const Login = () => {
  const handleLoginFacebook = async () => {
    const data = await signInWithPopup(auth, facebookProvider)
    try {
      console.log(data)
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <div>
      <Row
        justify='center'
        style={{ height: "800px" }}>
        <Col span={8}>
          <Title level={2}>Chat App</Title>
          <Button
            style={{ width: "100%", textAlign: "center", marginBottom: "10px" }}
            size='large'>
            Đăng nhập bằng Google
          </Button>
          <Button
            style={{ width: "100%" }}
            size='large'
            onClick={handleLoginFacebook}>
            Đăng nhập bằng Facebook
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default Login
