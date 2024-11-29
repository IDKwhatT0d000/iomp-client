import React, { useState } from 'react';
import axios from 'axios';
import { Hourglass } from 'react-loader-spinner';

const Analyze = () => {
  const cloud_name = import.meta.env.VITE_CLOUD_NAME;
  const preset = import.meta.env.VITE_PRESET;
  const url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;
  const [imageUrl, setImageUrl] = useState('');
  const [analyzedImageUrl, setAnalyzedImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', preset);
    data.append('cloud_name', cloud_name);

    try {
      const res = await axios.post(url, data);
      setImageUrl(res.data.secure_url);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleReset = () => {
    setImageUrl('');
    setAnalyzedImageUrl('');
  };

  const handleClick = async () => {
    if (!imageUrl) {
      alert('Please upload an image first.');
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post('http://127.0.0.1:5000/process', {
        image_url: imageUrl,
      });
      setAnalyzedImageUrl(res.data.image_url);
    } catch (error) {
      console.error('Error processing image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-5 space-y-8">
      <div className="flex space-x-10">
        <h1 className="text-3xl font-bold text-gray-800">Image Analyzer</h1>
        <button
          className="bg-gradient-to-r from-yellow-400 to-red-500 hover:from-red-500 hover:to-yellow-400 text-white font-medium py-2 px-6 rounded-lg shadow-md"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div className="flex items-center space-y-4 space-x-[100px]">
        <div className="flex flex-col">
          <label className="relative cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:from-blue-500 hover:to-green-400">
            <input
              type="file"
              onChange={handleChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            Upload Image
          </label>
          {imageUrl && (
            <div className="w-full max-w-md mt-4">
              <h3 className="text-gray-700 font-medium mb-2">Uploaded Image:</h3>
              <img
                src={imageUrl}
                alt="Uploaded"
                className="rounded-lg shadow-md object-cover w-full"
              />
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <button
            onClick={handleClick}
            className={`bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-2 px-8 rounded-lg shadow-md hover:from-pink-500 hover:to-purple-500 ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Analyzing...' : 'Analyze'}
          </button>
          {isLoading && (
            <Hourglass
              visible={true}
              height="80"
              width="80"
              className="mt-10"
              ariaLabel="hourglass-loading"
              colors={['#306cce', '#72a1ed']}
            />
          )}
          {analyzedImageUrl && (
            <div className="w-full max-w-md mt-4">
              <h3 className="text-gray-700 font-medium mb-2">Processed Image:</h3>
              <img
                src={analyzedImageUrl}
                alt="Processed"
                className="rounded-lg shadow-md object-cover w-full"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analyze;
