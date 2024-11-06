
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import BlogShimmer from '../utils/BlogShimmer';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogCollection = collection(db, 'blogs');
      const blogSnapshot = await getDocs(blogCollection);
      const blogList = blogSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBlogs(blogList);
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  return (
    loading ? <BlogShimmer/> : (
      <div className="container mx-auto p-4 mb-16 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-500">
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              {blog.imageUrl && (
                <img src={blog.imageUrl} alt={blog.title} className="w-full h-40 object-cover rounded mb-2" />
              )}
              <p className="mb-4">{blog.description.substring(0, 100)}...</p>
              <Link to={`/blog/${blog.id}`} className="text-blue-500 hover:text-blue-700">Read more</Link>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Blog;
