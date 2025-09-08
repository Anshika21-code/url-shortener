import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createShortUrl } from "../api/shortUrl.api";

const UrlForm  = () => {

  const [url, setUrl] = useState("https://www.google.com") 
  const [shortUrl, setShortUrl] = useState()
  const [isCopied, setIsCopied] = useState(false) 
  

  const handleSubmit = async ( ) => { 
    const  shortUrl = await createShortUrl(url)
    setShortUrl(shortUrl)
  }
   
  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }
   
 
  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">Enter URL</label>
        <input
          type="url"
          id="url"
          value={url}
          onInput={(event) => setUrl(event.target.value)}
          placeholder="https://example.com"
          className="border p-2 w-full mb-4 rounded"
          required
        />  
        <button
         onClick={handleSubmit} 
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
        >Shorten URL</button>

        {/* 
        {error && <div className="text-red-500 mt-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>} 
        */}

        
        {shortUrl && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Your shortened URL:</h2>
            <div className="flex items-center">
              <input
                type="text"
                readOnly
                value={shortUrl}
                className="flex-1 p-2 border border-gray-300 rounded-l-md bg-gray-50"
              />
              <button
                onClick={handleCopy}
                className={`px-4 py-2 rounded-r-md transition-colors ${isCopied ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                {isCopied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        )} 
        
      </div>
  )
}

export default UrlForm  
