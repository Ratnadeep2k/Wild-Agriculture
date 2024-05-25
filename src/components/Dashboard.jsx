// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/');
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogCollection = collection(db, 'blogs');
      const blogSnapshot = await getDocs(blogCollection);
      const blogList = blogSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBlogs(blogList);
    };

    fetchBlogs();
  }, []);

  const deleteBlog = async (id) => {
    await deleteDoc(doc(db, 'blogs', id));
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Blog Posts</h1>
      <div className="flex justify-center mb-4">
        <Link to="/new" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">New Blog</Link>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
            <p className="mb-4">{blog.description}</p>
            <div className="flex justify-between items-center">
              <Link to={`/edit/${blog.id}`} className="text-blue-500 hover:text-blue-700">Edit</Link>
              <button onClick={() => deleteBlog(blog.id)} className="text-red-500 hover:text-red-700">Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button onClick={handleLogout} className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
