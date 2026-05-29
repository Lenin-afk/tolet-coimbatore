import { useState } from 'react';

function Register() {
  // TODO: Add state for username and password
  // TODO: Add state for "message" with default value ""
  const [username, setUsername]= useState("")
  const [password, setPassword]= useState("")
  const [message, setMessage]= useState("")

  const handleRegister = async () => {
    // TODO: POST to "http://127.0.0.1:8000/register"
    // with body: { username, password }
    // TODO: Get response JSON and set message to response.message or response.error
    fetch(("https://tolet-coimbatore.up.railway.app/register"), {
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({username,password})
    })
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        setMessage(data.message || data.error)
    })
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">Register</h2>
        {/* TODO: Add username input */}
        {/* TODO: Add password input */}
        {/* TODO: Add button with green color this time "bg-green-600 hover:bg-green-700" */}
        {/* TODO: Show message */}
        <input  
          type="text"
          placeholder="Type your name"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          onChange={(e)=>{
              setUsername(e.target.value);
          }}
        />
        <input 
          type="password"
          placeholder="Type your password"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          onChange={(e)=>{
              setPassword(e.target.value);
          }}
        />
        <button className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg"
        onClick={handleRegister}>Register</button>
        <p className="text-center mt-4 text-red-500">{message}</p>
      </div>
    </div>
  );
}

export default Register;