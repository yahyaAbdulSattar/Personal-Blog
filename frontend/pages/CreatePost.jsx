import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import axios from 'axios'


const modules = {
    toolbar: [
        [{'header': [1,2,false]}],
        ['bold', 'italic', 'underline', 'blockquote', 'code-block'],
        [{'list': 'ordered'}, {'list': 'bullet'}],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ]
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'blockquote', 'code-block',
    'list', 'bullet', 'indent',
    'link', 'image'
];


const CreatePost = () => {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');

    const createNewPost = async (ev) =>{
        ev.preventDefault()

        try{
            const response = await axios.post('http://localhost:3000/create-post', {
                title: title,
                content: content
            })

            console.log('Post created successfully: ', response.data);
        } catch(e){
            console.log(e)
        }
    }

    return (
        <form onSubmit={createNewPost}>
            <input 
                value={title}
                type="text" 
                placeholder='Title'
                onChange={(ev)=>{
                    setTitle(ev.target.value);
                }}
                />
            <ReactQuill 
                value={content}
                modules={modules} 
                formats={formats}
                onChange={newValue=>{
                    setContent(newValue);
                }}
                />
            <button>Create Post</button>
        </form>
    )
}

export default CreatePost