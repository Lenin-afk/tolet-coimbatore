import { useState } from 'react';

function Login() {
  // TODO: Add state for username and password
  // TODO: Add state for "message" with default value ""
  const [username,SetUsername]=useState("")
  const [password,SetPassword]=useState("")
  const [message,SetMessage]=useState("")

  const handleLogin = async () => {
    // TODO: POST to "http://127.0.0.1:8000/login"
    // with body: { username, password }
    // TODO: If response has token, save it using localStorage.setItem("token", token)
    // TODO: Set message to "Login successful!" or response.error
    fetch(("http://127.0.0.1:8000/login"),{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({username,password})
    })
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        if (data.token) {
            localStorage.setItem("token",data.token)
            SetMessage("Login successful!")
        }
        else {
            localStorage.removeItem("token")
            SetMessage(data.error)
        }
    })

  };

  return (
    <div>
      <h2>Login</h2>
      {/* TODO: Add input for username */}
      {/* TODO: Add input for password */}
      {/* TODO: Add button that calls handleLogin */}
      {/* TODO: Show message */}
      <input 
        type="text"
        placeholder="Type your name here"
        onChange={(e)=>{
            SetUsername(e.target.value);
        }}
      />
      <input 
        type="password"
        placeholder="Type your password here"
        onChange={(e)=>{
            SetPassword(e.target.value);
        }}
      />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
}

export default Login;