import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {loginLoading, loginSuccess, loginFailure} from '../Redux/Login/action'
import {useNavigate} from 'react-router-dom'

export const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleSubmit = () => {
    const userDetails = {
        username,
        password
    }

    dispatch(loginLoading())
    fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
        method: 'POST',
        body: JSON.stringify(userDetails),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => res.json())
    .then((res) => {
        dispatch(loginSuccess(res.token));
        navigate("/")
    })
    .catch((err) => dispatch(loginFailure()))
  }

  return (
    <div>
        <input type="text" placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
        <br/>
        <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br />
        <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  )
}
