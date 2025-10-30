import React, { useState } from "react";
import { createShortUrl } from "../api/shortUrl.api";
import { useSelector } from "react-redux";
import { queryClient } from "../main";

const UrlForm = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [customSlug, setCustomSlug] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleSubmit = async () => {
    try {
      const response = await createShortUrl(url, customSlug);
      setShortUrl(response);
      queryClient.invalidateQueries({ queryKey: ["userUrls"] });
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-5 w-full">
      {/* Enter URL */}
      <div>
        <label
          htmlFor="url"
          className="block text-sm font-semibold text-gray-800 mb-1"
        >
          Enter your URL
        </label>
        <input
          type="url"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste your long URL here..."
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Shorten URL Buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleSubmit}
          type="button"
          className="flex-1 bg-black text-white py-2 rounded-md hover:bg-gray-900 transition"
        >
          Shorten URL
        </button>
       
      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-3 bg-red-100 text-red-700 px-3 py-2 rounded-md">
          {error}
        </div>
      )}

      {/* Short URL Display */}
      {shortUrl && (
        <div className="space-y-3 mt-4">
          <label className="block text-sm font-semibold text-gray-800">
            Short URL
          </label>
          <div className="flex">
            <input
              type="text"
              readOnly
              value={shortUrl}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50"
            />
            <button
              onClick={handleCopy}
              className={`px-4 py-2 rounded-r-md text-sm font-medium transition-colors duration-200 ${
                copied
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}

      {/* Custom URL Field (Optional for logged-in users) */}
      {isAuthenticated && (
        <div className="space-y-2 mt-6">
          <label
            htmlFor="customSlug"
            className="block text-sm font-semibold text-gray-800"
          >
            Custom URL (Optional)
          </label>
          <div className="flex">
            <input
              type="text"
              id="customSlug"
              value={customSlug}
              onChange={(e) => setCustomSlug(e.target.value)}
              placeholder="linkify.com/(optional)"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              onClick={handleSubmit}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-md font-medium transition"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlForm;
