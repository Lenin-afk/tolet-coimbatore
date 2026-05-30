import { useState } from 'react';

function PostListing() {
  // TODO: Add state for title, rent, area, contact
  // TODO: Add state for "message" with default value ""
  const [title, setTitle] = useState("");
  const [rent, setRent] = useState("");
  const [area, setArea] = useState("");
  const [contact, setContact] = useState("");
  const [photo, setPhoto] = useState(null);
  const [message,setMessage] = useState("");
  // TODO: Add a state "isError" with default false
  const [isError, setIsError] = useState(false);

  const handleSubmit = async () => {
    // TODO: If photo exists, create a FormData object
    // append photo to it and POST to "/upload-photo"
    // get photo_url from response

    // TODO: POST to "/listings" with title, rent, area, contact and photo_url
    // with Authorization header token
    const token=localStorage.getItem("token")
    let photo_url=""
    if (photo){
      const formData = new FormData()
      formData.append("file", photo)
      const uploadResponse = await fetch(("https://tolet-coimbatore.up.railway.app/upload-photo"),{
        method: "POST",
        body: formData
      })
      const uploadData = await uploadResponse.json()
      photo_url = uploadData.photo_url
    }

    const response = await fetch(("https://tolet-coimbatore.up.railway.app/listings"),{
      method:  "POST",
      headers: {"Content-Type":"application/json", token: token},
      body: JSON.stringify({title, rent: parseInt(rent), area, contact, photo_url})
    })
    const data = await response.json()
      if (data.message){
        setMessage(data.message);
        setIsError(false);
      }
      else{
        setMessage(data.error);
        setIsError(true);
      }
  };

  return (
   <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">Post a Listing</h2>
        {/* TODO: Add title input */}
        {/* TODO: Add rent input type="number" */}
        {/* TODO: Add area input */}
        {/* TODO: Add contact input */}
        {/* TODO: Add file input that updates photo state */}
        {/* TODO: Add button with className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700" */}
        {/* TODO: Show message */}
        <input 
          type="text"
          placeholder="Type your title"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          onChange={(e)=>{
              setTitle(e.target.value);
          }}
        />
        <input 
          type="number"
          placeholder="Type your rent"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          onChange={(e)=>{
              setRent(e.target.value);
          }}
        />
        <input 
          type="text"
          placeholder="Type your area"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          onChange={(e)=>{
              setArea(e.target.value);
          }}
        />
        <input 
          type="text"
          placeholder="Type your contact"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          onChange={(e)=>{
              setContact(e.target.value);
          }}
        />
        <input 
          type="file"
          placeholder="Upload your file"
          onChange={(e)=>{
            setPhoto(e.target.files[0]);
          }}
        />
        <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
        onClick={handleSubmit}>Submit</button>
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

export default PostListing;