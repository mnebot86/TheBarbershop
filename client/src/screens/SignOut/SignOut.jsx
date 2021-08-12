import { useEffect } from "react";
import { logout } from "../../services/clients";
import { useHistory } from "react-router-dom"

const SignOut = (props) => {
  const { setClient } = props
  const history = useHistory()

  useEffect(() => {
    const signOutClient = async () => {
      await logout()
      setClient(null)
      history.push('/')
    }
    signOutClient()
  },[history, setClient])
  return ''
};

export default SignOut;