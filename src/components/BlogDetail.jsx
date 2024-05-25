import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const docRef = doc(db, 'blogs', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBlog({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No such document!");
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{blog.title}</h1>
        {blog.imageUrl && (
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="mb-4 w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-lg"
          />
        )}
        <p className="text-base md:text-lg lg:text-xl mb-4">{blog.description}</p>
        {blog.link && (
          <div className="mt-4">
            <h3 className="text-xl font-bold italic mb-2">Link For Reference:</h3>
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 block break-words"
            >
              {blog.link}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
