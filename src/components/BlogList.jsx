// src/components/BlogList.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogCollection = collection(db, 'blogs');
      const blogSnapshot = await getDocs(blogCollection);
      const blogList = blogSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBlogs(blogList);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white p-4 rounded shadow mb-4">
            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
            {blog.imageUrl && (
              <img src={blog.imageUrl} alt={blog.title} className="w-full h-40 object-cover mb-2" />
            )}
            <p className="mb-4">{blog.description.substring(0, 100)}...</p>
            
            <Link to={`/blog/${blog.id}`} className="text-blue-500">Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
