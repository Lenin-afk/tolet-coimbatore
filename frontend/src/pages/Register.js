import { useState } from 'react';

function Register() {
  // TODO: Add state for username and password
  // TODO: Add state for "message" with default value ""
  const [username, SetUsername]= useState("")
  const [password, SetPassword]= useState("")
  const [message, SetMessage]= useState("")

  const handleRegister = async () => {
    // TODO: POST to "http://127.0.0.1:8000/register"
    // with body: { username, password }
    // TODO: Get response JSON and set message to response.message or response.error
    fetch(("https://tolet-coimbatore-production.up.railway.app/register"), {
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({username,password})
    })
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        SetMessage(data.message || data.error)
    })
  };

  return (
    <div>
      <h2>Register</h2>
      {/* TODO: Add input for username that updates state */}
      {/* TODO: Add input for password that updates state */}
      {/* TODO: Add button that calls handleRegister on click */}
      {/* TODO: Show message below button */}
      <input  
        type="text"
        placeholder="Type your name"
        onChange={(e)=>{
            SetUsername(e.target.value);
        }}
      />
      <input 
        type="password"
        placeholder="Type your password"
        onChange={(e)=>{
            SetPassword(e.target.value);
        }}
      />
      <button onClick={handleRegister}>Register</button>
      <p>{message}</p>
    </div>
  );
}

export default Register;