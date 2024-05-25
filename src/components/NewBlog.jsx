// src/components/NewBlog.js
import React, { useState } from 'react';
import { db, storage } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { Description } from '@headlessui/react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const NewBlog = () => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();
    if (!image) {
        toast("Image is Required");
        return;
      }  
    let imageUrl = '';
    if (image) {
      const imageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(imageRef, image);
      imageUrl = await getDownloadURL(imageRef);
    }

    await addDoc(collection(db, 'blogs'), {
      title,
      description,
      imageUrl
    });

    navigate('/blog');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">New Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-4">
            <label className=''>Link For Reference</label>
            <input
              type='text'
              className='w-full p-2 border border-gray-300 rounded'
              value={link}
              onChange={(e) => setLink(e.target.value)}
              required
              />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Image</label>
          <input
            type="file"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Save</button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default NewBlog;
