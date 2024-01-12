import React from 'react'
import Axios from "axios";
import { useEffect, useState } from "react";
import DomPurify from 'dompurify';
import { Link } from 'react-router-dom';


const ShowPost = () => {
    const [blogs, setBlogs] = useState([]);

    const getBlogs = async () => {
      try {
        const response = await Axios.get("http://localhost:3000/posts");
        setBlogs(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    useEffect(() => {
      getBlogs();
    }, []);

    const sanitizeHTML = (html) => {
        return  { __html: DomPurify.sanitize(html) }
    }
  
    return (
      <>
        <div className='blogs-container'>
          {blogs.map((blog) => (
            <Link to={`/post/${blog._id}`} className='blog' key={blog._id}>
              <div className='blog-title'>{blog.title}</div>
            </Link>
          ))}
        </div>
      </>
    );
}

export default ShowPost