import { useState } from 'react';
// import useNavigate and call navigate("/")
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  // TODO: Add a state "isError" with default false
  const [isError, setIsError] = useState(false);

  const handleLogin = async () => {
    // TODO: POST to "http://127.0.0.1:8000/login"
    // with body: { username, password }
    // TODO: If response has token, save it using localStorage.setItem("token", token)
    // TODO: Set message to "Login successful!" or response.error
    const response = await fetch(("https://tolet-coimbatore.up.railway.app/login"),{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({username,password})
    })
    const data = await response.json()
      if (data.token) {
        localStorage.setItem("token",data.token)
        setMessage("Login successful!")
        // TODO: When setting message, also set isError
        // setIsError(true) for errors, setIsError(false) for success
        setIsError(false)
        // TODO: Show message first, then navigate after 1.5 seconds
        setTimeout(() => navigate("/"), 1500);
      }
      else {
        localStorage.removeItem("token")
        setMessage(data.error)
        setIsError(true)
      }
  };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">Login</h2>
        {/* TODO: Add username input with className="w-full p-3 border border-gray-300 rounded-lg mb-4" */}
        {/* TODO: Add password input type="password" with same className */}
        {/* TODO: Add button with className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700" */}
        {/* TODO: Show message in p with className="text-center mt-4 text-red-500" */}
        <input 
          type="text"
          placeholder="Type your name here"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          onChange={(e)=>{
              setUsername(e.target.value);
          }}
        />
        <input 
          type="password"
          placeholder="Type your password here"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          onChange={(e)=>{
              setPassword(e.target.value);
          }}
        />
        <button onClick={handleLogin}
        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">Login</button>
        {/* TODO: Change message display to: */} 
        <p 
          className={
            isError 
            ? "text-red-500 text-center mt-4" 
            : "text-green-500 text-center mt-4"
          }
        >
          {message}
        </p>
      </div>
    </div>
  );
}

export default Login;