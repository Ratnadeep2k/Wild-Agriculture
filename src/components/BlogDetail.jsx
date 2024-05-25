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
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{blog.title}</h1>
      {blog.imageUrl && (
        <img src={blog.imageUrl} alt={blog.title} className="mb-4 w-full object-cover h-64 sm:h-80 md:h-96 lg:h-[500px]" />
      )}
      <p className="text-base md:text-lg lg:text-xl">{blog.description}</p>

<h3 class="text-1xl font-bold dark:text-gray-900 italic">Link For Reference :</h3>
              {blog.link && (
                <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 block mb-2">
                  {blog.link}
                </a>
       )}
    </div>
  );
};

export default BlogDetail;
