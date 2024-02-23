import { ReactNode, createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase/config"
import { Spin } from "antd"

interface Props {
  children: ReactNode
}

const initialValue = {
  isLoading: false,
  user: {
    displayName: '',
    email: '',
    uid: '',
    photoURL: ''
  },
}

export const AuthContext = createContext(initialValue)

const AuthProvider = ({ children }: Props) => {
  const navigate = useNavigate()
  const [user, setUser] = useState<any>({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const unSubscribed = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user
        setUser({ displayName, email, uid, photoURL })
        setIsLoading(false)
        navigate("/")
				return
      }

			setIsLoading(false)
      navigate("/login")
			return
    })

    // clean function
    return () => {
      unSubscribed()
    }
  }, [navigate])

  return (
    <AuthContext.Provider value={user}>
      {isLoading ? <Spin /> : children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
