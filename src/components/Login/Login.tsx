import { Row, Col, Button, Typography } from "antd"
const { Title } = Typography
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  UserCredential,
  signInWithPopup,
} from "firebase/auth"
import { auth, db } from "../../firebase/config"
import { addDoc, collection } from "firebase/firestore"
import { addDocument } from "../../firebase/service"

const facebookProvider = new FacebookAuthProvider()

const Login = () => {
  const handleLoginFacebook = async () => {
    const { _tokenResponse, user }: any = await signInWithPopup(auth, facebookProvider)
    if(_tokenResponse?.isNewUser) {
      addDocument('users', {
        displayName: user.displayName,
        email: user.email,
        uid: user.uid,
        photoURL: user.photoURL,  
        providerId: _tokenResponse.providerId
      })
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
