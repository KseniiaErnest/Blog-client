import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = "http://localhost:5005";

export default function ReadAllPost() {

const [posts, setPosts] = useState([]);

const getAllPosts = () => {
  axios.get(`${API_URL}/api/post`)
  .then((response) => setPosts(response.data.postToReadAll))
  .catch((err) => console.log(err));
};

useEffect(() => {
  getAllPosts();
}, []);

  return (
    <div>
<h1>All posts</h1>
<div className='all-post-container'>
{posts.map((post) => (
  <div key={post._id}>
<h2>{post.title}</h2>
<h4>Author</h4>
<p>Created: {post.createdAt}</p>

  </div>
))}

</div>
    </div>
  )
}