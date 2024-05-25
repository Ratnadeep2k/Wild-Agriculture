// src/components/EditBlog.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db, storage } from '../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const EditBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [existingImageUrl, setExistingImageUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      const docRef = doc(db, 'blogs', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const blog = docSnap.data();
        setTitle(blog.title);
        setDescription(blog.description);
        setExistingImageUrl(blog.imageUrl);
      } else {
        console.log("No such document!");
      }
    };

    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = existingImageUrl;

    if (image) {
      const imageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(imageRef, image);
      imageUrl = await getDownloadURL(imageRef);
    }

    const docRef = doc(db, 'blogs', id);
    await updateDoc(docRef, {
      title,
      description,
      imageUrl
    });

    navigate('/blog');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Edit Blog</h1>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="10"
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Image</label>
          {existingImageUrl && <img src={existingImageUrl} alt="Blog" className="mb-4 w-32 h-32 object-cover rounded-md" />}
          <input
            type="file"
            className="w-full p-3 border border-gray-300 rounded-md"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300">Update</button>
      </form>
    </div>
  );
};

export default EditBlog;
