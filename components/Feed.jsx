'use client';

import { useState, useEffect } from 'react'
import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick}) => {
  return (
    <div className='mt-16 prompt_layout' >
      { data.map((post) => (
        <PromptCard 
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {

  const [ searchText, setSearchText ] = useState('');
  const [ posts, setPosts ] = useState([]);

  // Search for keyword and filter posts.
  async function filterPost(searchText) {
    if (searchText) {
      try {
        const response = await fetch(`api/prompt`);
        const data = await response.json();
        const filteredPosts = data.filter((post) => 
          post.prompt.includes(searchText) || 
          post.tag.includes(searchText) ||
          post.creator.username.includes(searchText) ||
          post.creator.email.includes(searchText)
        );
        
        setPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  }

  // Handle and search search post, tag or username.
  const handleSearchChange = async (e) => {
    e.preventDefault();
    setSearchText( e.target.value)
    await filterPost(searchText);
  };

  // Handle and search tag click.
  const handleTagSearch = async (e) => {
    setSearchText(e);
    await filterPost(e);
  }


  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();

      // Inverting posts.
      setPosts(data.reverse());
    }
    fetchPosts();
  }, []);

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input 
          type="text" 
          placeholder="Search by tag, content, or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      
      <PromptCardList 
        data= {posts}
        handleTagClick={handleTagSearch}
      />

    </section>
  ) 
}

export default Feed