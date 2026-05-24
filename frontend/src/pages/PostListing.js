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
    fetch(("https://tolet-coimbatore-production.up.railway.app/listings"),{
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
    <div>
      <h2>Post a Listing</h2>
      {/* TODO: Add input for title */}
      {/* TODO: Add input for rent */}
      {/* TODO: Add input for area */}
      {/* TODO: Add input for contact */}
      {/* TODO: Add button that calls handleSubmit */}
      {/* TODO: Show message */}
      <input 
        type="text"
        placeholder="Type your title"
        onChange={(e)=>{
            SetTitle(e.target.value);
        }}
      />
      <input 
        type="number"
        placeholder="Type your rent"
        onChange={(e)=>{
            SetRent(e.target.value);
        }}
      />
      <input 
        type="text"
        placeholder="Type your area"
        onChange={(e)=>{
            SetArea(e.target.value);
        }}
      />
      <input 
        type="text"
        placeholder="Type your contact"
        onChange={(e)=>{
            SetContact(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>submit</button>
      <p>{message}</p>
    </div>
  );
}

export default PostListing;