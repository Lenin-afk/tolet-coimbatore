import { useState } from 'react';

function PostListing() {
  // TODO: Add state for title, rent, area, contact
  // TODO: Add state for "message" with default value ""
  const [title, SetTitle] = useState("")
  const [rent, SetRent] = useState("")
  const [area, SetArea] = useState("")
  const [contact, SetContact] = useState("")
  const [message,SetMessage] = useState("")

  const handleSubmit = async () => {
    // TODO: Get token from localStorage.getItem("token")
    // TODO: POST to "http://127.0.0.1:8000/listings"
    // with Authorization header: token
    // with body: { title, rent, area, contact }
    // TODO: Set message to response.message or response.error
    const token=localStorage.getItem("token")
    fetch(("https://tolet-coimbatore.up.railway.app/listings"),{
        method:  "POST",
        headers: {"Content-Type":"application/json", token: token},
        body: JSON.stringify({title, rent, area, contact})
    })
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        SetMessage(data.message || data.error)
    })
  };

  return (
   <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">Post a Listing</h2>
        {/* TODO: Add title input */}
        {/* TODO: Add rent input type="number" */}
        {/* TODO: Add area input */}
        {/* TODO: Add contact input */}
        {/* TODO: Add button with className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700" */}
        {/* TODO: Show message */}
        <input 
          type="text"
          placeholder="Type your title"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          onChange={(e)=>{
              SetTitle(e.target.value);
          }}
        />
        <input 
          type="number"
          placeholder="Type your rent"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          onChange={(e)=>{
              SetRent(e.target.value);
          }}
        />
        <input 
          type="text"
          placeholder="Type your area"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          onChange={(e)=>{
              SetArea(e.target.value);
          }}
        />
        <input 
          type="text"
          placeholder="Type your contact"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          onChange={(e)=>{
              SetContact(e.target.value);
          }}
        />
        <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
        onClick={handleSubmit}>Submit</button>
        <p className="text-center mt-4 text-red-500">{message}</p>
      </div>
    </div>
  );
}

export default PostListing;