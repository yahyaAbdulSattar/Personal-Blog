import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import DomPurify from 'dompurify'
import {useParams} from 'react-router-dom'


const SinglePost = () => {
    const [blog, setBlog] = useState([]);
    const {id} = useParams() 

    const getBlog = async () => {
        try {
          const response = await Axios.get(`http://localhost:3000/post/${id}`);
          setBlog(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

    useEffect(() => {
        getBlog();
    }, []);

    const sanitizeHTML = (html) => {
        return  { __html: DomPurify.sanitize(html) }
    }
  

    return (
        <div>
            <div>{blog.title}</div>
            <div className='blog-content' dangerouslySetInnerHTML={sanitizeHTML(blog.content)}/>
        
        </div>
    )
}

export default SinglePost